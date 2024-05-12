import React from 'react'
import { Helmet } from 'react-helmet'
import ImgSec from './Img/ImgSec'
import CategorySec from './Category/CategorySec'
import ProductMenSec from './ProductMen/ProductMenSec'
import ProductWomenSec from './ProductWomen/ProductWomenSec'
import SearchProductSec from './SearchProduct/SearchProductSec'
import Footer from '../../layout/Footer'

const Home = () => {
  return (
    <div className='container'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <ImgSec/>
            <CategorySec/>
            <ProductMenSec/>
            <ProductWomenSec/>
            <SearchProductSec/>
            <Footer/>
    </div>
  )
}

export default Home