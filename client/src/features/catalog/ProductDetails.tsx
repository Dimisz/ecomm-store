import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

const ProductDetails = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{id: string}>();

  useEffect(()=> {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if(loading) return <h3>Loading...</h3>;
  if(!product) return <h3>Product not found</h3>
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
                <TableCell>{product.description}</TableCell>
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