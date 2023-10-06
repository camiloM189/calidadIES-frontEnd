import { Link } from "react-router-dom";
import calidadiesApi from "../../api/calidadiesApi";
import { Prueba } from "../../home/page/components/Prueba";
import { IdActividadesDeMejora, IdOportunidadDeMejora, getTituloDeActividadesDeMejora, getYear, getidActividades, pushactividadesDeMejora } from "./oportunidadDeMejoraSlice";



export const crearOportunidadaDeMejoraNueva = ({condicionDeCalidades,idPlanDeMejoramiento,idPrograma,programa,OportunidadDeMejoraTitle}) =>{
    return async(dispatch,getState) => {
        const start = new Date().getFullYear()
        const {data} = await calidadiesApi.post(`/program/crearOportunidadDeMejora`,{calidadDeContenido:condicionDeCalidades,idPlanDeMejoramiento,idPrograma,programa,OportunidadDeMejoraTitle,start});
        const {oportunidadesDeMejora} = data;
        dispatch(getTituloDeActividadesDeMejora(oportunidadesDeMejora.OportunidadDeMejoraTitle))
        const {_id} = oportunidadesDeMejora;
        dispatch(IdOportunidadDeMejora(_id))
    }
}
export const crearActividadDeMejoraNueva = ({condicionDeCalidades,idPlanDeMejoramiento,idPrograma,actividades,idOportunidadDeMejora}) => {
    return async(dispatch,getState) => {
        const start = new Date().getFullYear()
        const {data} = await calidadiesApi.post(`/program/crearActividadesDeMejora`,{
            idOportunidadDeMejora,calidadDeContenido:condicionDeCalidades,idPrograma,idPlanDeMejoramiento,tituloDeActividades:actividades,start});

        const {crearActividadesDeMejora} = data;
        const {_id} = crearActividadesDeMejora;

        dispatch(getidActividades(_id))

        dispatch(filtrarActividadesDeMejora({idOportunidadDeMejora,condicionDeCalidades,idPlanDeMejoramiento,idPrograma,}))
    
    }
}
export const filtrarActividadesDeMejora = ({condicionDeCalidades,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora}) => {
    return async(dispatch,getState) => {
      
        const {data} = await calidadiesApi.post(`/program/obtenerActividadesDeMejora`,{idOportunidadDeMejora});
        const {obtenerActiviades} = data;
     
        dispatch(pushactividadesDeMejora(obtenerActiviades))

  }
}