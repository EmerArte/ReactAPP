import { Container, Table } from "react-bootstrap";
import { ShopContext } from "../../App";
import React, { useContext } from "react";
export function ShopCar(props) {
  const carritoCompra = useContext(ShopContext);
  return (
    <Container className="my-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            carritoCompra.map((producto)=>{
              return (
              <tr key={producto.id}>
                <td><img src={producto.images[0]}
                     className="img-fluid mx-auto d-block"
                     alt={producto.category}
                     style={{ minHeight: "100px", maxHeight: "100px", objectFit: "cover" }}/></td>
                <td>{producto.title}</td>
                <td>${producto.price}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.price * producto.cantidad}</td>
              </tr>)
            })
          }
        </tbody>
      </Table>
    </Container>
  );
}
