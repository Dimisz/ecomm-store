import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import { AddCircleOutline, DeleteForeverOutlined, RemoveCircleOutline } from "@mui/icons-material";

import CartSummary from "./CartSummary";
import CartPageMobile from "./CartPageMobile";
import { useState } from "react";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { removeItem, setCart } from "./cartSlice";


const CartPage = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const [status, setStatus] = useState({
    loading: false,
    name: ''
  });
  
  const handleAddItem = (productId: number, name: string) => {
    setStatus({ loading: true, name });
    agent.Cart.addItem(productId)
      .then((cart) => dispatch(setCart(cart)))
      .catch((error) => console.log(error))
      .finally(() => setStatus({ loading: false, name: '' }));
  }

  const handleRemoveItem = (productId: number, name: string, quantity = 1) => {
    setStatus({ loading: true, name });
    agent.Cart.removeItem(productId, quantity)
      .then(() => dispatch(removeItem({productId, quantity})))
      .catch((error) => console.log(error))
      .finally(() => setStatus({ loading: false, name: '' }));
  }

  

  if(!cart || cart.items.length <= 0) return <Typography variant='h3'>Your cart is empty</Typography>;

  const subtotal = cart?.items.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  const deliveryFee = subtotal > 0 && subtotal < 100 ? 5 : 0;
  return(
    <>
      <CartPageMobile 
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        status={status}
        handleAddItem={handleAddItem} 
        handleRemoveItem={handleRemoveItem} 
      />
      <Paper sx={{ width: '100%', overflow: 'hidden', display: {xs: 'none', md: 'flex'} }}>
        <TableContainer sx={{ maxHeight: '90vh' }}>
          <Table stickyHeader aria-label="products in the cart">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Subtotal</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.items.map((item) => (
                <TableRow key={item.productId} hover>
                  <TableCell scope="row">
                    <Box
                      display={{ sx: 'none', md: 'flex'}}
                      alignItems='center'
                    >
                      <img
                        src={item.pictureUrl}
                        alt={item.name}
                        style={{
                          height: 50,
                          marginRight: 20
                        }}
                      />
                      {/* <span>{item.name}</span> */}
                      <Typography variant='h6'>{item.name}</Typography>
                    </Box>
                    {/* mobile version */}
                  </TableCell>
                  <TableCell align="left">${(item.price).toFixed(2)}</TableCell>
                  <TableCell align="left">
                    <Box display='flex' alignItems='center'>
                      <LoadingButton 
                        color='primary' 
                        loading={status.loading && status.name === 'decrease' + item.productId}
                        onClick={() => handleRemoveItem(item.productId, 'decrease' + item.productId)}
                      >
                        <RemoveCircleOutline />
                      </LoadingButton>
                      <Typography variant='h6'>{item.quantity}</Typography>
                      <LoadingButton 
                        color='primary' 
                        loading={status.loading && status.name === 'increase' + item.productId}
                        onClick={() => handleAddItem(item.productId, 'increase' + item.productId)}
                      >
                        <AddCircleOutline/>
                      </LoadingButton>
                    </Box>
                  </TableCell>
                  <TableCell align="left">${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell align="left">
                    <LoadingButton 
                      color='error'
                      loading={status.loading && status.name === 'delete' + item.productId} 
                      onClick={() => handleRemoveItem(item.productId, 'delete' + item.productId, item.quantity)}
                    >
                      <DeleteForeverOutlined />
                    </LoadingButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <CartSummary subtotal={subtotal} deliveryFee={deliveryFee}/>
            </TableFooter>
          </Table>
          <Button
            component={Link}
            to='/checkout'
            variant='contained'
            size='large'
            fullWidth
          >
            Checkout
          </Button>
        </TableContainer>
      </Paper>
    </>
  );
                      
}

export default CartPage;