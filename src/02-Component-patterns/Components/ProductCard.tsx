import styles from "../styles/styles.module.css";
import { useProduct } from "../Hooks/useProduct";
import { createContext } from "react";
import { ContextValues, ProductCardProps } from "../Interfaces/interfaces";

export const ProductContext = createContext({} as ContextValues);
const { Provider } = ProductContext;

export default function ProductCard({ children, product }: ProductCardProps) {
  const { count, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        count,
        product,
        increaseBy,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
}
