import "../styles/product.css";
import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import { BsFillCheckSquareFill } from "react-icons/bs";

const Product = () => {
  const { products, setCart, cart } = useContext(DataContext);
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!products) return;
    setSelectedProduct(
      products.find((product) => product.id === parseInt(productId))
    );
  }, [productId, products]);

  if (!selectedProduct) return;

  const addToCart = () => {
    const newProduct = {
      ...selectedProduct,
      totalPrice: selectedProduct.price * quantity,
      quantity,
    };

    if (cart.find((item) => item.id === newProduct.id)) {
      localStorage.setItem(
        "e-commerce-cart",
        JSON.stringify(
          cart.map((item) =>
            item.id === newProduct.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                  totalPrice: item.price * (item.quantity + quantity),
                }
              : item
          )
        )
      );

      setCart((prev) => {
        return prev.map((product) =>
          product.id === newProduct.id
            ? {
                ...product,
                quantity: product.quantity + quantity,
                totalPrice: product.price * (product.quantity + quantity),
              }
            : product
        );
      });
      setAddedToCart(true);

      setTimeout(() => {
        setAddedToCart(false);
      }, 2500);
    } else {
      localStorage.setItem(
        "e-commerce-cart",
        JSON.stringify([...cart, newProduct])
      );

      setCart((prev) => {
        return [...prev, newProduct];
      });
    }
  };

  return (
    <>
      <p
        className="added-to-cart-message"
        style={{
          display: addedToCart ? "block" : "none",
          transition: "all 4s",
        }}
      >
        Added to cart{" "}
        <span>
          <BsFillCheckSquareFill />
        </span>
      </p>

      <div className="product-page-container">
        <div className="product-image">
          <img src={selectedProduct.image} alt="" />
        </div>

        <section>
          <h2>{selectedProduct.title}</h2>

          <Reviews product={selectedProduct} />

          <article>{selectedProduct.description}</article>

          <h4>Price: R{(selectedProduct.price * quantity).toFixed(2)}</h4>

          <div className="quantity">
            <label htmlFor="">Quantity: </label>
            <select onChange={(e) => setQuantity(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>

          <button onClick={addToCart}>Add To Cart</button>
        </section>
      </div>
    </>
  );
};

export default Product;
