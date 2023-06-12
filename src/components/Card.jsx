import React from "react";
import "./Card.css";
import card1 from "../assets/card1.avif";
import card2 from "../assets/card2.avif";
import card3 from "../assets/card3.avif";
import card4 from "../assets/card4.avif";
import card5 from "../assets/card5.avif";
import card6 from "../assets/card6.avif";
import card7 from "../assets/card7.avif";
import card8 from "../assets/card8.avif";
import bestseller from "../assets/bestseller.avif";

function Card() {
  return (
    <div>
      <div className="adjustcard">
        <div class="card">
          <img src={card1} class="card-img-top" alt="..." />
          <div class="card-body"></div>
        </div>

        <div class="card">
          <img src={card2} class="card-img-top" alt="..." />
          <div class="card-body"></div>
        </div>
        <div class="card">
          <img src={card3} class="card-img-top" alt="..." />
          <div class="card-body"></div>
        </div>
        <div class="card">
          <img src={card4} class="card-img-top" alt="..." />
          <div class="card-body"></div>
        </div>
        <div class="card">
          <img src={card5} class="card-img-top" alt="..." />
          <div class="card-body"></div>
        </div>
        <div class="card">
          <img src={card6} class="card-img-top" alt="..." />
          <div class="card-body"></div>
        </div>
        <div class="card">
          <img src={card7} class="card-img-top" alt="..." />
          <div class="card-body"></div>
        </div>
        <div class="card">
          <img src={card8} class="card-img-top" alt="..." />
          <div class="card-body"></div>
        </div>
        <div class="card">
          <img src={card2} class="card-img-top" alt="..." />
          <div class="card-body"></div>
        </div>
      </div>
      <div>
      <div className="bestseller">
        <img src={bestseller} alt="" />
      </div>
      </div>
    </div>
  );
}

export default Card;
