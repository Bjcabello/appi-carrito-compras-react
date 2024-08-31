import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import ComprasPage from './pages/ComprasPage';
import CarritoPage from './pages/CarritoPage';
import ProductosProvider from './contex/ProductosProvider';
import CarritoProvider from './contex/CarritoProvider';


const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPage />} />
            <Route path="/carrito" element={<CarritoPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  );
}

export default CarritoApp;
