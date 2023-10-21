import { useMediaQuery, useTheme } from "@mui/material";
import CartPageDesktop from "./CartPageDesktop";
import CartPageMobile from "./CartPageMobile";


const CartPage = () => {
  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  return(
    <>
      { greaterThanSm ? <CartPageDesktop /> : <CartPageMobile/>}
    </>
  );
                      
}

export default CartPage;