import calidadiesApi from "../../api/calidadiesApi";

export const enviarUnComentario = ({Nombre,Comentario,Email}) =>{
    return async(dispatch,getState) => {
    console.log(Email);
   await calidadiesApi.post(`/correo/EnviarCorreo`,{Nombre,Comentario,Email});



    }
}