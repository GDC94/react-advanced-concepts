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
  counter: number;
}

export default function Shopping() {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onChangeProduct = ({
    counter,
    product,
  }: {
    counter: number;
    product: Product;
  }) => {
    setShoppingCart((prev) => {
      if (counter === 0) {
        const { [product.id]: toDelete, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [product.id]: { ...product, counter },
      };
    });
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
                onChange={onChangeProduct}
                value={shoppingCart[product.id]?.counter || 0}
              >
                <ProductImg className="img" />
                <ProductTitle className="text-white" />
                <ProductBottons />
              </ProductCard>
            ))}
        </div>

        <div className="shopping-kart">
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              value={product.counter}
              key={key}
              product={product}
              className="bg-dark small"
              onChange={onChangeProduct}
            >
              <ProductImg className="img" />
              
              <ProductBottons   />
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}
