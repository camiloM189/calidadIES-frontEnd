import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { borrarProyeccionDeEventos } from '../../../store/programas/programaThunks';
import { SetActive } from '../SetActive';
import { WindowNotes } from '../WindowNotes';

export const Notas = () => {
    const dispatch = useDispatch();
    const {idPrograma,idPlanDeMejoramiento,
        idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos} = useParams();
    const {active} = useSelector(state => state.planDeMejoramiento);
    const navigate = useNavigate();


  const volverDeNote = () => {
    navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}`)
  }

  const borrarLaProyeccionDeEventos = () => {
 
      dispatch(borrarProyeccionDeEventos({idProyeccionDeEventos}))
      navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}`)

  } 
  return (
    <>
    <WindowNotes/>
    {
      (active) ?
        <SetActive/>
      :
      <div className='noNote'>
      <h1 className="text-light text-center center-text"></h1>
    <h3 className="text-light text-center center-text">Crea un seguimiento</h3>

    <Link to={`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}/${idProyeccionDeEventos}/create`}>
    <button className={`btn btn-dark boton-posicion`}>+</button>
    </Link>
    
    <button className="btn btn-outline-danger btn-block boton-regresar-notes" onClick={volverDeNote}>Volver</button>

    


    </div>
    




    }
  


</>
  )
}
