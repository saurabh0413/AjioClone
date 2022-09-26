import React from "react";
import "./Carousal.css";
const Carousal = () => {
  return (
    <div className="carUp">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <span></span>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <span></span>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <span></span>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          >
            <span></span>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          >
            <span></span>
          </button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/26092022-D-UHP-topbanner-GIF-allstarsale.gif"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/26092022-unisex-d-main-p3-brands-5070.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/26092022-unisex-d-Main-p5-brands-min40.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/26092022-unisex-d-main-p2-brands-4060.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/26092022-unisex-d-Main-p5-brands-min40.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <footer className="page-footer">
        <span>made by </span>
        <a href="https://georgemartsoukos.com/" target="_blank">
          <img
            width="24"
            height="24"
            src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg"
            alt="George Martsoukos logo"
          />
        </a>
      </footer>
    </div>
  );
};

export default Carousal;
