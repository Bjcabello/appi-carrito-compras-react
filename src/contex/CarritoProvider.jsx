import { useReducer } from "react";
import PropTypes from 'prop-types';  // Importa PropTypes
import CarritoContext from "./CarritoContext";

const initialState = [];

const comprasReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '[CARRITO] Agregar Compra':
      return [...state, action.payload];
    case '[CARRITO] Aumentar cantidad de compra':
      return state.map(item => item.id === action.payload ? { ...item, cantidad: item.cantidad + 1 } : item);
    case '[CARRITO] Disminuir cantidad de compra':
      return state.map(item => (item.id === action.payload && item.cantidad > 1) ? { ...item, cantidad: item.cantidad - 1 } : item);
    case '[CARRITO] Eliminar compra':
      return state.filter(compra => compra.id !== action.payload);
    default:
      return state;
  }
};

const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    dispatch({ type: '[CARRITO] Agregar Compra', payload: { ...compra, cantidad: 1 } });
  };

  const aumentarCantidad = (id) => {
    dispatch({ type: '[CARRITO] Aumentar cantidad de compra', payload: id });
  };

  const disminuirCantidad = (id) => {
    dispatch({ type: '[CARRITO] Disminuir cantidad de compra', payload: id });
  };

  const eliminarCompra = (id) => {
    dispatch({ type: '[CARRITO] Eliminar compra', payload: id });
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

// Agrega validación de PropTypes
CarritoProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Valida que children es requerido
};

export default CarritoProvider;
