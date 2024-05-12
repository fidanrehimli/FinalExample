import React, { useContext, useEffect } from "react";
import "./productmen.css";
import { ProductsContext } from "../../../context/productsProvider";
import axios from "axios";
const ProductMenSec = () => {
  const {
    products,
    setProducts,
    categoryValue,
    setCategoryValue,
    priceValue,
    setPriceValue,
    imageValue,
    setImageValue,
  } = useContext(ProductsContext);

  const GetAllData = async () => {
    const res = await axios.get("http://localhost:3000/products");
    setProducts(res?.data);
    console.log(res?.data);
  };
  useEffect(() => {
    GetAllData();
  }, []);
  return (
    <div>
      <section className="menimg">
        <section className="colorimg">
          <h1 className="men">New realeased Products for Men</h1>
          <p className="mentext">
            Who are in extremely love with eco friendly system.
          </p>
          <div className="cards">
            {products.slice(16).map((elem) => {
              return (
                <div className="card">
                  <img className="img" src={elem.image} alt="" />
                  <h5 className="category">{elem.category}</h5>
                  <p className="price">${elem.price}</p>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductMenSec;
