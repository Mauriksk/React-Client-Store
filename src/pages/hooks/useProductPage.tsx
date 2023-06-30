import { useEffect, useState } from "react";
import { Product } from "../../interfaces/Product";

export const useProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch("http://localhost:3000/api/product")
      .then((res) => res.json())
      .then((res) => res);
    console.log(data);
    setProducts(data);
  };

  return {
    products,
  };
};
