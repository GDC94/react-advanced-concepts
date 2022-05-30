import { useState } from "react";

export const useProduct = (onChange?: () => void) => {
  const [count, setCount] = useState(0);
  const increaseBy = (value: number) => {
    setCount((prev) => Math.max(prev + value, 0));
    onChange && onChange();
  };

  return {
    count,
    increaseBy,
  };
};
