import React from "react";
import main_logo from "../assets/ASHIO.png";
import "./Navbar.css";


function Navbar() {
  return (
  <div className="whole_navbar">
    
    <div> <img src={main_logo} className="left_navbar" /> </div>

    <div className="cen_nav">
    <ul className="center_navbar">
      <li>MEN</li>
      <li>WOMEN</li>
      <li>KIDS</li>
      <li>INDIE</li>
      <li>HOME AND KITCHEN</li>
    </ul>

    

    </div>
<div className="grid">
    <div >
      <ul className="right_navbar">
    <li>Sign In / Join ASHIO</li>
    <li>Customer Care</li>
    <button className="ashiobutton">visit ASHIOLUXE</button>
    </ul>
    </div>

   <div className="searchbar">
      <input className="search" type="text" placeholder="  search Ashio" />
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-bag-shopping"></i>
    </div> 
    </div>

  </div>
  );
}

export default Navbar;
