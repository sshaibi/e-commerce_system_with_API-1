import React from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import { useCookies } from 'react-cookie';
import {useState} from "react";
import "./Header.css";
import BookMart03 from '../assests/Book Mart 03.png';
//import { NavLink,Link } from 'react-router-dom';
const Header = () => {



  const [cookies, setCookie] = useCookies(['user']);
  function GetUserName() {
    if (cookies.userid>0) {
      axios.post(
        'http://localhost:8080/ecommerce/username?userid='+cookies.userid,
        ).then(response=>{
          document.getElementById('username').innerHTML=response.data.firstname+'</br>'+response.data.secondname
          document.getElementById('login').innerHTML='Logout'
    }
        )
  }
}






  return (

  <section>
     <header className='header-upper'>
          <div className='container'>
           <p>Easy Shopping with Book Mart</p>
           
              
     
              
          <div className='headerlinks'>
                                                     
                    
                      <a className='icontag01' href="/wishlist" >
                      <img src="images/wishlist.svg" alt="wishlist" />
                      </a>
                                                                               
                      <a className='icontag02' href="/login" >
                      <img src="images/user.svg" alt="user" />
                      <span className='login' id='login'>Log in</span> 
                      </a> 

                      <a className='icontag03' href="/cart" >
                      <img src="images/cart.svg" alt="cart" />
                      </a> 
                                                                                                      
                          <div>
                              <span id='username' onLoad={GetUserName()} ></span>
                          </div> 

                </div>
           
           
          </div>
          </header>

      <header className='header-bottom'>
       <div className='contain-bottom'>
        <div className='menu-bottom'>
          
          <div className="bookmartlogo">
            <a href='/'>
            <img src={BookMart03}/>
            </a>
            </div>
          <div className="dropdown">
                 <button className="btn btn-secondary dropdown-toggle bg-transparent" 
                  type="button" data-bs-toggle="dropdown" 
                   aria-expanded="false">
                    Categories
                      </button>
                      
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="Store?query=Music">Music</a></li>
    <li><a className="dropdown-item" href="Store?query=Biographs">Biographs</a></li>
    <li><a className="dropdown-item" href="Store?query=Business">Business</a></li>
    <li><a className="dropdown-item" href="Store?query=Comics">Comics</a></li>
    <li><a className="dropdown-item" href="Store?query=Computer">Computer & Tech</a></li>
    <li><a className="dropdown-item" href="Store?query=Cooking">Cooking</a></li>
    <li><a className="dropdown-item" href="Store?query=Education">Education</a></li>
    <li><a className="dropdown-item" href="Store?query=Entertainment">Entertainment</a></li>
    <li><a className="dropdown-item" href="Store?query=Health&Fitness">Health & Fitness</a></li>
    <li><a className="dropdown-item" href="Store?query=History">History</a></li>
    <li><a className="dropdown-item" href="Store?query=Hobbies&Craft">Hobbies & Craft</a></li>
    <li><a className="dropdown-item" href="Store?query=Home&Garden">Home & Garden</a></li>
    <li><a className="dropdown-item" href="Store?query=Kids">Kids</a></li>
    <li><a className="dropdown-item" href="Store?query=Medical">Medical</a></li>
    <li><a className="dropdown-item" href="Store?query=Mysteries">Mysteries</a></li>
    <li><a className="dropdown-item" href="Store?query=Parenting">Parenting</a></li>
    <li><a className="dropdown-item" href="Store?query=Religion">Religion</a></li>
    <li><a className="dropdown-item" href="Store?query=Romance">Romance</a></li>
    <li><a className="dropdown-item" href="Store?query=Science&Math">Science & Math</a></li>
    <li><a className="dropdown-item" href="Store?query=SocialScience">Social Science</a></li>
    <li><a className="dropdown-item" href="Store?query=Sports">Sports</a></li>
    <li><a className="dropdown-item" href="Store?query=Travel">Travel</a></li>
    <li><a className="dropdown-item" href="Store?query=TrueCrime">True Crime</a></li>
    <li><a className="dropdown-item" href="Store?query=Westerns">Westerns</a></li>
  </ul>

          </div>
          <div className='menu-links' >
            <div className='d-flex'>
                <a className="pageslink" href="/">HOME</a>
                <a className="pageslink" href="/store?query=">STORE</a>
                <a className="pageslink" href="/aboutUs">ABOUT US</a>
                <a className="pageslink" href="/contactUs">CONTACT</a>
            </div>
            </div>
        </div>
       </div>
      </header>
     
    



    
      
</section>
  )
}
export default Header;
