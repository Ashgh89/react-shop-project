import Layout from "../Layout/Layout";
// import { products } from "../data";
import * as data from "../data";
const HomePage = () => {
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
                <div>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
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
