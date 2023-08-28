import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import Products from "../components/Products";

const Home = () => {
  const { filteredProducts, loading, error, category } =
    useContext(DataContext);

  return (
    <main>
      <Products
        filteredProducts={filteredProducts}
        loading={loading}
        error={error}
        category={category}
      />

      <button
        className="back-to-top-button"
        onClick={() => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }}
      >
        Back to Top
      </button>
    </main>
  );
};

export default Home;
