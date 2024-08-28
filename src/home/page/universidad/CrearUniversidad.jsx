import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../../hook/useForm'
import { useDispatch } from 'react-redux'
import { StartCrearUniversidad } from '../../../store/programas/programaThunks'
import Swal from 'sweetalert2'

export const CrearUniversidad = () => {

  const {onInputChange,nombreDeLaUniversidad} = useForm('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = ''
  const CrearUniversidad = (event) => {
    event.preventDefault();
    dispatch(StartCrearUniversidad({nombreDeLaUniversidad}))
    navigate('/homepage')
    Swal.fire('La Universidad se ha creado con exito',errorMessage,'success')

  }


  return (
    <div>
        <div className='cuadrado'>
    <div className='cuadrado border border-1 border-start-0 border-end-0 border-bottom-0 border-dark p-4'>
    <h1 className='text-center mb-4'>Crear Universidad</h1>

    <div className="mb-3 ms-5 ">
  
    <form onSubmit={CrearUniversidad}>
  <label className="form-label animate__animated animate__backInDown">Escriba el nombre de la universidad</label>
  <input type="text" 
      className="form-control animate__animated animate__backInDown"
      placeholder="Nombre de la universidad"
      value={nombreDeLaUniversidad}
      name="nombreDeLaUniversidad"
      onChange={onInputChange}
  />
  
  <button
      className="btn btn-outline-primary btn-block boton-guardar" type='submit'
  >
      <i className="far fa-save"></i>
      <span> Crear </span>
  </button>
  </form>  
  {/* <button className='btn btn-outline-danger btn-block boton-regresar' onClick={buttonBack}> */}
    <Link to={'/homepage'}>
    <button className='btn btn-outline-danger botonRegresarPrograma'>Volver</button>
    </Link>
  </div>
</div>     
</div>

    </div>
  )
}
