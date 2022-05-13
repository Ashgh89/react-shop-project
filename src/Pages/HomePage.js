import Layout from "../Layout/Layout";
import { data } from "../data";

const HomePage = () => {
  return (
    <Layout>
      <main>
        <section className="productList">
          {data.product.map((product) => {
            return <section className="product"></section>;
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
