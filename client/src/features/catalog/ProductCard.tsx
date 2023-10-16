import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";

import { useAppDispatch } from "../../app/store/configureStore";
import { setCart } from "../cart/cartSlice";

interface Props {
  product: Product;
}

const ProductCard = ({product}: Props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddItem = (productId: number) => {
    setLoading(true);
    agent.Cart.addItem(productId)
      .then((cart) => dispatch(setCart(cart)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  return(
    <Card 
      sx={{
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        m: 0,
      }}
    >
      <CardMedia
        component='img'
        sx={{ backgroundSize: 'contained', bgcolor: 'primary.light', height: '60%'
        }}
        image={product.pictureUrl}
        title={product.name}
      />

      
        <Box height='40%' display='flex' flexDirection='column' justifyContent='space-between' padding={0}>
          <CardHeader
            title={product.name}
            titleTypographyProps={{
              sx: {fontWeight: { xs: 500, lg: 600 }, fontSize: '1.5rem', color: 'primary.main' }
            }}
          />
          <CardContent sx={{ flexGrow: 1, pt: 0, pb: 0 }}>
            <Typography gutterBottom color='secondary' variant="h4">
              ${product.price.toFixed(2)}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {product.brand} / {product.type}
            </Typography>
          </CardContent>
          <CardActions sx={{ flexGrow: 1 }}>
            <LoadingButton
                size="large"
                onClick={() => handleAddItem(product.id)}
                loading={loading}
                loadingIndicator="Adding…"
            >
              Add to cart
            </LoadingButton>
            <Button component={Link} to={`/catalog/${product.id}`} size="large">View</Button>
          </CardActions>
        </Box>
    </Card>
  );
}

export default ProductCard;