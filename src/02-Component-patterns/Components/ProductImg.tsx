import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noimg from "../assets/no-image.jpg";

export const ProductImg = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noimg;
  }

  return <img className={styles.productImg} src={imgToShow} alt="Coffe" />;
};

export default ProductImg;
