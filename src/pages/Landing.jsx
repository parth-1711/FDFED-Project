import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";
import "./Landing.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Landing = () => {
  const isAuth = useSelector((state) => state);
  console.log(isAuth);
  return (
    <div className="home-container" style={{ width: "100vw" }}>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            We are here to mediate your buyings and sellings
          </h1>
          <p className="primary-text">
            lorem ipsum dolor sit amet, consectetur adip , lorem
          </p>
          <Link to='/login'>
            <button className="secondary-button">
              Login <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
