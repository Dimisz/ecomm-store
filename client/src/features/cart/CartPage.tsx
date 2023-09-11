import { useState, useEffect } from "react";
import { Cart } from "../../app/models/cart";
import agent from "../../app/api/agent";
import Loader from "../../app/layout/Loader";
import { Typography } from "@mui/material";

const CartPage = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    agent.Cart.get()
      .then((retrievedCart) => setCart(retrievedCart))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <Loader message="Loading basket..." />
  if(!cart) return <Typography variant='h3'>Your cart is empty</Typography>;

  return(
    <h1>Buyer id: {cart.buyerId}</h1>
  );
}

export default CartPage;