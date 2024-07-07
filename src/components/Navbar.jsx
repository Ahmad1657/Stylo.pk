import React from 'react'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <hr className='line'/>
    <div className='navbar1'>
            <li style={{color:'red'}}> <Link className='link' to={"/"}>Sale</Link> </li>
            <li> <Link className='link' to={"/summer-24"}>Summer'24</Link> </li>
            <li>Women Shoes</li>
            <li>Women Apperals</li>
            <li>Bags</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li>Fragrances</li>
    </div>
    </>
  )
}

export default Navbar;
