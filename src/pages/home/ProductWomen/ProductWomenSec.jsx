import React, { useContext, useEffect } from "react";
import "./productwomen.css";
import { ProductsContext } from "../../../context/productsProvider";
import axios from "axios";
const ProductWomenSec = () => {
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

  const DeleteProduct = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    GetAllData();
  };

  return (
    <section>
      <h1 className="women">New realeased Products for Women</h1>
      <p className="womentext">
        Who are in extremely love with eco friendly system.
      </p>
      <div className="women-card">
        {products.slice(16).map((item) => {
          return (
            <div className="card-women">
              <img className="img" src={item.image} alt="" />
              <h2 className="categorywomen">{item.category}</h2>
              <h1 className="pricewomen">${item.price}</h1>
              <button
                className="deletebtn"
                onClick={() => DeleteProduct(item.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductWomenSec;
