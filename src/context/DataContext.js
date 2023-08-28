import { createContext, useEffect, useState } from "react";
import api from "../api/api";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get("");
      setProducts(response.data);
    };

    if (localStorage.getItem("e-commerce-cart")) {
      const fetchedCart = JSON.parse(localStorage.getItem("e-commerce-cart"));
      setCart(fetchedCart);
    }

    return () => fetchProducts();
  }, []);

  return (
    <DataContext.Provider value={{ products, cart, setCart }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
