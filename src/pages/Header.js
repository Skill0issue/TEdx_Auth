import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../Images/Background.jpg";
import Technology from "../Images/technology.jpg";
import Design from "../Images/Design.jpg";
import Entertainment from "../Images/entertainment.jpg";
import Navbar from "./Navbar";

const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState(Background);

  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
  };

  return (
    <div>
      <header
        id="header"
        style={{ backgroundImage: `url(${backgroundImage})` }} >
        <Navbar/>
        <section className="headings">
          <div id="heading-1">
            <Link to="#" onMouseEnter={() => handleMouseEnter(Technology)}>
              Technology
            </Link>
          </div>
          <div id="heading-2">
            <Link to="#" onMouseEnter={() => handleMouseEnter(Entertainment)}>
              Entertainment
            </Link>
          </div>
          <div id="heading-3">
            <Link to="#" onMouseEnter={() => handleMouseEnter(Design)}>
              Design
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
