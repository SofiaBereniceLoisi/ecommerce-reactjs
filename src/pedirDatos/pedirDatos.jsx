
import productos from "./productos.json";


export const pedirDatos = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(productos)
        }, 1200);
    })
}

export const pedirItemPorId = (id) => {
    return new Promise ((resolve,reject) => {
        
        const producto = productos.find((el) => el.id === id)
        if(producto){
            resolve(producto)
        }else{
            reject({
                error: "Producto no encontrado"
            })
        }
    });
}