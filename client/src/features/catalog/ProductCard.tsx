import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

const ProductCard = ({product}: Props) => {
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
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;