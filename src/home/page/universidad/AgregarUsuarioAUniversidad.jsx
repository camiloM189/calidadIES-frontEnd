import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../../hook/useForm"
import { EnviarcodigoUniversidadId } from "../../../store/programas/programaThunks";
import Swal from "sweetalert2";

export const AgregarUsuarioAUniversidad = () => {
    const dispatch = useDispatch();
    const {name,tipoDeUsuario,uid} = useSelector(state => state.auth)

    const {idUniversidad,onInputChange} = useForm('');
    const errorMessage = ''

    const enviarCodigo = (event) => {
        event.preventDefault();
        dispatch(EnviarcodigoUniversidadId({uid,idUniversidad}))
        Swal.fire('Su Usuario se agrego con exito a la universidad',errorMessage,'success')


    }


    return (
        <div  className="modal-oportunidadDeMejora">
    
        <div className="modal-content2 text-center ">
             <span id="closeModal" className="close-modal2">&times;</span> 
             <h1 class="modal-title text-start fs-5" >Hola {name}</h1>
             <hr />
             <span></span>
             <div className='text-start'>
             Tu usuario no esta vinculado a ninguna universidad
                    <br />
            Por favor ingresa el codigo de la universidad a la que pertenece
                    <br />
              </div>
              <hr />
              <form onSubmit={enviarCodigo}>
                <input type="text"
                 placeholder="codigo de universidad"
                 className="form-control mb-3"
                value={idUniversidad}
                name="idUniversidad"
                onChange={onInputChange}
                 
                 />

              <div className='botonesDelModal me-2'>
              <button className='btn btn-primary me-3'>Comprobar</button>
              </div>
              </form>
        
           
             
        
      </div>
       
    </div>
    )
}