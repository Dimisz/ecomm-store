import { Box, Card, CardContent, CardMedia, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { AddCircleOutline, DeleteForeverOutlined, RemoveCircleOutline } from "@mui/icons-material";
import { useStoreContext } from "../../app/context/StoreContext";
import { LoadingButton } from "@mui/lab";

interface Props {
  status: {loading: boolean; name: string};
  handleAddItem: (productId: number, name: string) => void;
  handleRemoveItem: (productId: number, name: string, quantity: number) => void;
}

const CartPageMobile = ({ status, handleAddItem, handleRemoveItem }: Props) => {
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
              <TableCell align='center'>
                <Typography variant='h5'>Order Details</Typography>
              </TableCell>
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
                        p: 0,
                        // pl: 1,
                        display: 'flex', 
                        flexDirection: 'column',
                        marginBottom: 3
                      }}
                    >
                      <Box 
                        display='flex'
                        justifyContent='space-between'
                      >
                        <Box
                          display='flex' 
                          flexDirection='column'
                          alignItems='start'
                          paddingTop={1}
                        >
                          <Typography
                            component="h2"
                            sx={{
                              fontSize: { xs: '1.2rem', sm: '2rem' },
                              fontWeight: 500,
                              lineHeight: 1.1,
                            }}>
                            {item.name}
                          </Typography>
                          <Typography
                            color="text.secondary" 
                            component="h3"
                            sx={{ fontSize: { xs: '0.9rem', sm: '1.8rem', lineHeight: 1.1 }}}
                          >
                            ${(item.price).toFixed(2)}
                          </Typography>
                        </Box>
                        <Box>
                          <LoadingButton 
                            loading={status.loading && status.name === 'delete' + item.productId} 
                            onClick={() => handleRemoveItem(item.productId, 'delete' + item.productId, item.quantity)}
                          >
                            <DeleteForeverOutlined/>
                          </LoadingButton>
                        </Box>
                      </Box>

                    </CardContent>
                    <Divider />
                    <Box 
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        paddingTop={1}
                      >
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
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <LoadingButton 
                            loading={status.loading && status.name === 'decrease' + item.productId}
                            onClick={() => handleRemoveItem(item.productId, 'decrease' + item.productId, 1)}
                            color='primary'>
                            <RemoveCircleOutline />
                          </LoadingButton>
                          <Typography variant='h6'>{item.quantity}</Typography>
                          <LoadingButton 
                            loading={status.loading && status.name === 'increase' + item.productId} 
                            onClick={() => handleAddItem(item.productId, 'increase' + item.productId)} 
                            color='primary'
                          >
                            <AddCircleOutline/>
                          </LoadingButton>
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