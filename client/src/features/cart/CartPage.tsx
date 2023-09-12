import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useStoreContext } from "../../app/context/StoreContext";

import CartPageMobile from "./CartPageMobile";

const CartPage = () => {
  const { cart } = useStoreContext();
  
  if(!cart) return <Typography variant='h3'>Your cart is empty</Typography>;

  return(
    <>
      <CartPageMobile/>
      <Paper sx={{ width: '100%', overflow: 'hidden', display: {xs: 'none', md: 'flex'} }}>
        <TableContainer sx={{ maxHeight: '90vh' }}>
          {/* component={Paper} */}
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
                <TableRow
                  key={item.productId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
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
                  <TableCell align="left">
                    ${(item.price).toFixed(2)}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell align="left">
                    <IconButton color='error'>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default CartPage;