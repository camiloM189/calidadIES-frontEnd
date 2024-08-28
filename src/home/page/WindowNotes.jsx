import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiltrarUnaOportunidadDeMejora, StartObtenerNotas, filtrarUnaActividadDeOportunidadDeMejora, getProgramasTitle, getProgramasTitleId, obtenerLosFiles, obtenerNota, obtenerOportunidadDeMejoraPorId, obtenerProyeccionDeEventos, obtenerUnaProyeccionDeEventos, vaciarTodosLosFiles } from '../../store/programas/programaThunks';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { activeNote, chagemodeFalse } from '../../store/programas/planDeMejoramientoSlice';


export const WindowNotes = () => {
  const Navigate = useNavigate();

  const dispatch = useDispatch()
  const {idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos} = useParams();
  
  useEffect(() => {
    dispatch(getProgramasTitleId({idPrograma}));
    dispatch(getProgramasTitle());
    dispatch(getProgramasTitleId({idPrograma}));
    dispatch(obtenerOportunidadDeMejoraPorId({idPlanDeMejoramiento}));
    dispatch(FiltrarUnaOportunidadDeMejora({idPlanDeMejoramiento,idOportunidadDeMejora}))
    dispatch(filtrarUnaActividadDeOportunidadDeMejora({idOportunidadDeMejora,idActividadesDeMejora}))
    // dispatch(obtenerProyeccionDeEventos({idActividadesDeMejora}))
    dispatch(StartObtenerNotas({idProyeccionDeEventos}))
    dispatch(obtenerUnaProyeccionDeEventos({idActividadesDeMejora,idProyeccionDeEventos}))
   
  }, [])
  
  const {notas,proyeccionDeEventos} = useSelector(state => state.planDeMejoramiento);
 
  
  const onActive = (idNotas) => {
    // Navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}
    // /${idOportunidadDeMejora}/${idActividadesDeMejora}/${idProyeccionDeEventos}/${idNotas}`)

     dispatch(obtenerNota({idNotas}))
     dispatch(activeNote())
     dispatch(vaciarTodosLosFiles())
     dispatch(obtenerLosFiles(idNotas))
     dispatch(chagemodeFalse())
     
  }
  
  return (
    <div className='window border border-1 border-bottom-0'>
    <h5 className="ms-3 mt-3">Seguimiento</h5>
    <div className='list-button animate__animated animate__backInDown'>   
        
    <ul>
      {
        notas.map(note => (
          <li className="mb-4" >

            <button className="btn mb-2 listas-cuadrado2" onClick={() => onActive(note._id)}> 
              {note.titulosDeNotas}
            </button>
      
        </li>
        ))
      }  
    
    </ul>
    
   
    </div> 
  </div>
  )
}
