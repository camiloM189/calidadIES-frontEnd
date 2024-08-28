import React from 'react'
import { useForm } from '../../hook/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { startRegister } from '../../store/auth/authThunks';
import Swal from 'sweetalert2';
import { onClear } from '../../store/auth/authSlice';

export const ComprobarPage = () => {

    const {codigo1,codigo2,codigo3,codigo4,onInputChange,onResetForm} = useForm('');
    const {codigo,name,password,email} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const errorMessage = 'Codigo Incorrecto'
    const registerUser = (event) => {
        event.preventDefault()
        const codigoUser = `${codigo1}${codigo2}${codigo3}${codigo4}`
  

        if(codigo === codigoUser){
            dispatch(startRegister({name,password,email}))
            dispatch(onClear())
            const errorMessage = ''
            Swal.fire('El usuario se ha creado con exito', errorMessage, 'success')

        }else{
            Swal.fire('Error en la autenticacion', errorMessage, 'error')
        }
        onResetForm()

    }
  return (
    <div  className="modal-oportunidadDeMejora">
    
    <div className="modal-content2 text-center ">
         <span id="closeModal" className="close-modal2">&times;</span> 
         <h1 class="modal-title text-start fs-5" >Verificacion De Email</h1>
         <hr />
         <span></span>
         <div className='text-center mb-3'>
            Por favor coloque el codigo que le a llegado al correo
           
                
          </div>
          <form onSubmit={registerUser}>
            <div className='row text-center'>
            
            <input type="text"
             maxlength="1"
             id="digit1" 
             className="form-control inputCodigo ms-4 me-3 border border-primary col-3"
             onkeyup="moveToNext(this, 'digit2')" 
             value={codigo1 || ''}
             onInput={onInputChange}
            name='codigo1'

               />
            <input type="text"
             maxlength="1"
             id="digit2" class="form-control inputCodigo ms-4 me-3 border border-primary col-3" 
             onkeyup="moveToNext(this, 'digit3')"
             value={codigo2 || ''}
             onInput={onInputChange}
            name='codigo2'

             />
            <input type="text" 
            maxlength="1" 
            id="digit3" 
            class="form-control inputCodigo ms-4 me-3 border border-primary col-3" 
            onkeyup="moveToNext(this, 'digit4')"
            value={codigo3 || ''}
            onInput={onInputChange}
            name='codigo3'

            />
            <input type="text" 
            maxlength="1" id="digit4"
             class="form-control inputCodigo ms-4 me-3 border border-primary col-3"
              onkeyup="submitVerification()" 
              value={codigo4 || ''}
              onInput={onInputChange}
              name='codigo4'
              />

            </div>
           
     
        <hr />
          <div className='me-2'>
          <button className='btn btn-primary me-3' type="submit"  >Enviar</button>
        
          </div>
       
          </form>
    
  </div>
   
</div>
  )
}
