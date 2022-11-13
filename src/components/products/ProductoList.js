import * as API from "../../services/ProductsService";
import { Container } from "react-bootstrap";
import { CardProducto } from "./CardProducto";

export function ProductoListComponent() {
  var state = {
    products: API.getAllProducts(),
  };
  return (
    <>
          <Container>
            <div className="row">
      {state.products.map((product) => {
        return (
            <CardProducto producto={product} key={product.id}></CardProducto>
        );
      })}
      </div>
          </Container>

    </>
  );
}
