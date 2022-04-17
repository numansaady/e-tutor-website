import React from "react";
import { Link } from "react-router-dom";
import './Banner.css';
import banner from '../../../images/banner/banner.jpg'

const Banner = () => {
  return (
    <div className="header-container container">
          <img style={{height: '700px'}} className="w-100"
            src={banner}
            alt=""
          />
    </div>
  );
};

export default Banner;
