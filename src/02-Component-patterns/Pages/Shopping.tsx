import ProductCard from "../Components/ProductCard";
import img from "../assets/coffee-mug.png";
import ProductImg from "../Components/ProductImg";
import { ProductTitle } from "../Components/ProductTitle";
import { ProductBottons } from "../Components/ProductBottons";

const product = {
  id: 1,
  title: "Cafe Mock uno",
  img: img,
};

export default function Shopping() {
  return (
    <div>
      <h1>Shopping</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImg />
          <ProductTitle />
          <ProductBottons />
        </ProductCard>
      </div>
    </div>
  );
}
