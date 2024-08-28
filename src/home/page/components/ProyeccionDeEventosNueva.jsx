import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export const ProyeccionDeEventosNueva = ({OportunidadDeMejoraTitle,actividades}) => {
  
  const {IdOportunidadDeMejora,year,IdActividadesDeMejora} = useSelector(state => state.oportunidadDeMejoraSlice);

      console.log(year);
  
    

  return (
    <>
    
     <button className="btn btn-outline-danger ms-5 editatMetas " type="button"
  data-bs-toggle="modal"data-bs-target="#exampleModal">
    <span>Editar</span>
  </button>
    <div className=" container tabla-margin">
        {/* <h1>{filtroDeActiviadDeMejora.tituloDeActividades}</h1> */}
      <div className="table-responsive">
  <table className="table table-bordered table-striped table-query table-bg custom-table">
    <thead className="table-dark ">
      <tr>
      <th>Indicador</th>
      <th>{year}</th>
      <th>{year + 1}</th>
      <th>{year + 2}</th>
      <th>{year + 3}</th>
      <th>{year + 4}</th>
      <th>{year + 5}</th>
      <th>{year + 6}</th>  
      </tr>
    </thead>
    <tbody>
        {/* {
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
        }   */}
    </tbody>
  </table>
  </div>
</div>

  <h2 className="text-center">Proyeccion de Eventos</h2>
  
<button type="button" class="btn btn-dark boton-posicion" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  +
</button>

<form >
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
  
<input type="text" class="form-control" placeholder="Indicador" aria-label="Username" aria-describedby="basic-addon1"/>





</div>
<p className="text-center">Metas Anuales</p>


<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">{year}</span>
  <input type="number" class="form-control" placeholder='Fecha 1' aria-label="Username"/>
  <span class="input-group-text">{year + 1}</span>
  <input type="number" class="form-control" placeholder='Fecha 2' aria-label="Server"/>
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">{year + 2}</span>
  <input type="number" class="form-control"  placeholder='Fecha 3' aria-label="Username"/>
  <span class="input-group-text">{year + 3}</span>
  <input type="number" class="form-control" placeholder='Fecha 4' aria-label="Server"/>
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">{year + 4}</span>
  <input type="number" class="form-control"  placeholder='Fecha 5' aria-label="Username"/>
  <span class="input-group-text">{year + 5}</span>
  <input type="number" class="form-control"  placeholder='Fecha 6' aria-label="Server"/>
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">{year + 6}</span>
  <input type="number" class="form-control"  placeholder='Fecha 7' aria-label="Username"/>
</div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit"  class="btn btn-primary">Crear</button>
      </div>
    </div>
  </div>
</div>
</form>
  {/* <Link to={`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/actividades`}> */}
  <button className="btn btn-outline-danger btn-block boton-back-evento" >Volver</button>
  {/* </Link> */}
 

  </>
  )
}
