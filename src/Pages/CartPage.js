import Layout from "../Layout/Layout";
import { useCart } from "../Providers/CartProvider";

const CartPage = () => {
  // const cartState = useCart();
  const { cart } = useCart();
  // console.log(cartState.cart);
  if (!cart)
    return (
      <main>
        <h2>cart is empty</h2>
      </main>
    );

  return (
    <Layout>
      <main className="container">
        <section></section>
      </main>
    </Layout>
  );
};

export default CartPage;
