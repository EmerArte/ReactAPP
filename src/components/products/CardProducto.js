import { Button } from "react-bootstrap";
import * as ShopCar from "../../services/ClientService"



export function CardProducto(prop) {
  const oldPrice = Math.round(
    prop.producto.price +
      prop.producto.price * (prop.producto.discountPercentage / 100)
  );
  return (
    <div className="col-md-12 col-lg-4 mb-4 mb-lg-0 my-2">
      <div className="py-2 h-100 border rounded">
        <img
          src={prop.producto.images[0]}
          className="img-fluid mx-auto d-block"
          alt={prop.producto.category}
          style={{ minHeight: "350px", maxHeight: "350px", objectFit: "cover" }}
        />
        <div className="p-2">
          <div className="d-flex justify-content-between">
            <p className="small">
              <a href="#!" className="text-muted">
                {prop.producto.category}
              </a>
            </p>
            <p className="small text-danger">
              <s>${oldPrice}</s>
            </p>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{prop.producto.title}</h5>
            <h5 className="text-dark mb-0">${prop.producto.price}</h5>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="text-muted mb-0">
              Available: <span className="fw-bold">{prop.producto.stock}</span>
            </p>
          </div>
          <div className="d-grid gap-2">
            <Button variant="success" size="md" onClick={()=>{
              ShopCar.selectProducts(prop.producto)
            }
              }>
              Añadir al carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
