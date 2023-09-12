import { Box, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useStoreContext } from "../../app/context/StoreContext";

const CartPageMobile = () => {
  const { cart } = useStoreContext();
  
  if(!cart) return <Typography variant='h3'>Your cart is empty</Typography>;

  return(
      <TableContainer 
        component={Paper} 
        sx={{ 
          width: '100%', 
          display: {xs: 'flex', md: 'none'} 
          }}
      >
        <Table stickyHeader aria-label="products in the cart">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.items.map((item) => (
              <TableRow
                hover
                key={item.productId}
                sx={{
                   '&:last-child td, &:last-child th': { border: 0 },
                   }}
              >
                <TableCell align='left' colSpan={1} width='20%'>
                    
                      <img
                        src={item.pictureUrl}
                        alt={item.name}
                        style={{
                          height: '6rem',
                          width: '5rem',
                        }}
                      />
            
                </TableCell>
                <TableCell align='left' colSpan={5} sx={{ flexGrow: 2 }}>
                  <Box 
                    display='flex' 
                    flexDirection='column'
                    flexGrow={2}
                    alignItems='space-between'
                  >
                    <Box 
                      display='flex'
                      justifyContent='space-between'
                    >
                      <Typography variant='h6'>{item.name}</Typography>
                      <IconButton color='error' sx={{ mt: -1 }}>
                        <Delete />
                      </IconButton>
                    </Box>
                    <Box
                      display='flex'
                      justifyContent='space-between'
                    >
                      <Typography variant='body1' color='secondary'>
                        ${(item.price).toFixed(2)}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      mt={2}
                      display='flex'
                      justifyContent='space-between'
                    >
                      <Typography variant='body2'>+ {(item.quantity)} -</Typography>
                      <Typography variant='body2'><i>Subtotal:</i> ${(item.price * item.quantity).toFixed(2)}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                {/* <TableCell align="right">
                  <IconButton color='error'>
                    <Delete />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    // </Paper>
  );
}

export default CartPageMobile;