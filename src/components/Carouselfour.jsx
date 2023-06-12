import React from "react";
import "./Carouselfour.css";
import car61 from "../assets/car61.avif";
import car62 from "../assets/car62.avif";
import car63 from "../assets/car63.avif";
import workwear from "../assets/workwear.avif";

function Carouselfour() {
  return (
    <div>
    <div className="Carouselfourfirst">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={car61} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={car62} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={car63} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div className="Carouselfoursec">
      <img src={workwear} alt="" />
</div>
    </div>
  );
}

export default Carouselfour;
