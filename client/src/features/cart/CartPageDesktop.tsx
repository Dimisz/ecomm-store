import { RemoveCircleOutline, AddCircleOutline, DeleteForeverOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Box, Typography, TableFooter, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import { removeCartItemAsync, addCartItemAsync } from "./cartSlice";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";

const CartPageDesktop = () => {
  const { cart, status } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  

  if(!cart || cart.items.length <= 0) return <Typography variant='h3'>Your cart is empty</Typography>;

  const subtotal = cart?.items.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  const deliveryFee = subtotal > 0 && subtotal < 100 ? 5 : 0;
  
  return(
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
                        loading={status === `pendingRemoveItem${item.productId}rem`}
                        onClick={() => dispatch(removeCartItemAsync({
                          productId: item.productId,
                          quantity: 1,
                          name: 'rem'
                        }))}
                      >
                        <RemoveCircleOutline />
                      </LoadingButton>
                      <Typography variant='h6'>{item.quantity}</Typography>
                      <LoadingButton 
                        color='primary' 
                        loading={status === 'pendingAddItem' + item.productId}
                        onClick={() => dispatch(addCartItemAsync({productId: item.productId}))}
                      >
                        <AddCircleOutline/>
                      </LoadingButton>
                    </Box>
                  </TableCell>
                  <TableCell align="left">${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell align="left">
                    <LoadingButton 
                      color='error'
                      loading={status === `pendingRemoveItem${item.productId}del`} 
                      onClick={() => dispatch(removeCartItemAsync({
                        productId: item.productId, 
                        quantity: item.quantity,
                        name: "del"
                      }))}
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
  );
}

export default CartPageDesktop;