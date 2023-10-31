import { useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import CartPageDesktop from '../cart/CartPageDesktop';
import CartPageMobile from '../cart/CartPageMobile';





const Review = () => {
  const theme = useTheme();
  const greaterThanMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      { greaterThanMd 
        ? 
        <>
          <Typography variant="h6" gutterBottom align='center'>
            Order summary
          </Typography>
          <CartPageDesktop isCart={false} />
        </>
        : 
        <CartPageMobile isCart={false} />
      }
      
    </>
  );
}

export default Review;