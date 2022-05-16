import Layout from "../Layout/Layout";
// import { products } from "../data";
import * as data from "../data";
const HomePage = () => {
  const addProductHandler = (product) => {
    console.log(product);
  };
  return (
    <Layout>
      <main>
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product">
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
