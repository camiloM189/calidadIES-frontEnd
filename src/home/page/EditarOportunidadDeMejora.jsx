import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiltrarUnaOportunidadDeMejora, actualizarActividadeDeMejora,borrarOportunidadDeMejora, actualizarOportunidadDeMejora, filtrarActividadesDeOportunidadDeMejora, filtrarTitulosDeActividadDeOportundiadDeMejora, getProgramasTitle, getProgramasTitleId, obtenerCondicionesDeCalidad, obtenerOportunidadDeMejoraPorId, selectCondicionesDeCalidad } from "../../store/programas/programaThunks";
import { useForm } from "../../hook/useForm";


export const EditarOportunidadDeMejora = () => {
// tenemos que agregar las actividades tengan tambien lo anterior
  const {idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora} = useParams();
  const {OportunidadDeMejoraTitle,tituloDeActividades,onInputChange} = useForm('');
  const [actividades, setActividades] = useState([]);
  const [newActivite, setNewActivite] = useState([]);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(getProgramasTitleId({idPrograma}));
    dispatch(getProgramasTitle());
    dispatch(getProgramasTitleId({idPrograma}));
    dispatch(obtenerOportunidadDeMejoraPorId({idPlanDeMejoramiento}));
    dispatch(FiltrarUnaOportunidadDeMejora({idPlanDeMejoramiento,idOportunidadDeMejora}))
    dispatch(filtrarActividadesDeOportunidadDeMejora({idOportunidadDeMejora}))
    dispatch(filtrarTitulosDeActividadDeOportundiadDeMejora({idOportunidadDeMejora}));

    }, [])
    
    const {filtrarActividades,filtroDeActiviadDeMejora,
      oportunidadDeMejora,
      TitulosDeActividadesDeOportunidadesDeMejora} = useSelector(state => state.planDeMejoramiento);

    useEffect(() => {
      setActividades(TitulosDeActividadesDeOportunidadesDeMejora)

 
    }, [TitulosDeActividadesDeOportunidadesDeMejora])

    const {CondicionesDeCalidad,setProgramas} = useSelector(state => state.planDeMejoramiento);

  
  const actualizarTituloDeOportunidadDeMejora = (event) => {
      event.preventDefault();

      if(OportunidadDeMejoraTitle !== undefined && actividades.length > 0){
        dispatch(actualizarOportunidadDeMejora({CondicionesDeCalidad,idPlanDeMejoramiento,
          idOportunidadDeMejora,idPrograma,setProgramas,OportunidadDeMejoraTitle}))
      }else if(OportunidadDeMejoraTitle !== undefined ){
        dispatch(actualizarOportunidadDeMejora({CondicionesDeCalidad,idPlanDeMejoramiento,
          idOportunidadDeMejora,idPrograma,setProgramas,OportunidadDeMejoraTitle}))
        dispatch(actualizarActividadeDeMejora({CondicionesDeCalidad,idPlanDeMejoramiento
          ,idOportunidadDeMejora,idPrograma,setProgramas,OportunidadDeMejoraTitle,newActivite}))
      }else if(actividades.length > 0) {
         dispatch(actualizarActividadeDeMejora({CondicionesDeCalidad,idPlanDeMejoramiento
           ,idOportunidadDeMejora,idPrograma,setProgramas,OportunidadDeMejoraTitle,newActivite}))
      }
      Navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/actividades`)
  }
  const actualizarActividadesDeOportunidadDeMejora = (event) => {
     event.preventDefault();
     setActividades([...actividades,tituloDeActividades]);
     setNewActivite([...newActivite,tituloDeActividades]);
  }

  const borrarOportunidadDeMejoras = () => {
    dispatch(borrarOportunidadDeMejora({idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora}))

    Navigate(`/homepage/${idPlanDeMejoramiento}/${idPrograma}`)
    
  }


  return (
    <div className='cuadrado'>

    <div className='cuadrado border border-1 border-start-0 border-end-0 border-bottom-0 border-dark p-4'>
    <h3 className='ms-5'>{oportunidadDeMejora.OportunidadDeMejoraTitle}</h3>
    <div className="d-flex flex-row-reverse">
            <button className="btn btn-outline-danger ms-5 mt-3 me-5" type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-trash"></i>
              <span>Borrar</span>
            </button>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Borrar</h1>
                </div>
                <div class="modal-body">
                  ¿Seguro que quieres borrar esta Oportunidad De Mejora?
                  <br />
                  Esta accion eliminara todo lo que contenga la oportunidad de mejora
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal" 
                    onClick={borrarOportunidadDeMejoras}
                  >Borrar</button>
                </div>
              </div>
            </div>
          </div>
    <div className="mb-3 ms-5">
  
    <form onSubmit={actualizarTituloDeOportunidadDeMejora}>
  <label className="form-label">Escriba su oportunidad de mejora identificada</label>
  <input type="text" 
      className="form-control"
      placeholder="Cambie su titulo de oportunidad de mejora"
      name="OportunidadDeMejoraTitle"
      value={OportunidadDeMejoraTitle}
      onChange={onInputChange}
    
  />
  
  <button
      className="btn btn-outline-primary btn-block boton-guardar" type='submit'
      
  >
      <i className="far fa-save"></i>
      <span> Actualizar </span>
  </button>
  </form>  

  <Link to={`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/actividades`}>
  <button className='btn btn-outline-danger btn-block boton-regresar mt-3'>
      Regresar
  </button> 
  </Link>

  <div className='border border-1 border-black mb-3 mt-4'>
    <h3 className='ms-3 text-center'>Actividades</h3>
       {/* <ol className=''>
         {
          filtrarActividades?.map(act => (
        <li className="">
           <button className="botonTitleItem mb-2"> 
                {act.tituloDeActividades}
           </button> 
        </li>
            
          ))
        }   
    </ol>    */}
    <ol className=''>
         {
          actividades?.map(act => (
        <li className="">
           <button className="botonTitleItem mb-2"> 
                {act}
           </button> 
        </li>
            
          ))
        }   
    </ol> 
    </div>
  <form  onSubmit={actualizarActividadesDeOportunidadDeMejora}>
  
    <input type="text" 
    placeholder='Escriba un punto de la lista'
    className="form-control mb-2"
    name="tituloDeActividades"
    value={tituloDeActividades}
    onChange={onInputChange}
    />
    <button type="submit" className='btn btn-outline-primary btn-block mt-2 mb-5'>Agregar</button>
  </form>
        <div className="mb-5 espacio"></div>
  </div>
</div>     
</div>
  )
}
