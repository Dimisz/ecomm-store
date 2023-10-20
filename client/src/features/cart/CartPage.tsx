import { useMediaQuery, useTheme } from "@mui/material";
import CartPageFullscreen from "./CartPageFullscreen";
import CartPageMobile from "./CartPageMobile";


const CartPage = () => {
  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  return(
    <>
      { greaterThanSm ? <CartPageFullscreen /> : <CartPageMobile/>}
    </>
  );
                      
}

export default CartPage;