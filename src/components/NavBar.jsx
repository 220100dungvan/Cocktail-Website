import React from "react";

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <a href="#hero" className="logo">
        <img src="/images/logo.svg" alt="logo" />
        <p>Velvet Pour</p>
      </a>
      <ul>
        <li>
          <a href="#cocktails">Cocktail</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#art">The Art</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
