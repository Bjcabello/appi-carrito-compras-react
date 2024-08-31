import { useContext } from "react";
import Card from '../componentes/Card'; 
import CarritoContext from "../contex/CarritoContext";
import ProductosContext from "../contex/ProductosContext";

const ComprasPage = () => {
  const { productos } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  return (
    <>
      <h1 className="mb-4">Compras:</h1>
      <hr />
      <div className="row">
        {productos.map(producto => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <Card
              imagen={producto.image}
              titulo={producto.title}
              descripcion={producto.description}
              precio={`$${producto.price}`}
              handleAgregar={() => agregarCompra(producto)}
              handleQuitar={() => eliminarCompra(producto.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ComprasPage;
