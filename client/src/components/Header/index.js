import React from 'react';
import { Link } from "react-router-dom"

import "./header.css"
import brandImg from "../../images/shuttleEarth.png"

const Header = (props) => {
  return (
    <header>
      <div className="headerFlex">
        <div className="brandFlex">
          <img className="brandImg" alt="scl" src={brandImg} />
          <div className="brand">SPACE COAST LASER, INC</div>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Medical Lasers</Link></li>
            <li><Link to="/">Sci/Ent Lasers</Link></li>
            <li><Link to="/">Parts</Link></li>
            <li><Link to="/">Accessories</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="redline"></div>
    </header>
  );
}

export default Header;