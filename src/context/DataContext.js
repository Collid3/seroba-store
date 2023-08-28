import { createContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProducts(response.data);
        setError(null);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Something went wrong. Please refresh the page");
      }
    };

    if (localStorage.getItem("e-commerce-cart")) {
      const fetchedCart = JSON.parse(localStorage.getItem("e-commerce-cart"));
      setCart(fetchedCart);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    if (category === "all") return setFilteredProducts(products);

    setFilteredProducts(
      products.filter((product) => product.category === category)
    );
  }, [category, products]);

  return (
    <DataContext.Provider
      value={{
        products,
        cart,
        setCart,
        filteredProducts,
        setFilteredProducts,
        loading,
        error,
        category,
        setCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
