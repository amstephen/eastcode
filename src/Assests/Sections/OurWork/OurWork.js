import React from "react";
import "./OurWork.css";
import {   FaClipboardCheck, FaDesktop, FaDev, FaMobile, } from "react-icons/fa";

function OurWork() {
  return (
    <div id="our-work">
      <div id="our-work-left">
        <div id="our-work-left-inner-one">
          <div id="up">
            <FaDesktop style={{color: 'black', fontSize: '50px'}}/>
            <p>Web App</p>
          </div>
          <div id="up">
            <FaDev style={{color: 'black', fontSize: '50px'}}/>
            <p>UI/UX <br/> & Graphic Design</p>
          </div>
        </div>
        <div id="our-work-left-inner-two">
          <div id="up">
            <FaMobile style={{color: 'black', fontSize: '50px'}}/>
            <p>Mobile App</p>
          </div>
          <div id="up">
            <FaClipboardCheck style={{color: 'black', fontSize: '50px'}}/>
            <p>Blockchain</p>
          </div>
        </div>
      </div>
      <div id="our-work-right">
        <h1>
          Top Rated 3% <br /> in the International Upwork <br /> rating among
          developers
        </h1>
        <p id="one">
          Since 2022, we have been working <br /> on the international market
        </p>
        <p id="two">
          We bring together a diverse group of developers, each with a unique
          set of skills and expertise.From seasoned veterans to fresh minds full
          of creativity, our team is united by a shared love for crafting
          exceptional digital experiences.
        </p>
      </div>
    </div>
  );
}

export default OurWork;
