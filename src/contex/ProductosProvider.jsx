import { useEffect, useState } from "react";
import PropTypes from "prop-types"; 
import ProductosContext from "./ProductosContext";

const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error fetching productos:", error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ProductosContext.Provider value={{ productos }}>
      {children}
    </ProductosContext.Provider>
  );
};


ProductoProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default ProductoProvider;
