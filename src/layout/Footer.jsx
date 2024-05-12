import React from 'react'
import "./footer.css"
import { GoArrowRight } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
const Footer = () => {
  return (
    <section>
    <div className='footer'>
        <div className='about'>
            <h2 className='about-text'>About Us</h2>
            <p>Lorem ipsum dolor sit amet <br />
    consectetur adipisicing elit. <br />
    Molestias unde maiores quibusdam <br />
    sed suscipit, id eaque minus provident,<br />
    accusamus earum nobis sequi magnam eligendi <br />
    explicabo!</p>
        </div>
        <div className='newsletter'>
       
    <h3>Newsletter</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <input type="text" placeholder='Enter Email'/>
    <button className='foot-btn'><GoArrowRight /></button>

        </div>
        <div>
    <h3>Follow Us</h3>
    <p>Let us be social</p>
    <div >
    <FaFacebookF  className='icons' />
    <FaTwitter className='icons' />
    <CiBasketball className='icons' />
    </div>
    </div>

    </div>
    </section>
  )
}

export default Footer