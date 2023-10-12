
import productos from "./productos.json";


export const pedirDatos = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(productos)
        }, 500);
    })
}

