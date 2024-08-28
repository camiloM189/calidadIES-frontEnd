import React from 'react'
import { changeFalseborrarOportunidadDeMejora, vaciarActividadeDeMejora } from '../../../store/programas/oportunidadDeMejoraSlice'
import { useDispatch, useSelector } from 'react-redux'
import { borrarOportunidadDeMejora, getProgramasTitle, getProgramasTitleId, obtenerOportunidadDeMejoraPorId } from '../../../store/programas/programaThunks'
import { useParams } from 'react-router-dom'
import { vaciarOportunidadDeMejora } from '../../../store/programas/planDeMejoramientoSlice'
import Swal from 'sweetalert2'

export const ModalDeOporunidadDeMejora = () => {

  const dispatch = useDispatch()

  const {borrarOportunidadDeMejoraId} = useSelector(state => state.oportunidadDeMejoraSlice);
  const {idPrograma,idPlanDeMejoramiento} = useParams();

  const {errorMessage} = useSelector(state => state.planDeMejoramiento);

  const closeOportundiadDeMejora = () => {
    dispatch(changeFalseborrarOportunidadDeMejora())
 }


  const borrarOportunidaDeMejora = () => {
    dispatch(borrarOportunidadDeMejora({idOportunidadDeMejora:borrarOportunidadDeMejoraId,idPlanDeMejoramiento}))
    dispatch(getProgramasTitle());
    dispatch(obtenerOportunidadDeMejoraPorId({idPlanDeMejoramiento}));
    dispatch(vaciarOportunidadDeMejora());
    dispatch(vaciarActividadeDeMejora());
    dispatch(changeFalseborrarOportunidadDeMejora())


    Swal.fire('La oportunida de mejora se ha Eliminado con exito',errorMessage,'success')
 
   
  }

  return (
    <>
    
    <div  className="modal-oportunidadDeMejora">
    
        <div className="modal-content2 text-center ">
             <span id="closeModal" className="close-modal2">&times;</span> 
             <h1 class="modal-title text-start fs-5" >Borrar</h1>
             <hr />
             <span></span>
             <div className='text-start'>
             ¿Seguro que quieres borrar este plan de mejoramiento?
                    <br />
                    Esta accion borrara toda lo que contenga este plan de mejoramiento 
                    <br />
              </div>
              <hr />
        
           
              <div className='botonesDelModal me-2'>
              <button className='btn btn-secondary me-3' onClick={closeOportundiadDeMejora}>Cerrar</button>
              <button className='btn btn-danger' onClick={borrarOportunidaDeMejora}>Borrar</button>
              </div>
        
      </div>
       
    </div>
   
</>
  )
}
