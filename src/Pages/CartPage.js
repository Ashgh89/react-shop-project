import Layout from "../Layout/Layout";
import { useCart } from "../Providers/CartProvider";

const CartPage = () => {
  // const cartState = useCart();
  const { cart } = useCart();
  // console.log(cartState.cart);
  if (!cart.length)
    return (
      <Layout>
        <main>
          <h2>cart is empty</h2>
        </main>
      </Layout>
    );

  return (
    <Layout>
      <main className="container">
        <section>
          {cart.map((item) => {
            return (
              <div className="cartItem">
                <div>
                  <img src={item.image} alt={item.name}></img>
                </div>
                <div>{item.name}</div>
              </div>
            );
          })}
        </section>
        <section>cart summary</section>
      </main>
    </Layout>
  );
};

export default CartPage;
