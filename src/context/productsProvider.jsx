import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        categoryValue,
        setCategoryValue,
        priceValue,
        setPriceValue,
        imageValue,
        setImageValue,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
