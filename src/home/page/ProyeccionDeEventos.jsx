import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiltrarUnaOportunidadDeMejora, filtrarUnaActividadDeOportunidadDeMejora, getProgramasTitle, getProgramasTitleId, obtenerOportunidadDeMejoraPorId, obtenerProyeccionDeEventos, startCrearPoryeccionDeEventos } from "../../store/programas/programaThunks";
import { useEffect } from "react";
import { useForm } from "../../hook/useForm";
import { WindowNotes } from "./WindowNotes";
import { clearNotas } from "../../store/programas/planDeMejoramientoSlice";



export const ProyeccionDeEventos = () => {
    const dispatch = useDispatch();
    const {idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora,idActividadesDeMejora} = useParams();
    let {onInputChange,indicador,fecha1,fecha2,fecha3,fecha4,
        fecha5,fecha6,fecha7,onResetForm
      } = useForm('');
  const [porcentaje, setPorcentaje] = useState(null);
      
  
    const Navigate = useNavigate();
    useEffect(() => {
        dispatch(clearNotas());
        dispatch(getProgramasTitleId({idPrograma}));
        dispatch(getProgramasTitle());
        dispatch(getProgramasTitleId({idPrograma}));
        dispatch(obtenerOportunidadDeMejoraPorId({idPlanDeMejoramiento}));
        dispatch(FiltrarUnaOportunidadDeMejora({idPlanDeMejoramiento,idOportunidadDeMejora}))
        dispatch(filtrarUnaActividadDeOportunidadDeMejora({idOportunidadDeMejora,idActividadesDeMejora}))
        dispatch(obtenerProyeccionDeEventos({idActividadesDeMejora}))
        }, [])

    const {filtroDeActiviadDeMejora,proyeccionDeEventos,setProgramas,nombreDeLaActividadDeMejoramiento,oportunidadDeMejora} = useSelector(state => state.planDeMejoramiento);
       
    const createProyeccionDeEventos = (event) => {
        event.preventDefault();
        


      if(indicador.length === 0)return;
      if(fecha1 === undefined) {
        fecha1 = 0
      }
      if(fecha2 === undefined) {
          fecha2 = 0
      };
      if(fecha3 === undefined) {
          fecha3 = 0
      };
      if(fecha4 === undefined) {
        fecha4 = 0
      };
      if(fecha5 === undefined) {
      fecha5 = 0
      };
      if(fecha6 === undefined) {
        fecha6 = 0
      };
      if(fecha7 === undefined) {
        fecha7 = 0
      };
        

      dispatch(startCrearPoryeccionDeEventos({idPlanDeMejoramiento,idOportunidadDeMejora,
        idActividadesDeMejora,idPrograma,programa:setProgramas,indicador,
        fecha1,fecha2,fecha3,fecha4,fecha5,fecha6,fecha7,tituloDeActividades:nombreDeLaActividadDeMejoramiento
      }))
        
    }

    const entrarEnNotas = (event) => {
      Navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}/${event}`)

    }
    const editarProyeccionDeEventos = () => {
      Navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}/edit`)

    }


  return (
    <>
    
     <button className="btn btn-outline-danger ms-5 editatMetas " type="button"
  data-bs-toggle="modal"data-bs-target="#exampleModal" onClick={editarProyeccionDeEventos}>
    <span>Editar</span>
  </button>
    <div className=" container tabla-margin ">
        <h1>{filtroDeActiviadDeMejora.tituloDeActividades}</h1>
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
      </tr>
    </thead>
    <tbody>
        {
         proyeccionDeEventos?.map(event => (
           <tr className=" border-dark">
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 
            'bg-success text-light' : 'boton-next'}`}><button className={`
             botonCuadroItem ${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : 'boton-next text-light'}`} onClick={() => entrarEnNotas(event._id)}>{event.indicador}</button></th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.fecha1}</th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.fecha2}</th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.fecha3}</th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.fecha4}</th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.fecha5}</th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.fecha6}</th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.fecha7}</th>
           </tr>
         ))
        }  
    </tbody>
  </table>
  </div>
</div>

  <h2 className="text-center">Proyeccion de Eventos</h2>

 

<button type="button" class="btn btn-dark boton-posicion" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  +
</button>

<form onSubmit={createProyeccionDeEventos}>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Proyeccion De Eventos</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="input-group mb-3">
          
  <span class="input-group-text" id="basic-addon1">Indicador</span>
  
<input type="text" class="form-control" 
placeholder="Indicador" aria-label="Username"
 aria-describedby="basic-addon1"
 value={indicador || ''}
 name="indicador"
 onChange={onInputChange}
 />





</div>
<p className="text-center">Metas Anuales</p>

<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">{oportunidadDeMejora.start}</span>
  <input type="number" 
  class="form-control"
   placeholder='Fecha 1'
   value={fecha1 || ''}
   name="fecha1"
   onChange={onInputChange}
   

    />
  <span class="input-group-text">{oportunidadDeMejora.start + 1}</span>
  <input type="number"
   class="form-control" 
   placeholder='Fecha 2'
    aria-label="Server"
    value={fecha2 || ''}
    name="fecha2"
    onChange={onInputChange}
    />
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">{oportunidadDeMejora.start + 2}</span>
  <input type="number"
   class="form-control"  
   placeholder='Fecha 3' 
   aria-label="Username"
   value={fecha3 || ''}
    name="fecha3"
    onChange={onInputChange}

   />
  <span class="input-group-text">{oportunidadDeMejora.start + 3}</span>
  <input type="number"
   class="form-control"
    placeholder='Fecha 4' 
    aria-label="Server"
    value={fecha4 || ''}
    name="fecha4"
    onChange={onInputChange}

    />
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">{oportunidadDeMejora.start + 4}</span>
  <input type="number" 
  class="form-control" 
   placeholder='Fecha 5'
    aria-label="Username"
    value={fecha5 || ''}
    name="fecha5"
    onChange={onInputChange}
    />

  <span class="input-group-text">{oportunidadDeMejora.start + 5}</span>
  <input type="number"
   class="form-control" 
    placeholder='Fecha 6'
     aria-label="Server"
     value={fecha6|| ''}
     name="fecha6"
     onChange={onInputChange}
     />

</div>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">{oportunidadDeMejora.start + 6}</span>
  <input type="number"
   class="form-control" 
    placeholder='Fecha 7' 
    aria-label="Username"
    value={fecha7 || ''}
    name="fecha7"
    onChange={onInputChange}
    
    />
</div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit"  class="btn btn-primary" data-bs-dismiss="modal">Crear</button>
      </div>
    </div>
  </div>
</div>
</form>



  <Link to={`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/actividades`}>
  <button className="btn btn-outline-danger btn-block boton-back-evento" >Volver</button>
  </Link>
 

  </>
  )
}
