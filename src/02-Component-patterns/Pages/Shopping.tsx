import ProductCard from "../Components/ProductCard";
import img from "../assets/coffee-mug.png";

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
        <ProductCard product={product} />
      </div>
    </div>
  );
}
