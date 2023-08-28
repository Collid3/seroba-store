import { useNavigate } from "react-router-dom";
import "../styles/products.css";
import React from "react";
import Reviews from "./Reviews";

const Products = ({ filteredProducts, loading, error, category }) => {
  const navigate = useNavigate("");

  return (
    <>
      {loading && (
        <p style={{ flexGrow: "2", display: "grid", placeContent: "center" }}>
          Loading products...
        </p>
      )}

      {!loading && error && (
        <p style={{ flexGrow: "2", display: "grid", placeContent: "center" }}>
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <h2 className="category">
            {category === "all" ? "All Clothes" : category}
          </h2>

          <ul className="products-container">
            {filteredProducts.map((product) => (
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
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Products;
