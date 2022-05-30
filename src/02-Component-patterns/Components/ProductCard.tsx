import styles from "../styles/styles.module.css";
import { useProduct } from "../Hooks/useProduct";
import { createContext, ReactElement } from "react";
import { ContextValues, Product } from "../Interfaces/interfaces";


export interface ProductCardProps {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
}

export const ProductContext = createContext({} as ContextValues);
const { Provider } = ProductContext;

export default function ProductCard({ children, product, className }: ProductCardProps) {
  const { count, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        count,
        product,
        increaseBy,
      }}
    >
      <div className={ `${styles.productCard} ${className}` }>{children}</div>
    </Provider>
  );
}
