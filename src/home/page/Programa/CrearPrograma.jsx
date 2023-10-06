import React from 'react'
import { useForm } from '../../../hook/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createPrograma } from '../../../store/programas/programaThunks';
import Swal from 'sweetalert2';

export const CrearPrograma = () => {

    const {programa,onInputChange} = useForm('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMessage } = useSelector(state => state.planDeMejoramiento);


  const createProgram = (event) => {
    event.preventDefault();

    dispatch(createPrograma({programa}))


    navigate('/homepage')
    Swal.fire('El Programa se ha creado con exito',errorMessage,'success')

  }
  return (
    <div className='cuadrado'>
    <div className='cuadrado border border-1 border-start-0 border-end-0 border-bottom-0 border-dark p-4'>

    <div className="mb-3 ms-5 ">
  
    <form onSubmit={createProgram} >
  <label className="form-label animate__animated animate__backInDown">Escriba el nombre del programa</label>
  <input type="text" 
      className="form-control animate__animated animate__backInDown"
      placeholder="Ingrese el nombre de su programa"
      value={programa}
      onChange={onInputChange}
      name="programa"
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
  )
}
