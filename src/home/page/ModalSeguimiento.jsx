import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onchangeSeguimiento } from '../../store/programas/oportunidadDeMejoraSlice';
import { useForm } from '../../hook/useForm';
import { useNavigate, useParams } from 'react-router-dom';
import { crearNotas } from '../../store/programas/programaThunks';
import Swal from 'sweetalert2';

export const ModalSeguimiento = ({arraysFiles}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos} = useParams();

    const {proyeccionDeEventos,errorMessage,oportunidadDeMejora} 
    = useSelector(state => state.planDeMejoramiento);

    const {seguimientoTitulo,descripcion,start,mes,dia} 
    = useSelector(state => state.seguimientoSlice);
    const yearOportunidadDeMejora = oportunidadDeMejora.start
    const {seguimiento,onInputChange} = useForm(0);
    const {yearSeguimiento,onInputChange:yearChange} = useForm(yearOportunidadDeMejora);


  const SubmitSeguimiento = (event) => {
      event.preventDefault();
 
      if(yearSeguimiento === undefined){
        dispatch(crearNotas({titulosDeNotas:seguimientoTitulo,bodyDeNotas:descripcion,idPrograma
          ,idPlanDeMejoramiento,idOportunidadDeMejora,idActividadesDeMejora,
          idProyeccionDeEventos,arraysFiles,start,mes,dia,seguimiento,yearSeguimiento:oportunidadDeMejora.start}))
          navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}/${idProyeccionDeEventos}`)
          Swal.fire('La nota se ha creado con exito',errorMessage,'success');
          dispatch(onchangeSeguimiento());
      }else{
        dispatch(crearNotas({titulosDeNotas:seguimientoTitulo,bodyDeNotas:descripcion,idPrograma
          ,idPlanDeMejoramiento,idOportunidadDeMejora,idActividadesDeMejora,
          idProyeccionDeEventos,arraysFiles,start,mes,dia,seguimiento,yearSeguimiento}))
          navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}/${idProyeccionDeEventos}`)
          Swal.fire('La nota se ha creado con exito',errorMessage,'success')
          dispatch(onchangeSeguimiento());

      }
     
 
  }


  const volver = () => {
    dispatch(onchangeSeguimiento())
  }


  return (
    <>
    
    <div  className="modal-oportunidadDeMejora">
    
        <div className="modal-content2 text-center ">
             <span id="closeModal" className="close-modal2">&times;</span> 
             <h1 class="modal-title text-start fs-5" >Seguimiento</h1>
             <hr />
             <p>¿Cuanto fue el numero/porcentaje de avance en su accion?</p>
             <span></span>
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
      <th></th> 
      </tr>
    </thead>
    <tbody>
        {
         proyeccionDeEventos?.map(event => (
            <>
           <tr className=" border-dark">
           <th className={`bg-success text-light`}><button className={`
             botonCuadroItem bg-success text-light`} onClick={() => entrarEnNotas(event._id)}>{event.indicador}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></button></th>
           <th className={`${(event.notasFecha1 >= event.fecha1) ? 'bg-success text-light' : ' '}`}>{event.fecha1}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.notasFecha2 >= event.fecha2) ? 'bg-success text-light' : ' '}`}>{event.fecha2}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.notasFecha3 >= event.fecha3) ? 'bg-success text-light' : ' '}`}>{event.fecha3}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.notasFecha4 >= event.fecha4) ? 'bg-success text-light' : ' '}`}>{event.fecha4}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.notasFecha5 >= event.fecha5) ? 'bg-success text-light' : ' '}`}>{event.fecha5}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.notasFecha6 >= event.fecha6) ? 'bg-success text-light' : ' '}`}>{event.fecha6}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.notasFecha7 >= event.fecha7) ? 'bg-success text-light' : ' '}`}>{event.fecha7}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`bg-success text-light`}></th>
           </tr>
           
      
           <tr className='border-dark'>
           <th ><button className={`
             botonCuadroItem `}>Seguimiento</button></th>
           <th className={`${(event.notasFecha1 >= event.fecha1) ? 'bg-success text-light' : ' '}`}>{event.notasFecha1}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.notasFecha2}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.notasFecha3}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.notasFecha4}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.notasFecha5}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.notasFecha6}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th className={`${(event.totalDeProyecciones === event.totalDeNotas) ? 'bg-success text-light' : ' '}`}>{event.notasFecha7}<i className={`${(event.porcentajes === 'si' ? '' : 'd-none')}`}>%</i></th>
           <th></th>
           </tr>
           </>
         ))
        }  
    </tbody>
  </table> 
  <div className='mb-4 me-2 row'>
    <form onSubmit={SubmitSeguimiento}>
        <label htmlFor="" className='me-2'>Año</label>
    <input type="number"  
    min={oportunidadDeMejora.start}
      max={oportunidadDeMejora.start + 6} 
      className='form col-4 me-2'
      value={yearSeguimiento}
      onChange={yearChange}
      name='yearSeguimiento'
      placeholder={oportunidadDeMejora.start}
      />
    <label htmlFor="" className='me-2' >Seguimiento</label>
    <input type="number" 
    className='form col-4' 
    value={seguimiento}
    onChange={onInputChange}
    name='seguimiento'
    
    />
    
    <div className='mt-5 ms-3'>
      <button className='btn btn-secondary me-3' onClick={volver}>Cerrar</button>
      <button type='submit' className='btn btn-primary'>Añadir Seguimiento</button>
              </div>
    </form>

  </div>
  
  </div>


              
        
      </div>
       
    </div>
   
</>
  )
}
