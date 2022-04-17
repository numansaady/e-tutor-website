import React from "react";
import { Link } from "react-router-dom";
import './Banner.css';
import banner from '../../../images/banner/banner1.jpg'

const Banner = () => {
  return (
    <div className="header-container container">
      <div className="row">
        <div className="header-title col-md-7">
          <p>
            Your Next Project Won't Be <span>HORRIBLE 😫</span>
          </p>
          <Link to="/about">
            <button>Know More!</button>
          </Link>
        </div>
        <div className="header-img glowing col-md-5">
          <img className="w-75"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
