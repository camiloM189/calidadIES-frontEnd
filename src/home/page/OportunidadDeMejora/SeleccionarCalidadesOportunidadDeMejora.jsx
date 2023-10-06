import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { selectCondicionesDeCalidad } from '../../../store/programas/programaThunks';

export const SeleccionarCalidadesOportunidadDeMejora = () => {
  const dispatch = useDispatch();
  const {idPrograma,idPlanDeMejoramiento} = useParams();
  const navigate = useNavigate();


  const seleccionarCondiciones = (condiciones) => {
    dispatch(selectCondicionesDeCalidad({condiciones}))
    navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${condiciones}`)

  }
  return (
    <>

    <div class="container text-center mt-5 total-cuadros">
  <div class="row mt-5">

    <div class="col-4 mb-5 cuadros me-2" onClick={() => seleccionarCondiciones('Denominacion')}>
  
    <p className="p-3" >Denominacion</p>
 
    </div>
    <div class="col-4 cuadros  me-2" onClick={() => seleccionarCondiciones('Justificación Del Programa')}>
 
    <p className="p-3">Justificación del programa</p>

    </div>
    <div class="col-4 cuadros  me-2"  onClick={() => seleccionarCondiciones('Aspectos Curriculares')}>
   
     <p className="p-3">Aspectos curriculares</p>
   
    </div>
    <div class="col-4 mb-5 cuadros  me-2"  onClick={() => seleccionarCondiciones('Organización De Las ActividadesAcadémicas Y Proceso Formativo')}>
   
    <p className="p-2">Organización de las actividades académicas y proceso formativo</p>
  
    </div>
    <div class="col-4 cuadros me-2"  onClick={() => seleccionarCondiciones('Innovación')}>
   
    <p className="p-2">Investigación, innovación y/o creación artística y cultural</p>
    
    </div>
    <div class="col-4 cuadros me-2" onClick={() => seleccionarCondiciones('Relación Con El Sector Externo')}>
    
    <p className="p-3">Relación con el sector externo</p>
   
    </div>
    <div class="col-4 cuadros me-2" onClick={() => seleccionarCondiciones('Profesores')}>
   
    <p className="p-3">Profesores</p>
    
    </div>
    <div class="col-4 cuadros me-2" onClick={() => seleccionarCondiciones('Medios Educativos')}>
   
    <p className="p-3">Medios Educativos</p>
    
    </div>
    <div class="col-4 cuadros me-2" onClick={() => seleccionarCondiciones('Infraestructura Física')}>
   
    <p className="p-3" >Infraestructura Física</p>
    
    </div>
  </div>
  <Link to={`/homepage/${idPlanDeMejoramiento}/${idPrograma}`}>
  <button className='btn btn-outline-danger btn-block boton-back-evento'>
  Volver
</button> 
</Link>
</div>
    </>   
  )
}
