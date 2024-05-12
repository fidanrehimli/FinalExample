import React, { useContext, useEffect } from "react";
import "./category.css";
import { Helmet } from "react-helmet";
import { ProductsContext } from "../../context/productsProvider";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaProducts } from "../../Schema/SchemaProducts";
const Category = () => {
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
  };
  useEffect(() => {
    GetAllData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaProducts),
  });

  const createProduct = async()=>{
    await axios.post("http://localhost:3000/products",{
      category:categoryValue,
      price:priceValue,
      image:imageValue
    })
    GetAllData()
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Category</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <form action="" onSubmit={handleSubmit(createProduct)}>
      <input type="text"  {...register('category')} placeholder='category' onChange={(e)=>setCategoryValue(e.target.value)} />
      {errors.category?.message && (
      <p style={{ color: "red" }}>{errors.category?.message}</p>
    )}
      <br />
      <input type="number"  {...register('price')} placeholder='price' onChange={(e)=>setPriceValue(e.target.value)}/>
      {errors.price?.message && (
      <p style={{ color: "red" }}>{errors.price?.message}</p>
    )}
      <br />
      <input type="text" {...register('image')}  placeholder='image'onChange={(e)=>setImageValue(e.target.value)} />
      {errors.image?.message && (
      <p style={{ color: "red" }}>{errors.image?.message}</p>
    )}
      <br />
      <button className="addbtn" type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Category;
