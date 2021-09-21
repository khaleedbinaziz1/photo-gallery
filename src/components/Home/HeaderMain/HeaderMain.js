import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import "./HeaderMain.css";
const HeaderMain = () => {
  return (
    <div className="header-main">
      

      <div className="bg"></div>
      <Navbar />
      <div className="hero">
        <h1>A picture is worth a thousand words</h1>
        <p>
          It clearly and beautifully captures the emotions - the joy, the
          laughter, the tears you name it. Our Pride is the offering the best
          shoots as we help you tell your story in photos.
        </p>
        <div className="hero-btn">
          <Link className="btn-link" to="/gallery">
            View Gallery
          </Link>
          
        </div>
        
      </div>
      <div className="arrow-icons">
            <FaIcons.FaArrowLeft className="icon-left" />
            <FaIcons.FaArrowRight className="arrow icon-right" />
          </div>
    </div>
  );
};

export default HeaderMain;
