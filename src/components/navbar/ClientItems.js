import { Link } from "react-router-dom";
function ClientItems() {
  return (
    <>
        <Link to="/products" className="nav-link">Lista productos</Link>
        <Link to="/shopping" className="nav-link">Carrito</Link>
    </>
  );
}
export default ClientItems;
