import styles from "../styles/styles.module.css";
import { useProduct } from "../Hooks/useProduct";
import { createContext, ReactElement } from "react";
import { ContextValues, onChangeArgs, Product } from "../Interfaces/interfaces";

export interface ProductCardProps {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  value?: number
}

export const ProductContext = createContext({} as ContextValues);
const { Provider } = ProductContext;

export default function ProductCard({
  children,
  product,
  className,
  onChange,
  value
}: ProductCardProps) {
  const { count, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider
      value={{
        count,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
}
