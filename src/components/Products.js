import { useNavigate } from "react-router-dom";
import "../styles/products.css";
import React from "react";
import Reviews from "./Reviews";

const Products = ({ products }) => {
  const navigate = useNavigate("");

  return (
    <ul className="products-container">
      {products.length > 0 ? (
        products.map((product) => (
          <li
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt="" width={200} />

            <section>
              <h4>{product.title}</h4>

              <div className="reviews">
                <div className="stars">
                  {" "}
                  <Reviews product={product} />
                </div>
              </div>

              <h4>Price: R{product.price}</h4>
            </section>
          </li>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </ul>
  );
};

export default Products;
