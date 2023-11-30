import { useSelector } from "react-redux";
import Card from "../components/Card";

const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);

  return (
    <div className="product-section-title">
      <h1 className="container mx-auto my-5  text-center text-2xl uppercase text-gray-700 font-semibold">
        Browse All Products
      </h1>
      <div className="products-wrapper container mx-auto grid  gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
        {status && <p className="col-span-full text-center">{status}</p>}
        {data?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
