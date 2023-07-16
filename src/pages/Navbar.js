import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {FaBars} from 'react-icons/fa';

const Navbar = () => {

  return (
    <div>
    <input type="checkbox" id="check"/>
    <label for="check" className="checkbtn">
            <FaBars/>     
    </label>
      <nav className="navbar">
        <label className="Logo">Blog</label>
        <ul className="links">
          <li >
            <Link className="active" to="/">Home</Link>
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
    </div>
  );
};

export default Navbar;
