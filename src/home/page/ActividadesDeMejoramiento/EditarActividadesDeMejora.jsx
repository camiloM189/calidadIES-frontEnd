import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../../hook/useForm';
import { FiltrarUnaOportunidadDeMejora, filtrarActividadesDeOportunidadDeMejora, getProgramasTitle, getProgramasTitleId, obtenerFilesConIdActividadesDeMejora, obtenerOportunidadDeMejoraPorId } from '../../../store/programas/programaThunks';
import { vaciarLosTitulosDeActividadesDeOportunidadesDeMejora } from '../../../store/programas/planDeMejoramientoSlice';
import { filtrarActividadesDeMejora } from '../../../store/programas/OportunidadDeMejoraThunks';
import Swal from 'sweetalert2';

export const EditarActividadesDeMejora = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {actividades,onInputChange,onResetForm} = useForm('');
    const [actividadesOportunidadDeMejora, setActividadesOportunidadDeMejora] = useState([])
    
     const {idPlanDeMejoramiento,idPrograma,condicionDeCalidades,idOportunidadDeMejora} = useParams();
  
     useEffect(() => {
      dispatch(getProgramasTitleId({idPrograma}));
      dispatch(getProgramasTitle());
      dispatch(obtenerOportunidadDeMejoraPorId({idPlanDeMejoramiento}));
      dispatch(FiltrarUnaOportunidadDeMejora({idPlanDeMejoramiento,idOportunidadDeMejora}))
      dispatch(filtrarActividadesDeOportunidadDeMejora({idOportunidadDeMejora}))
      dispatch(vaciarLosTitulosDeActividadesDeOportunidadesDeMejora())
      dispatch(filtrarActividadesDeMejora({condicionDeCalidades,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora}))
      }, [])

  
    const {actividadesDeMejora,proyeccionDeEventos,idActividades} = useSelector(state => state.oportunidadDeMejoraSlice);

    const {oportunidadDeMejora,filtrarActividades,errorMessage} = useSelector(state => state.planDeMejoramiento);
    
    const volver = () => {
        console.log(volver);
       navigate(`/homepage/${idPlanDeMejoramiento}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/actividades`)
 
    }
    

    const borrarActividad = (idActividad) => {
      console.log(idOportunidadDeMejora);

     dispatch(obtenerFilesConIdActividadesDeMejora({idActividadesDeMejora:idActividad,idOportunidadDeMejora:idOportunidadDeMejora,condicionDeCalidades,idPlanDeMejoramiento,idPrograma}));

     Swal.fire('La actividad de mejora se ha Eliminado con exito',errorMessage,'success')
    

    
    }

  return (
<>
    
       
    <div className='container'>
    <h3 className='ms-5 mt-2 mb-2'>Editar Actividades</h3>

    
    <div className='border border-1 border-black mb-3 mt-4'>
    <h3 className='ms-3 text-center'>Actividades</h3>
       <ol className=''>
         {
          actividadesDeMejora?.map(act => (
        <li className="">
           
      
           <button className={`botonItem mb-2`}> 
           <p className='text-center mt-1'> {act.tituloDeActividades}</p>
        
           </button> 
           
           <div className="position-relative mb-2 ">
        <button className="text-end botonboton  position-absolute borrarActividadesNueva start-100 translate-middle"
        data-bs-toggle="modal" data-bs-target="#exampleModal2">
       <i className='bi bi-dash-circle text-light fs-3 ' ></i>
        </button>
        </div> 
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModal2">Borrar</h1> 
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ¿Seguro que quieres borrar esta actividad de mejora?
                    <br />
                    Esta accion borrara toda lo que contenga esta actividad
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => borrarActividad(act._id)}>Borrar</button>
                  
                  </div>
                </div>
              </div>
            </div> 
        
        </li>
            
          ))
        }    
    </ol>   
    </div>
    <div className="mb-3 ms-5">

   
      <button className='btn btn-outline-danger btn-block boton-back-evento' onClick={volver}>
          Volver
      </button> 

    
      </div>
 
  </div>



</>
  )
}
