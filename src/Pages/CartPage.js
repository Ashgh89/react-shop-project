import Layout from "../Layout/Layout";
import { useCarActions, useCart } from "../Providers/CartProvider";
import "./cartPage.css";

const CartPage = () => {
  // const cartState = useCart();
  const { cart } = useCart();
  // console.log(cartState.cart);
  const dispatch = useCarActions();
  if (!cart.length) {
    return (
      <Layout>
        <main>
          <h2>cart is empty</h2>
        </main>
      </Layout>
    );
  }
  const incrementHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const deleteHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };
  return (
    <Layout>
      <main className="container">
        <section className="cartItemList">
          {cart.map((item) => {
            return (
              <div className="cartItem">
                <div className="itemImg">
                  <img src={item.image} alt={item.name}></img>
                </div>
                <div>{item.name}</div>
                <div>{item.price * item.quantity}</div>
                <div>
                  <button onClick={() => deleteHandler(item)}>remove</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => incrementHandler(item)}>Add</button>
                </div>
              </div>
            );
          })}
        </section>
        <section className="cartSummary">
          <h2>Cart Summary</h2>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
