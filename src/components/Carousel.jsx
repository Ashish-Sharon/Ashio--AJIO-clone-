import React from "react";
import "./Carousel.css";
import car1 from "../assets/car1.gif";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpeg";
import car4 from "../assets/car4.jpeg";
import car5 from "../assets/car5.jpeg";
import car6 from "../assets/car6.jpeg";
import car21 from "../assets/car21.jpeg";
import car22 from "../assets/car22.jpeg";
import car23 from "../assets/car23.jpeg";
import sponser from "../assets/sponsor.avif";

function Carousel() {
  return (
    <>
      <div className="first_carousel">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={car1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car5} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car6} class="d-block w-100" alt="..." />
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

      <div className="second_carousel">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={car21} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car22} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={car23} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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

export default Carousel;
