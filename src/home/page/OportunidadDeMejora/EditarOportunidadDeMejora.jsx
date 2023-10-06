import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProgramasTitle, getProgramasTitleId, obtenerOportunidadDeMejoraPorId } from "../../../store/programas/programaThunks";
import {  vaciarOportunidadDeMejora } from "../../../store/programas/planDeMejoramientoSlice";
import {  changeborrarOportunidadDeMejora, vaciarActividadeDeMejora } from "../../../store/programas/oportunidadDeMejoraSlice";
import { useEffect } from "react";
import { ModalDeOporunidadDeMejora } from "./ModalDeOporunidadDeMejora";



export const EditarOportunidadDeMejora = () => {
    const dispatch = useDispatch();
    const {idPrograma,idPlanDeMejoramiento} = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        dispatch(getProgramasTitle());
        dispatch(getProgramasTitleId({idPrograma}));
        dispatch(obtenerOportunidadDeMejoraPorId({idPlanDeMejoramiento}));
        dispatch(vaciarOportunidadDeMejora());
        dispatch(vaciarActividadeDeMejora());

      }, [])
    const {setProgramas,obtenerOportunidadDeMejora} = useSelector(state => state.planDeMejoramiento);

    const {Denominacion,AspectosCurriculares,JustificaciónDelPrograma,
      OrganizaciónDeLasActividadesAcadémicasYProcesoFormativo,Innovación,RelaciónConElSectorExterno,
      Profesores,MediosEducativos,InfraestructuraFísica} = useSelector(state => state.calidadDeContenido)

      const {borrarOportunidadDeMejora} = useSelector(state => state.oportunidadDeMejoraSlice);
      


    

    const borrarUnaOportunidadDeMejora = (id) => {
    
        dispatch(changeborrarOportunidadDeMejora(id))
    }

   



  return (
    <>
   {(borrarOportunidadDeMejora) ? 
  <ModalDeOporunidadDeMejora/> :
  <></> 
  }
 


      <div className='container titulo-intento1 mt-2'>
 
 <h1 className="text-center text-dark mb-5">{setProgramas}</h1>
 </div>
 <div className='container cuadrado-oportunidades'>
   <div>
   <h5 className="ms-3 texto-oportunidades mb-3 text-dark">Oportunidades de Mejora</h5>
   </div>
    <div className='cuadro-oportunidades animate__animated animate__backInDown'>
   <div className='list-button'>

      <div className="accordion" id="accordionExample">
  <div className={`accordion-item ${(Denominacion === 0) ? 'd-none' : ''}`}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Denominacion 
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {Denominacion}
           </span>
    
      
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
  
      <ul >
        {
          obtenerOportunidadDeMejora?.map(active => (
          <li className={`${(active.calidadDeContenido === 'Denominacion') ? 'mb-1' : 'd-none'}`} >
            
              <button className="btn mb-2 listas-cuadrado text-light" > 
               {active.OportunidadDeMejoraTitle}
        
              </button>
              <div className="position-relative">     
              <button type="button" class="text-end botonboton borrarOportunidadDeMejora position-absolute translate-middle">
              <i className='bi bi-dash-circle text-danger fs-3' onClick={() => borrarUnaOportunidadDeMejora(active._id)} ></i>
              </button>
              </div> 
          </li>
          ))
        }
    </ul>
      </div>
    </div>
  </div>
  <div className={`accordion-item ${(JustificaciónDelPrograma === 0) ? 'd-none' : ''}`}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Justificación del programa
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {JustificaciónDelPrograma}
           </span>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul >
        {
          obtenerOportunidadDeMejora?.map(active => (
          <li className={`${(active.calidadDeContenido === 'Justificación Del Programa') ? 'mb-1' : 'd-none'}`} >
            
              <button className="btn mb-2 listas-cuadrado text-light" > 
               {active.OportunidadDeMejoraTitle}
  
              </button>
              <div className="position-relative">     
              <button type="button" class="text-end botonboton borrarOportunidadDeMejora position-absolute translate-middle">
              <i className='bi bi-dash-circle text-danger fs-3' onClick={() => borrarUnaOportunidadDeMejora(active._id)} ></i>
              </button>
              </div> 
          </li>
          ))
        }
    </ul>
      </div>
    </div>
  </div>
  <div className={`accordion-item ${(AspectosCurriculares === 0) ? 'd-none' : ''}`}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Aspectos curriculares
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {AspectosCurriculares}
           </span>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul >
        {
          obtenerOportunidadDeMejora?.map(active => (
          <li className={`${(active.calidadDeContenido === 'Aspectos Curriculares') ? 'mb-1' : 'd-none'}`} >
            
              <button className="btn mb-2 listas-cuadrado text-light"> 
               {active.OportunidadDeMejoraTitle}
       
              </button>
              <div className="position-relative">     
              <button type="button" class="text-end botonboton borrarOportunidadDeMejora position-absolute translate-middle">
              <i className='bi bi-dash-circle text-danger fs-3' onClick={() => borrarUnaOportunidadDeMejora(active._id)} ></i>
              </button>
              </div> 
          </li>
          ))
        }
    </ul>
      </div>
    </div>
  </div>
  <div className={`accordion-item ${(OrganizaciónDeLasActividadesAcadémicasYProcesoFormativo === 0) ? 'd-none' : ''}`}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
      Organización de las actividades académicas y proceso formativo
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {OrganizaciónDeLasActividadesAcadémicasYProcesoFormativo}
           </span>
      </button>
    </h2>
    <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul >
        {
          obtenerOportunidadDeMejora?.map(active => (
          <li className={`${(active.calidadDeContenido === 'Organización De Las ActividadesAcadémicas Y Proceso Formativo') ? 'mb-1' : 'd-none'}`} >
            
              <button className="btn mb-2 listas-cuadrado text-light"> 
               {active.OportunidadDeMejoraTitle}
        
              </button>
              <div className="position-relative">     
              <button type="button" class="text-end botonboton borrarOportunidadDeMejora position-absolute translate-middle">
              <i className='bi bi-dash-circle text-danger fs-3' onClick={() => borrarUnaOportunidadDeMejora(active._id)} ></i>
              </button>
              </div> 
          </li>
          ))
        }
    </ul>
      </div>
    </div>
  </div>
  <div className={`accordion-item ${(Innovación === 0) ? 'd-none' : ''}`}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
      Investigación, innovación y/o creación artística y cultural
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {Innovación}
           </span>
      </button>
    </h2>
    <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul >
        {
          obtenerOportunidadDeMejora?.map(active => (
          <li className={`${(active.calidadDeContenido === 'Innovación') ? 'mb-1' : 'd-none'}`} >
            
              <button className="btn mb-2 listas-cuadrado text-light"> 
               {active.OportunidadDeMejoraTitle}
      
              </button>
              <div className="position-relative">     
              <button type="button" class="text-end botonboton borrarOportunidadDeMejora position-absolute translate-middle">
              <i className='bi bi-dash-circle text-danger fs-3' onClick={() => borrarUnaOportunidadDeMejora(active._id)} ></i>
              </button>
              </div> 
          </li>
          ))
        }
    </ul>
      </div>
    </div>
  </div>
  <div className={`accordion-item ${(RelaciónConElSectorExterno === 0) ? 'd-none' : ''}`}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
      Relación con el sector externo
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {RelaciónConElSectorExterno}
           </span>
      </button>
    </h2>
    <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul >
        {
          obtenerOportunidadDeMejora?.map(active => (
          <li className={`${(active.calidadDeContenido === 'Relación Con El Sector Externo') ? 'mb-1' : 'd-none'}`} >
            
              <button className="btn mb-2 listas-cuadrado text-light"> 
               {active.OportunidadDeMejoraTitle}
              </button>
              <div className="position-relative">     
              <button type="button" class="text-end botonboton borrarOportunidadDeMejora position-absolute translate-middle">
              <i className='bi bi-dash-circle text-danger fs-3' onClick={() => borrarUnaOportunidadDeMejora(active._id)} ></i>
              </button>
              </div> 
          </li>
          ))
        }
    </ul>
      </div>
    </div>
  </div>
  <div className={`accordion-item ${(Profesores === 0) ? 'd-none' : ''}`}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
      Profesores
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {Profesores}
           </span>
      </button>
    </h2>
    <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul >
        {
          obtenerOportunidadDeMejora?.map(active => (
          <li className={`${(active.calidadDeContenido === 'Profesores') ? 'mb-1' : 'd-none'}`} >
            
              <button className="btn mb-2 listas-cuadrado text-light" onClick={() => (active._id)}> 
               {active.OportunidadDeMejoraTitle}

              </button>
              <div className="position-relative">     
              <button type="button" class="text-end botonboton borrarOportunidadDeMejora position-absolute translate-middle">
              <i className='bi bi-dash-circle text-danger fs-3' onClick={() => borrarUnaOportunidadDeMejora(active._id)} ></i>
              </button>
              </div> 
          </li>
          ))
        }
    </ul>
      </div>
    </div>
  </div>
  <div className={`accordion-item ${(MediosEducativos === 0) ? 'd-none' : ''}`}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
      Medios Educativos
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {MediosEducativos}
           </span>
      </button>
    </h2>
    <div id="collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul >
        {
          obtenerOportunidadDeMejora?.map(active => (
          <li className={`${(active.calidadDeContenido === 'Medios Educativos') ? 'mb-1' : 'd-none'}`} >
            
              <button className="btn mb-2 listas-cuadrado text-light" > 
               {active.OportunidadDeMejoraTitle}
       
              </button>
              <div className="position-relative">     
              <button type="button" class="text-end botonboton borrarOportunidadDeMejora position-absolute translate-middle">
              <i className='bi bi-dash-circle text-danger fs-3' onClick={() => borrarUnaOportunidadDeMejora(active._id)} ></i>
              </button>
              </div> 
          </li>
          ))
        }
    </ul>
      </div>
    </div>
  </div>
  <div className={`accordion-item ${(InfraestructuraFísica === 0) ? 'd-none' : ''}`}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
      Infraestructura Física
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {InfraestructuraFísica}
           </span>
      </button>
    </h2>
    <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul >
        {
          obtenerOportunidadDeMejora?.map(active => (
          <li className={`${(active.calidadDeContenido === 'Infraestructura Física') ? 'mb-1' : 'd-none'}`} >
            
              <button className="btn mb-2 listas-cuadrado text-light"> 
               {active.OportunidadDeMejoraTitle}
    
              </button>
              <div className="position-relative">     
              <button type="button" class="text-end botonboton borrarOportunidadDeMejora position-absolute translate-middle">
              <i className='bi bi-dash-circle text-danger fs-3' onClick={() => borrarUnaOportunidadDeMejora(active._id)} ></i>
              </button>
              </div> 
          </li>
          ))
        }
    </ul>
      </div>
    </div>
  </div>
</div>
</div>
</div>

 







     <Link to={`/homepage/${idPlanDeMejoramiento}/${idPrograma}`}>
     <button className="btn btn-outline-danger btn-block boton-back">volver</button>
     </Link>
 
      
 </div>
 {/* <ModalDeOporunidadDeMejora/> */}
 {/* <div class="modal" tabindex="2">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">aaa</button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
   </>
  )
}
