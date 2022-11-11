import { Link } from 'react-router-dom';
function AdminItems() {
    return(
        <>
        <Link className="nav-link">Lista productos</Link>
        <Link className="nav-link">Modificar productos</Link>
        <Link className="nav-link">Lista ventas</Link>
        </>

    )
}
export default AdminItems;