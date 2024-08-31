import  { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar}) => {
  const [added, setAdded] = useState(false); 

  // Función para manejar la acción de agregar al carrito
  const clickAgregar = () => {
    handleAgregar()
    setAdded(true)
  };

  // Función para manejar la acción de quitar del carrito
  const clickQuitar = () => {
    handleQuitar()
    setAdded(false); 
    
  };

  return (
    <div className="card h-100">
      <img
        src={imagen}
        alt={titulo}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text flex-grow-1">{descripcion}</p>
        <p className="card-text"><strong>{precio}</strong></p>
        {added ? (
          <button
            className="btn btn-danger mt-auto"
            type="button"
            onClick={clickQuitar} 
          >
            Quitar del carrito
          </button>
        ) : (
          <button
            className="btn btn-primary mt-auto"
            type="button"
            onClick={clickAgregar} 
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
    imagen: PropTypes.string.isRequired, 
    titulo: PropTypes.string.isRequired, 
    descripcion: PropTypes.string.isRequired, 
    precio: PropTypes.string.isRequired, 
    handleAgregar: PropTypes.func.isRequired, 
    handleQuitar: PropTypes.func.isRequired 
  };

export default Card;
