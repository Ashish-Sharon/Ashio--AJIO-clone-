import React from "react";
import "./Carouselsec.css";
import car31 from "../assets/car32.png";
import car32 from "../assets/car31.png";
import car33 from "../assets/car33.png";
import summer from "../assets/summersteal.avif";
import car41 from "../assets/car41.avif";
import car42 from "../assets/car42.avif";
import car43 from "../assets/car43.avif";
import car44 from "../assets/car44.avif";
import sponser from "../assets/sponsor.avif";

function Carouselsec() {
  return (
    <>
      <div className="car2container">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={car31} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car32} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car33} class="d-block w-100" alt="..." />
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

      <div className="seccar">
        <img src={summer} alt="" />
      </div>

      <div className="thircar">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={car41} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car42} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car43} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car44} class="d-block w-100" alt="..." />
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

      
      <div>
        <img src={sponser} alt="sponser" srcset="" />
      </div>
      
    </>
  );
}

export default Carouselsec;
