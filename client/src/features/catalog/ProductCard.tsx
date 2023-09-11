import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";

interface Props {
  product: Product;
}

const ProductCard = ({product}: Props) => {
  const [loading, setLoading] = useState(false);
  
  const handleAddItem = (productId: number) => {
    setLoading(true);
    agent.Cart.addItem(productId)
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  return(
    <Card sx={{ height: {
        xs: '75vh',
        md: '65vh',
      } 
    }}>
      <CardMedia
        component='img'
        height='60%'
        sx={{ backgroundSize: 'contained', bgcolor: 'primary.light' }}
        image={product.pictureUrl}
        title={product.name}
      />

      <CardHeader 
        title={product.name}
        titleTypographyProps={{ 
          sx: {fontWeight: 'bold', color: 'primary.main' }
        }}
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography gutterBottom color='secondary' variant="h5">
          ${product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton 
            size="small" 
            onClick={() => handleAddItem(product.id)}
            loading={loading}
            loadingIndicator="Loading…" 
        >
          Add to cart
        </LoadingButton>
          {/* <Button 
            size="small" 
            onClick={() => handleAddItem(product.id)}
          >
            Add to cart
          </Button> */}
        
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;