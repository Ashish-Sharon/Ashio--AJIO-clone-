import React from 'react'
import "./Footer.css";
import abovefooter from "../assets/abovefooter.png";
import footer from "../assets/footer.png";
function Footer() {
  return (
    <div>
      
      <div>
        <img src={abovefooter} alt="" />
      </div>

      <div>
        <img src={footer} alt="" />
      </div>
    </div>
  )
}

export default Footer
