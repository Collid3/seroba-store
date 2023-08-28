import "../styles/header.css";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ cart }) => {
  const navigate = useNavigate("");

  return (
    <header>
      <h1 className="logo" onClick={() => navigate("/")}>
        Logo
      </h1>

      <div className="search-bar">
        <select name="" id="">
          <option value="">All</option>
          <option value="">Men's clothes</option>
          <option value="">Women's clothes</option>
          <option value="">Jewelery</option>
          <option value="">Electronics</option>
        </select>
        <input type="search" placeholder="search" />
      </div>

      <p className="sign-in-link">sign in</p>

      <div className="cart-button">
        <FaShoppingCart onClick={() => navigate("/cart")} />

        <span>{cart.length}</span>
      </div>
    </header>
  );
};

export default Header;
