import React, { useContext } from 'react'
import "./searchsec.css"
import { ProductsContext } from '../../../context/productsProvider'
const SearchProductSec = () => {

    const {products,setProducts,categoryValue,setCategoryValue,
        priceValue,setPriceValue,imageValue,setImageValue
      }=useContext(ProductsContext)
      
  return (
    <section>
    <h1 className='search'>Related Searched Products</h1>
    <p className='searchtext'>Who are in extremely love with eco friendly system.</p>
    <div className='search-box'>
    {
      products.slice(8).map((row)=>{
          return <div className='box-search'>
          <div>
          <img className='img-search' src={row.image} alt="" />
          </div>
          <div>
          <h5 className='category-search'>{row.category}</h5>
          <p className='price-search'>$ {row.price}</p>
          </div>
          </div>
      })
    }
    </div>
 </section>
  )
}

export default SearchProductSec