import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getProgramasTitle } from '../../../store/programas/programaThunks';
import { clearProgramasFiltrado, vaciarOportunidadesDeMejora, vaciarPlanDeMejoramiento } from '../../../store/programas/planDeMejoramientoSlice';

export const ProgramaPage = () => {
    const dispatch = useDispatch();
  const { programas } = useSelector(state => state.planDeMejoramiento);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProgramasTitle());
    dispatch(clearProgramasFiltrado());
    dispatch(vaciarOportunidadesDeMejora());
    dispatch(vaciarPlanDeMejoramiento());
  }, [])

  const crearPlanDeMejoramiento = (event) => {
    navigate(`/homepage/${event}/planDeMejoramiento`);

  } 
  const editPrograma = () => {
    navigate(`/homepage/edit`)
  }
  return (
    <>
    <button className="btn btn-outline-danger botonEditProgramas animate__animated animate__backInDown" type="button"
  data-bs-toggle="modal"data-bs-target="#exampleModal" onClick={editPrograma}>
    <span>Editar</span>
    
  </button>
    <h1 className="text-center mb-4 animate__animated animate__backInDown">Programas</h1>

    
   
    <div className="mt-2 mb-2 ">
      <ul className="mt-2 animate__animated animate__backInDown">
      {
       programas.map(event => (
        <button className="mt-2 text-light programasTitulos tituloDeProgramas" onClick={() => crearPlanDeMejoramiento(event._id)}>
        <li className=" mb-2 text-center "> 
          
            {event.Programa}
            
        </li>
        </button>
       ))
      }
    </ul>
    <Link to={'/homepage/newPrograma'}>
    <button className="btn btn-dark boton-posicion">+</button>
    </Link>
    </div>
    </>
  )
}
