import "../styles/header.css";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ cart, setCategory }) => {
  const navigate = useNavigate("");

  const handleChangeCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <header>
      <h1 className="logo" onClick={() => navigate("/")}>
        Logo
      </h1>

      <div className="search-bar">
        <select onChange={(e) => handleChangeCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="men's clothing">Men's clothes</option>
          <option value="women's clothing">Women's clothes</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
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
