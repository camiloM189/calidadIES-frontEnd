import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hook/useForm";
import { ActiveProyeccionDeEventos, falseActividadesDeMejora, falseProyeccionDeEventos, getTituloDeActividadesDeMejora, oportunidadDeMejoraSlice } from "../../../store/programas/oportunidadDeMejoraSlice";
import { useEffect, useState } from "react";

import { crearActividadDeMejoraNueva, filtrarActividadesDeMejora } from "../../../store/programas/OportunidadDeMejoraThunks";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiltrarUnaOportunidadDeMejora, filtrarActividadesDeOportunidadDeMejora, getProgramasTitle, getProgramasTitleId, obtenerOportunidadDeMejoraPorId } from "../../../store/programas/programaThunks";
import { vaciarLosTitulosDeActividadesDeOportunidadesDeMejora } from "../../../store/programas/planDeMejoramientoSlice";
import Swal from "sweetalert2";

export const CrearActividades = () => {

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


  const {actividadesDeMejora,proyeccionDeEventos,idActividades,TituloDeActividadesDeMejora} = useSelector(state => state.oportunidadDeMejoraSlice);

  const {oportunidadDeMejora,filtrarActividades,errorMessage} = useSelector(state => state.planDeMejoramiento);
  
  
  const volver = () => {
     navigate(``)
  }
  const agregarActividades = (event) => {
    event.preventDefault()
    setActividadesOportunidadDeMejora([...actividadesOportunidadDeMejora,actividades]);

    dispatch(crearActividadDeMejoraNueva({condicionDeCalidades,idPlanDeMejoramiento,idPrograma,actividades,idOportunidadDeMejora}))
    onResetForm();
    Swal.fire('La actividad de mejora se ha creado con exito',errorMessage,'success')
    
    
}

  const seguimiento = () => {

    navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividades}/nueva`)

  }
  

  const nextProyeccionDeEventos = (idActividades) => {
    navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividades}/nueva`)
  
  }
  const editarOportunidadDeMejora = () => {
    navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/actividades/edit`)

  }




return (
  <>
    
       
  <div className='container '>
 
  <div className='position-relative top-0 end-0 mt-3 me-3' >
<button className='btn btn-outline-danger btn-block ' onClick={editarOportunidadDeMejora}>Editar</button>
</div>
<h3 className='ms-5 mt-2 text-center'>{oportunidadDeMejora.OportunidadDeMejoraTitle}</h3>

  <div className='border border-1 border-black mb-3 mt-4 me-2 ms-1 animate__animated animate__backInDown'>
  <h3 className='ms-3 text-center'>Actividades</h3>
  
     <ol className=''>
       {
        actividadesDeMejora?.map(act => (
      <li className="">
         <button className={`botonItem mb-2`} onClick={() => nextProyeccionDeEventos(act._id)}> 
          {act.tituloDeActividades}
         </button> 
         <div class="d-grid gap-2">      
        </div>
    
      </li>
          
        ))
      }    
  </ol>  
   
  </div>
  <div className="mb-3 ms-2 me-2">
  
    <form class="row g-3" onSubmit={agregarActividades}>
    <div class="col-12 col-md-10">
 
      <input type="text" 
        className="form-control"
        placeholder="ingrese su oportunidad de mejora"
        name="actividades"
        value={actividades || ''}
        onChange={onInputChange}
      
        />
       
    </div>
    <div class="col-md-2 col-12">
      <button type="submit" data-bs-toggle="modal"
        data-bs-target="#exampleModal" class={`btn btn-outline-primary mb-3`}>Agregar</button>
     
    </div> 
  </form>
  <Link to={`/homepage/${idPlanDeMejoramiento}/${idPrograma}`}>
    <button className='btn btn-outline-danger btn-block boton-back-evento'>
        Volver
    </button> 
    </Link>
  
    </div>

</div>



</>
)
}


