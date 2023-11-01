
import products from "./productos.json";


export const pedirDatos = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(products)
        }, 1200);
    })
}

export const pedirItemPorId = (id) => {
    return new Promise ((resolve,reject) => {
        
        const product = products.find((el) => el.id === id)
        if(product){
            resolve(product)
        }else{
            reject({
                error: "Producto no encontrado"
            })
        }
    });
}