import styles from "../styles/styles.module.css";
import noimg from "../assets/no-image.jpg";
import { useProduct } from "../Hooks/useProduct";

interface Props {
  product: Product;
}

interface Product {
  id: number;
  title: string;
  img?: string;
}

export const ProductImg = ({ img = "" }) => {
  return (
    <img className={styles.productImg} src={img ? img : noimg} alt="Coffe" />
  );
};

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

interface ProductBotonProps {
  count: number;
  increaseBy: (value: number) => void;
}
export const ProductBottons = ({ count, increaseBy }: ProductBotonProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{count}</div>

      <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};

export default function ProductCard({ product }: Props) {
  const { count, increaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      <ProductImg img={product.img} />
      <ProductTitle title={product.title} />
      <ProductBottons count={count} increaseBy={increaseBy} />
    </div>
  );
}
