import { useEffect, useState } from "react";

interface Product {
  inInventory: number;
  max: number;
  min: number;
  name: string;
  price: number;
  url: string;
}

export const useProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([])


  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(cartProducts)
  }, [cartProducts])
  

  const addToCart = (product: Product):void => {
    setCartProducts([...cartProducts, product])
  }

  const takeOutToCart = (product: Product): void => {
    const filterProducts = cartProducts.filter( prod => prod.name !== product.name )
    setCartProducts(filterProducts)
  }

  const getProducts = async () => {
    const data = await fetch("http://localhost:3000/api/product")
      .then((res) => res.json())
      .then((res) => res);
    console.log(data);
    setProducts(data);
  };

  return {
    products,
    addToCart,
    takeOutToCart,
    cartProducts
  };
};
