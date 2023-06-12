import React from "react";
import car51 from "../assets/car51.avif";
import car52 from "../assets/car52.avif";
import car53 from "../assets/car53.avif";
import todaysfashion from "../assets/todaysfashion.avif";
import "./Carouselthree.css";

function Carouselthree() {
  return (
    <div className="Carouselthreee">
      <div className="Carouselthreefirst">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={car51} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car52} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car53} class="d-block w-100" alt="..." />
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

      <div className="Carouselthreesec">
        <img src={todaysfashion} alt="" />
      </div>
    </div>
  );
}

export default Carouselthree;
