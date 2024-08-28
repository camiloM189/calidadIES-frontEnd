import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { crearPlanDeMejoramiento, getProgramasTitleId, obtenerPlanDeMejoramiento } from '../../../store/programas/programaThunks';
import Swal from 'sweetalert2';

export const PlanDeMejoramiento = () => {


    const dispatch = useDispatch();
    const {idPrograma} = useParams();
    const navigate = useNavigate();



    useEffect(() => {
    dispatch(getProgramasTitleId({idPrograma}));
    dispatch(obtenerPlanDeMejoramiento({idPrograma}))
   
    }, [])
    

    const {setProgramas,planesObtenidos,errorMessage} = useSelector(state => state.planDeMejoramiento);

    const createPlanDeMejoramiento = () => {

        dispatch(crearPlanDeMejoramiento({idPrograma,setProgramas}))
        Swal.fire('El Programa se ha creado con exito',errorMessage,'success')

    }
   
    const oportunidadDeMejora = (event) => {

      navigate(`/homepage/${event}/${idPrograma}`)
      
    }

    const editarPlanDeMejoramiento = () => {
      navigate(`/homepage/${idPrograma}/planDeMejoramiento/edit`)

    }
    
  return (
    <>
    <button className="btn btn-outline-danger botonEditProgramas" type="button"
  data-bs-toggle="modal"data-bs-target="#exampleModal" onClick={editarPlanDeMejoramiento} >
    <span>Editar</span>
  </button>
 
    <div>
        <h1 className="text-center animate__animated animate__bounceInLeft">{setProgramas}</h1>
      <ul className="mt-2 animate__animated animate__backInDown">
         {
       planesObtenidos.map(event => (
        <button className="mt-2 text-light programasTitulos tituloDeProgramas" onClick={() => oportunidadDeMejora(event._id)}>
        <li className=" mb-2 text-center "> 
            {event.tituloDePlanDeMejoramiento}
    
            
        </li>
        </button>
       ))
      }   
    </ul>
    <button className="btn btn-dark boton-posicion" onClick={createPlanDeMejoramiento}>+</button>
    <Link to={`/homepage`}>
        <button className="btn btn-outline-danger btn-block boton-back">volver</button>
        </Link>

    </div>
    </>
  )
}
