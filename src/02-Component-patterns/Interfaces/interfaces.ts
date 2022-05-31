



  
export interface Product {
    id: number;
    title: string;
    img?: string;
}
  
export interface ContextValues {
    count: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface onChangeArgs {
    product:Product,
    counter: number,
}