import { useContext } from "react";
import CarritoContext from "../contex/CarritoContext";

const CarritoPage = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
  };

  const handleImpresion = () => {
    print();
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.cantidad}</span>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="2"><b>TOTAL:</b></td>
            <td><b>${calcularTotal()}</b></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={handleImpresion}
          disabled={listaCompras.length < 1}
        >
          Imprimir
        </button>
      </div>
    </>
  );
};




export default CarritoPage;
