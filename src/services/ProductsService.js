import json from './products.json'

export function getAllProducts(){
    return json.products
} 
export function getOneById(id){
    const productList = json.products;
    productList.find({id:id})
}

export function guardar(product){
    getAllProducts().push(product)
}