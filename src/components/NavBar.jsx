import React from "react";

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <a href="#home" className="logo">
        <img src="/images/logo.svg" alt="logo" />
        <p>Velvet Pour</p>
      </a>
      <ul>
        <li>
          <a href="">Cocktail</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">The Art</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
