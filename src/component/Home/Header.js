import React from "react";
import './Header.css';
import Button from './Button';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="col-md-6">
          <h2>Good food choices are good investments.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum amet leo.
          </p>
          <Button data="Order Now" />
          <button className="btn-more">Learn More <span> &gt; </span></button>
        </div>
        <div className="col-md-6"></div>
      </div>
    </header>
  );
};
export default Header;
// 29:16 seconds Youtube

