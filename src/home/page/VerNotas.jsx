import { Link, useNavigate, useParams } from "react-router-dom"
import { WindowNotes } from "./WindowNotes";
import { useDispatch, useSelector } from "react-redux";
import { SetActive } from "./SetActive";
import { borrarProyeccionDeEventos, obtenerLaFechaDeOportunidadDeMejora, obtenerOportunidadDeMejoraPorId } from "../../store/programas/programaThunks";
import { useEffect } from "react";



export const VerNotas = () => {
    const dispatch = useDispatch();
    const {idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos} = useParams();
    const {active} = useSelector(state => state.planDeMejoramiento);
    const navigate = useNavigate();

    useEffect(() => {

      dispatch(obtenerLaFechaDeOportunidadDeMejora({idPlanDeMejoramiento}));

      
    }, [])
    

  const volverDeNote = () => {
    navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}/nueva`)
  }

  const borrarLaProyeccionDeEventos = () => {
 
      dispatch(borrarProyeccionDeEventos({idProyeccionDeEventos}))
      navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}`)

  } 



  return (
    <>
        <WindowNotes/>
        {
          (active) ?
            <SetActive/>
          :
          <div className='noNote'>
          <h1 className="text-light text-center center-text"></h1>
        <h3 className="text-light text-center center-text">Crea un seguimiento</h3>
  
        <Link to={`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}/${idProyeccionDeEventos}/create`}>
        <button className={`btn btn-dark boton-posicion`}>+</button>
        </Link>
        
        <button className="btn btn-outline-danger btn-block boton-regresar-notes" onClick={volverDeNote}>Volver</button>

        


        </div>
        




        }
      
    
   
    </>
  )
}
