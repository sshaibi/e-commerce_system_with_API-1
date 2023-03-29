import React from 'react'
import { Link } from 'react-router-dom';
import "./footerstyle.css";

const Footer = () => {
  return (
    <div className='containerfooter'>
      <span className='footer-upper'>
      <div className='firstline'>
       <h3><Link to=''>Tech World</Link></h3>
       <h5><Link to=''>Terms</Link></h5>
       <h5><Link to=''>License</Link></h5>
       <h5><Link to=''>Market</Link></h5>
       <h5><Link to=''>All Product</Link></h5>
       </div>
       <div className='secondline'>
       <h3><Link to=''>Help</Link></h3>
       <h5><Link to=''>Help Center</Link></h5>
       <h5><Link to=''>Authors</Link></h5>
       </div> 
       <div className='thirdline'>
        <h3><Link to=''>OUR COMMUNITY</Link></h3>
        <h5><Link to=''>Community</Link></h5>
        <h5><Link to=''>Blog</Link></h5>
        <h5><Link to=''>Shopping Cart</Link></h5>
        <h5><Link to=''>My Account</Link></h5>
       </div>
       <div className='sendmassage'>   
       </div>   
      </span>
       
    </div>
  )
}

export default Footer;
