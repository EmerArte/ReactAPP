import * as API from "../../services/ProductsService"
import { CardProducto } from "./CardProducto"

export function ProductoListComponent(){
    var state = {
        products: API.getAllProducts()
    }
    return(
        <>
        {
            state.products.map((product) =>{
                return <CardProducto producto={product} key= {product.id}></CardProducto>
            })
        }
        </>
    )
}