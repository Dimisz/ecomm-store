import { Box, Card, CardContent, CardMedia, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { AddCircleOutline, DeleteForeverOutlined, RemoveCircleOutline } from "@mui/icons-material";
import { useStoreContext } from "../../app/context/StoreContext";

const CartPageMobile = () => {
  const { cart } = useStoreContext();
  
  if(!cart) return <Typography variant='h3'>Your cart is empty</Typography>;

  return(
      <TableContainer 
        component={Paper} 
        sx={{ 
          maxHeight: '90vh',
          width: '100%', 
          display: {xs: 'flex', md: 'none'} 
          }}
      >
        <Table stickyHeader aria-label="products in the cart">
          <TableHead>
            <TableRow>
              <TableCell align='center'>Order Details</TableCell>
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
                <TableCell align='left'>
                <Card sx={{ display: 'flex' }}>
                  <CardMedia
                      component="img"
                      sx={{ width: {xs : 90, sm: 100} }}
                      image={item.pictureUrl}
                      alt={item.name}
                    />
                  <Box sx={{ 
                    padding: 1,
                    paddingTop: 0,
                    display: 'flex', 
                    flexDirection: 'column',
                    flexGrow: 1,
                    alignItems: 'space-between',
                    alignContent: 'space-between'
                  }}>
                    <CardContent sx={{ 
                        p: 1,
                        pt: 0,
                        display: 'flex', 
                        flexDirection: 'column',
                      }}
                    >
                      <Box 
                        display='flex'
                        justifyContent='space-between'
                      >
                        <Typography component="h2" sx={{ fontSize: { xs: '1.2rem', sm: '2rem' }, fontWeight: 500, paddingTop: 0 }}>
                          {item.name}
                        </Typography>
                        <IconButton color='error' sx={{ mt: -1 }}>
                          <DeleteForeverOutlined />
                        </IconButton>
                      </Box>
                      <Box mb={2}>
                        <Typography
                           color="text.secondary" 
                           component="h3"
                           sx={{ fontSize: { xs: '1rem', sm: '2rem' }}}
                        >
                          ${(item.price).toFixed(2)}
                        </Typography>
                      </Box>
                    </CardContent>
                    <Divider />
                    <Box 
                        display='flex'
                        justifyContent='space-between'
                        alignItems='flex-end'
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                          <IconButton color='primary'>
                            <AddCircleOutline/>
                          </IconButton>
                          <Typography variant='h6'>{item.quantity}</Typography>
                          <IconButton color='primary'>
                            <RemoveCircleOutline />
                          </IconButton>
                        </Box>
                        <Box 
                          display='flex' 
                          flexDirection={{ xs: 'column', sm: 'row' }} 
                          alignItems='center'
                        >
                            <Typography
                              variant='caption'
                              color='secondary'
                              sx={{ fontStyle: 'italic' }}
                            >Subtotal:</Typography>
                            <Typography variant='body1' ml={{ sm: 2 }}>
                              ${(item.price * item.quantity).toFixed(2)}
                            </Typography>
                        </Box>
                      </Box>
                  </Box>
                  </Card>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    // </Paper>
  );
}

export default CartPageMobile;