import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { borrarPrograma, getProgramasTitle } from '../../../store/programas/programaThunks';
import { clearProgramasFiltrado, vaciarOportunidadesDeMejora, vaciarPlanDeMejoramiento } from '../../../store/programas/planDeMejoramientoSlice';
import Swal from 'sweetalert2';

export const EditarPrograma = () => {
  const dispatch = useDispatch();
  const { programas,errorMessage } = useSelector(state => state.planDeMejoramiento);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProgramasTitle());
    dispatch(clearProgramasFiltrado());
    dispatch(vaciarOportunidadesDeMejora());
    dispatch(vaciarPlanDeMejoramiento());
  }, [])

  const borrarProgramas = (idPrograma) => {
    console.log(idPrograma);
    dispatch(borrarPrograma({idPrograma}))
    Swal.fire('El Programa se ha borrado con exito',errorMessage,'success')
    dispatch(getProgramasTitle());
    dispatch(clearProgramasFiltrado());
    dispatch(vaciarOportunidadesDeMejora());
    dispatch(vaciarPlanDeMejoramiento());
    navigate(`/homepage`)
}
  return (
    <div>
  
    <ul className="mt-2 ">
    {
     programas.map(event => (
      <>
      <button className="mt-2 text-light programasTitulos tituloDeProgramasEdit animate__animated animate__backInDown">
     
      <li className=" mb-2 text-center "> 
        
          {event.Programa}
          
      </li>
      
      </button>
      <div className="position-relative">
        <button className="text-end botonboton position-absolute bottom-50 start-100 translate-middle"
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
                    ¿Seguro que quieres borrar este Programa?
                    <br />
                    Esta accion borrara toda lo que contenga este Programa
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => borrarProgramas(event._id)}>Borrar</button>
                  
                  </div>
                </div>
              </div>
            </div> 
        </div> 
       
      {/* <div className="position-relative">
      <button className="text-end botonboton position-absolute bottom-50 start-100 translate-middle">
      <i className='bi bi-dash-circle text-danger fs-3' onClick={() => borrarProgramas(event._id)}></i>
      </button>
      </div> */}
      </>
     ))
    }
  </ul>
  <Link to={`/homepage`}>
  <button className="btn btn-outline-danger btn-block boton-back">volver</button>
  </Link>

  </div>
  )
}
