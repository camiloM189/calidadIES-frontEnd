import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { borrarPlanesDeMejoramiento, getProgramasTitleId, obtenerPlanDeMejoramiento } from '../../../store/programas/programaThunks';
import Swal from 'sweetalert2';

export const EditarPlanDeMejoramiento = () => {

    const dispatch = useDispatch();
    const {idPrograma} = useParams();
    const navigate = useNavigate();

    const {errorMessage} = useSelector(state => state.planDeMejoramiento);


    useEffect(() => {
    dispatch(getProgramasTitleId({idPrograma}));
    dispatch(obtenerPlanDeMejoramiento({idPrograma}))
    }, [])

    const borrarProgramas = (idPlanDeMejoramiento) => {
      
        dispatch(borrarPlanesDeMejoramiento({idPlanDeMejoramiento,idPrograma}))

        navigate(`/homepage/${idPrograma}/planDeMejoramiento`);
        Swal.fire('El Programa se ha creado con exito',errorMessage,'success')

    }

    const {setProgramas,planesObtenidos} = useSelector(state => state.planDeMejoramiento);


  return (
    <>
    <div>

     <h1 className="text-center">{setProgramas}</h1>

      <ul className="mt-2 ">
         {
       planesObtenidos.map(event => (
        <>
        <button className="mt-2 text-light programasTitulos animate__animated animate__backInDown">
        <li className=" mb-2 text-center "> 
            {event.tituloDePlanDeMejoramiento}
    
            
        </li>
        </button>
        
    
        <div className="position-relative">
        <button className="text-end botonboton position-absolute bottom-0 start-100 translate-middle"
        data-bs-toggle="modal" data-bs-target="#exampleModal2">
        <i className='bi bi-dash-circle text-danger fs-3' ></i>
        </button>
        
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModal2">Borrar</h1> 
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ¿Seguro que quieres borrar este plan de mejoramiento?
                    <br />
                    Esta accion borrara toda lo que contenga este plan de mejoramiento
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => borrarProgramas(event._id)}>Borrar</button>
                  
                  </div>
                </div>
              </div>
            </div> 
        </div> 
       
        


            
        </>
       ))
       
      }   
    </ul>

    <Link to={`/homepage/${idPrograma}/planDeMejoramiento`}>


        <button className="btn btn-outline-danger btn-block boton-back">volver</button>
        </Link>

    </div>
   
   </>
  )
}
