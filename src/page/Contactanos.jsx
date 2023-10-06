import { useDispatch } from "react-redux";
import { useForm } from "../hook/useForm"
import { enviarUnComentario } from "./store/correoThunks";
import Swal from "sweetalert2";


export const Contactanos = () => {
  const dispatch = useDispatch()
  const {onInputChange,onResetForm,Nombre,Comentario,Email} = useForm('');
  const errorMessage = ''
  const EnviarComentario = (event) => {
		event.preventDefault();
    if(Email.length === 0) return;
    dispatch(enviarUnComentario({Nombre,Comentario,Email}))
    onResetForm();
    Swal.fire('El Correo se envio exitosamente',errorMessage,'success')

  }

  return (
    <>
    <div className='container animate__animated animate__backInDown'>
        <article class="text-center mb-3">
          <h1>¿Interesado?</h1>
          <p class="fs-5">Para más información, puedes contactarme en <a href="#">calidadies2023@gmail.com</a> </p>
        </article>
        <article class="">
          <form onSubmit={EnviarComentario}>
            <div class="mb-3"> 
              <label class="form-label"  for="name">Nombre:</label>
              <input class="form-control "
               id="name" name="Nombre"
                value={Nombre || ''}
                onChange={onInputChange}
               placeholder="Tu nombre"
               type="text"
                 />
            </div>
            <div class="mb-3">
              <label class="form-label " for="email">Email:</label>
    

 
            <input type="email" className="form-control mb-4 input-text" 
				   placeholder="Email"
				   value={Email || ''}
				   name='Email'
				   onChange={onInputChange}
				   
				   />
            </div>
            <div class="mb-3">
              <textarea class="form-control"
               for="comments " rows="5"
                name="Comentario" id="comments" 
                placeholder="Dejanos Tus Comentarios"
                value={Comentario || ''}
                onChange={onInputChange}
                 ></textarea>
            </div>
           
            <div class="mb-3">
              <input class="btn btn-lg btn-success" type="submit"/>
            </div>
           
            
          </form>
        </article>
        </div>
        </>
  )
}
