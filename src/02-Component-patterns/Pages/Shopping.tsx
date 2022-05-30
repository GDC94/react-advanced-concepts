import ProductCard from "../Components/ProductCard";
import img from "../assets/coffee-mug.png";
import img2 from "../assets/coffee-mug2.png";
import ProductImg from "../Components/ProductImg";
import { ProductTitle } from "../Components/ProductTitle";
import { ProductBottons } from "../Components/ProductBottons";
import "../styles/custom.css";
import { Product } from "../Interfaces/interfaces";
import { useState } from "react";

const product1 = {
  id: 1,
  title: "Cafe Mock uno",
  img: img,
};
const product2 = {
  id: 2,
  title: "Cafe Mock dos",
  img: img2,
};

const arrProducts: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export default function Shopping() {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});
  const onChangeProduct = () => {
    console.log("hola perro");
  };

  return (
    <div>
      <h1>Shopping</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {arrProducts &&
            arrProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="bg-dark"
                onChange={() => onChangeProduct()}
              >
                <ProductImg className="img" />
                <ProductTitle className="text-white" />
                <ProductBottons />
              </ProductCard>
            ))}
        </div>

        <div className="shopping-kart">
          <ProductCard
            product={product1}
            className="bg-dark small"
            onChange={() => onChangeProduct()}
          >
            <ProductImg className="img" />
            <ProductTitle className="text-white" />
            <ProductBottons />
          </ProductCard>
          <ProductCard product={product2} className="bg-dark small">
            <ProductImg className="img" />
            <ProductTitle className="text-white" />
            <ProductBottons />
          </ProductCard>
        </div>
      </div>
    </div>
  );
}
