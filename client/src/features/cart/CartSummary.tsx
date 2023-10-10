import { Typography } from "@mui/material";
import TableFooterRow from "./TableFooterRow";

const CartSummary = () => {
    const subtotal = 0;
    const deliveryFee = 0;

    return (
        <>
            <TableFooterRow>
              <>
                <Typography variant="h6">Subtotal</Typography>
                <Typography variant="h6">${subtotal}</Typography>
              </>
            </TableFooterRow>
            <TableFooterRow>
              <>
                <Typography variant="h6">Delivery Fee*</Typography>
                <Typography variant="h6">${deliveryFee}</Typography>
              </>
            </TableFooterRow>
            <TableFooterRow>
              <>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">${subtotal + deliveryFee}</Typography>
              </>
            </TableFooterRow>
            <TableFooterRow>
                <Typography style={{fontStyle: 'italic'}}>
                  *Orders over $100 qualify for free delivery
                </Typography>
            </TableFooterRow>
        </>
    )
}

export default CartSummary;