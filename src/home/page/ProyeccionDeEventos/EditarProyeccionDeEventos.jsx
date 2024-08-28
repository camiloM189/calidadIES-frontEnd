import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../hook/useForm';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FiltrarUnaOportunidadDeMejora, borrarProyeccionDeEventos, editCrearProyeccionDeEventos, filtrarUnaActividadDeOportunidadDeMejora, getProgramasTitle, getProgramasTitleId, obtenerFilesConIdActividadesDeMejora, obtenerOportunidadDeMejoraPorId, obtenerProyeccionDeEventos } from '../../../store/programas/programaThunks';

export const EditarProyeccionDeEventos = () => {
  const dispatch = useDispatch();
  const {idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora,idActividadesDeMejora} = useParams();
  let {onInputChange,indicador,fecha1,fecha2,fecha3,fecha4,
      fecha5,fecha6,fecha7,onResetForm,actualizarTitulosDeActividades
    } = useForm('');
    

  const Navigate = useNavigate();
  useEffect(() => {
      dispatch(getProgramasTitleId({idPrograma}));
      dispatch(getProgramasTitle());
      dispatch(obtenerOportunidadDeMejoraPorId({idPlanDeMejoramiento}));
      dispatch(FiltrarUnaOportunidadDeMejora({idPlanDeMejoramiento,idOportunidadDeMejora}))
      dispatch(filtrarUnaActividadDeOportunidadDeMejora({idOportunidadDeMejora,idActividadesDeMejora}))
      dispatch(obtenerProyeccionDeEventos({idActividadesDeMejora}))
      }, [])

  const {filtroDeActiviadDeMejora,proyeccionDeEventos,setProgramas,
    nombreDeLaActividadDeMejoramiento,oportunidadDeMejora,notas} = useSelector(state => state.planDeMejoramiento);


  const actualizarActividadesDeMejora = (event) => {
    event.preventDefault();
    dispatch(editCrearProyeccionDeEventos({actualizarTitulosDeActividades,idActividadesDeMejora}));
    Navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}/nueva`)
  }
  const borrarProyeccionDeEvento = (idProyeccionDeEventos) => {
    dispatch(borrarProyeccionDeEventos({idProyeccionDeEventos,idActividadesDeMejora}));

  }
  const borrarLaActividadDeMejora = () => {

   dispatch(obtenerFilesConIdActividadesDeMejora(idActividadesDeMejora,idOportunidadDeMejora))
   Navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/actividades`)

  }
  return (
    <>
    
    <div className="d-flex flex-row-reverse mt-5 borrarTodo ">
            <button className="btn btn-outline-danger ms-5 mt-3 me-5" type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-trash"></i>
              <span>Borrar Todo</span>
            </button>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Borrar</h1>
                </div>
                <div class="modal-body">
                  ¿Seguro que quieres borrar esta Actividad de mejoramiento?
                  <br />
                  Esta accion eliminara todo lo que contenga la actividad 
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal" 
                  onClick={borrarLaActividadDeMejora}
                  >Borrar</button>
                </div>
              </div>
            </div>
          </div>


          
   <div className=" container tabla-margin">
    <h1>Editar Actividades De Mejora</h1>

    <h3>Cambiar el titulo de la actividad de mejora</h3>
    <form onSubmit={actualizarActividadesDeMejora}>
        <input type="text" 
        placeholder={filtroDeActiviadDeMejora.tituloDeActividades}
        className="form-control mb-4"
        value={actualizarTitulosDeActividades}
        onChange={onInputChange}
        name='actualizarTitulosDeActividades'
        />
        
  <button
     className="btn btn-outline-primary boton-guardar" type='submit'>
  <span> Actualizar </span>
  </button>  
    </form>
    
     <div className="table-responsive">
 <table className="table table-bordered table-striped table-query table-bg custom-table">
   <thead className="table-dark ">
     <tr>
     <th>Indicador</th>
     <th>{oportunidadDeMejora.start}</th>
     <th>{oportunidadDeMejora.start + 1}</th>
     <th>{oportunidadDeMejora.start + 2}</th>
     <th>{oportunidadDeMejora.start + 3}</th>
     <th>{oportunidadDeMejora.start + 4}</th>
     <th>{oportunidadDeMejora.start + 5}</th>
     <th>{oportunidadDeMejora.start + 6}</th>
     <th className="text-center"></th>

      
     </tr>
   </thead>
   <tbody>
       {
        proyeccionDeEventos?.map(event => (
          <>
          <tr>
          <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : 'boton-next'}`}><button className={` botonCuadroItem ${(event.totalNota === event.total) ? 'bg-success text-light' : 'boton-next text-light'}`} onClick={() => entrarEnNotas(event._id)}>{event.indicador}</button></th>
          <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha1}</th>
          <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha2}</th>
          <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha3}</th>
          <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha4}</th>
          <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha5}</th>
          <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha6}</th>
          <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha7}</th>
          
          <th className='bg-danger  text-center'>
            <button type="button" className="borrarProyeccion text-light"
             data-bs-toggle="modal" data-bs-target="#exampleModal1">
              Borrar
            </button> 
             <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModal1">Borrar</h1> 
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ¿Seguro que quieres borrar esta Proyeccion de eventos?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"  onClick={() => borrarProyeccionDeEvento(event._id)}>Borrar</button>
                  
                  </div>
                </div>
              </div>
            </div> 
              </th>   
          </tr>
          </>
        ))
       }  
   </tbody>
 </table>
 </div>
</div>
 <h2 className="text-center">Proyeccion de Eventos</h2>
 
 <Link to={`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}/nueva`}>



 <button className="btn btn-outline-danger btn-block boton-back-evento" >Volver</button>
 </Link>
      

 
 </>
  )
}
