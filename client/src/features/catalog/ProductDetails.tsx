import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import NotFound from "../../app/errors/NotFound";
import Loader from "../../app/layout/Loader";

const ProductDetails = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{id: string}>();

  useEffect(()=> {
    id && agent.Catalog.details(parseInt(id))
      .then(res => setProduct(res))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

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
      </Grid>
    </Grid>
  );
}

export default ProductDetails;