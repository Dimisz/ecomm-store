import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51O7qiQJLrKiodSguGQ66BDpwrWegh1CC4kxKGcIwmkoiihMS8ybJ6J6qgO2T8QD16toID66Qhp0QAfDSTMKcjNek003Lxgs9Z2');

const CheckoutWrapper = () => {
  return(
    <Elements stripe={stripePromise}>
      <CheckoutPage/>
    </Elements>
  );
}

export default CheckoutWrapper;