import React from "react";
import img from "../components/images/img1.jpg";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={img} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={img} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
