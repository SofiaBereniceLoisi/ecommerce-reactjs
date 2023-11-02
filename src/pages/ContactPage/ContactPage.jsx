import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../firebase/config';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const Contact = () => {

    const { register, handleSubmit, reset } = useForm();

    const sendForm = async (data) => {
        try {
            const message = {
                customer: {
                    nombre: data.nombre,
                    email: data.email,
                    celular: data.celular,
                },
                mensaje: data.comentario,
            };

            const messagesRef = collection(dataBase, 'messages');
            await addDoc(messagesRef, message);
            reset();
            Toastify({
                text: "Mensaje enviado exitosamente.",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                className: "toastify",
            }).showToast();

        } catch {
            Toastify({
                text: "Error al enviar el mensaje.",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                className: "toastify",
            }).showToast();
        }
    };

    return (
        <div className="formContainer">
            <h1>Contacto</h1>
            <form className="form" id="formulario" onSubmit={handleSubmit(sendForm)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu correo electrónico" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu celular" {...register("celular")} />
                <textarea className="texterea" name="comment" placeholder="Ingresá tu mensaje acá..." form="formulario" rows="6" {...register('comentario')}></textarea>
                <button className="buttonComprar" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact;