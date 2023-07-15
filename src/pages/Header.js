import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../Images/Background.jpg";
import Technology from "../Images/technology.jpg";
import Design from "../Images/Design.jpg";
import Entertainment from "../Images/entertainment.jpg";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState(Background);

  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
  };

  return (
    <div>
      <header
        id="header"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <nav className="navbar">
          <div className="Logo">Blog</div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Blog">Blogs</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <HashLink to="#Footer"> Contact</HashLink>
            </li>
          </ul>
        </nav>
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
