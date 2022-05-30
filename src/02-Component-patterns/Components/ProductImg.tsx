import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noimg from "../assets/no-image.jpg";

interface ProductImgProps {
  className?: string;
  img?: string;
}
export const ProductImg = ({ img = "", className }: ProductImgProps) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noimg;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Coffe"
    />
  );
};

export default ProductImg;
