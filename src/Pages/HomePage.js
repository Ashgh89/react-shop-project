import Layout from "../Layout/Layout";
// import { products } from "../data";
import * as data from "../data";
import { useCarActions } from "../Providers/CartProvider";
const HomePage = () => {
  const dispatch = useCarActions();
  const addProductHandler = (product) => {
    // console.log(product);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <Layout>
      <main>
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
                <div>
                  <img src={product.image} alt={product.name}></img>
                </div>
                <div className="productInfo">
                  <p>{product.name}</p>
                  <p>{product.price} €</p>
                  <button
                    onClick={() => addProductHandler(product)}
                    className="btn primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
