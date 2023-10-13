import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";

import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import NotFound from "../../app/errors/NotFound";
import Loader from "../../app/layout/Loader";
import { useStoreContext } from "../../app/context/StoreContext";
import { LoadingButton } from "@mui/lab";

const ProductDetails = () => {
  const { cart, setCart, removeItem } = useStoreContext();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{id: string}>();
  const [qty, setQty] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const item = cart?.items.find(i => i.productId === product?.id);

  useEffect(()=> {
    if(item) setQty(item.quantity);

    id && agent.Catalog.details(parseInt(id))
      .then(res => setProduct(res))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [id, item]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputNum = parseInt(event.currentTarget.value);
    if(inputNum >= 0)
    setQty(inputNum);
  }

  const handleUpdateCart = () => {
    if(!product) return;
    setSubmitting(true);
    if(!item || qty > item.quantity){
      const updatedQty = item ? qty - item.quantity : qty;
      agent.Cart.addItem(product.id, updatedQty)
        .then(cart => setCart(cart))
        .catch(error => console.log(error))
        .finally(() => setSubmitting(false));
    }
    else {
      const updatedQty = item.quantity - qty;
      agent.Cart.removeItem(product.id, updatedQty)
        .then(() => removeItem(product.id, updatedQty))
        .catch((error) => console.log(error))
        .finally(() => setSubmitting(false));
    }

  }

  if(loading) return <Loader message='Loading product details...' />;
  if(!product) return <NotFound />;
  return(
    <Grid 
      container 
      spacing={{ xs: 1, sm: 4 }} 
      p={{ xs: 2, sm: 4}}
      
      display='flex'
      wrap='nowrap'
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Grid item xs={12} md={6}>
        <img 
          src={product.pictureUrl} 
          alt={product.name}
          width='100%'
          height='100%'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant='h4'>
          {product.name}
        </Typography>
        <Divider sx={{ mb: 2 }}/>
        <Typography variant='h5' color='secondary'>
          ${product.price.toFixed(2)}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell sx={{ textAlign: 'justify' }}>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quantity In Stock</TableCell>
                <TableCell>{product.quantityInStock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <TextField 
              onChange={handleInputChange}
              variant='outlined'
              type='number'
              label='Quantity in Cart'
              fullWidth
              value={qty}
            />
          </Grid>
          <Grid item xs={6}>
            <LoadingButton
              disabled={item?.quantity === qty || (!item && qty === 0)}
              onClick={handleUpdateCart}
              loading={submitting}
              sx={{height: '55px'}}
              color='primary'
              size='large'
              variant='contained'
              fullWidth
            >
              {item ? 'Update Quantity' : 'Add to Cart'}
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductDetails;