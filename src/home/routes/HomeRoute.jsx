import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Nabvar } from '../../ui/Nabvar'
import { TareaPage } from '../page/TareaPage'
import { ActualizarActiviteComponent } from '../components/ActualizarActiviteComponent'
import { CreateEventComponent } from '../components/CreateEventComponent'
import { SetEventComponent } from '../components/SetEventComponent'
import { CreateNotesComponent } from '../components/CreateNotesComponent'
import { NotNoteComponent } from '../components/NotNoteComponent'
import { EditMetas } from '../components/EditMetas'
import { CreateNewActiviteComponent } from '../components/CreateNewActiviteComponent'
import { CreateOpportunities } from '../page/CreateOpportunities'
// import { ProyeccionDeEventos } from '../page/ProyeccionDeEventos'
// import { EditarOportunidadDeMejora } from '../page/editarOportunidadDeMejora'

import { VerNotas } from '../page/VerNotas'
import { CrearNotes } from '../page/CrearNotes'
import { PruebaSetNotes } from '../page/PruebaSetNotes'


import { CrearActividades } from '../page/nuevaActividades/CrearActividades'


import { ProgramaPage } from '../page/Programa/ProgramaPage'
import { CrearPrograma } from '../page/Programa/CrearPrograma'
import { EditarPrograma } from '../page/Programa/EditarPrograma'
import { PlanDeMejoramiento } from '../page/PlanDeMejoramiento/PlanDeMejoramiento'
import { EditarPlanDeMejoramiento } from '../page/PlanDeMejoramiento/EditarPlanDeMejoramiento'
import { OportunidadDeMejora } from '../page/OportunidadDeMejora/OportunidadDeMejora'
import { SeleccionarCalidadesOportunidadDeMejora } from '../page/OportunidadDeMejora/SeleccionarCalidadesOportunidadDeMejora'
import { CrearOportunidadDeMejora } from '../page/OportunidadDeMejora/CrearOportunidadDeMejora'
import { CrearActividadesDeMejora } from '../page/ActividadesDeMejoramiento/CrearActividadesDeMejora'
import { EditarActividadesDeMejora } from '../page/ActividadesDeMejoramiento/EditarActividadesDeMejora'
import { EditarProyeccionDeEventos } from '../page/ProyeccionDeEventos/EditarProyeccionDeEventos'
import { ProyeccionDeEventos } from '../page/ProyeccionDeEventos/ProyeccionDeEventos'
import { EditarOportunidadDeMejora } from '../page/OportunidadDeMejora/EditarOportunidadDeMejora'



export const HomeRoute = () => {

  const location = useLocation()
  const activeTitle = location.pathname.split('/').pop()

  return (
    <>
        <Nabvar/>
        <Routes>
          
            <Route path='/homepage' element={<ProgramaPage/>}/>
            <Route path='/homepage/newPrograma' element={<CrearPrograma/>}/>
            <Route path='/homepage/edit' element={<EditarPrograma/>}/>

            <Route path='/homepage/:idPrograma/planDeMejoramiento' element={<PlanDeMejoramiento/>}/>

            <Route path='/homepage/:idPrograma/planDeMejoramiento/edit' element={<EditarPlanDeMejoramiento/>}/>

            <Route path='/homepage/:idPlanDeMejoramiento/:idPrograma' element={<OportunidadDeMejora/>}/>

            <Route path='/homepage/:idPlanDeMejoramiento/:idPrograma/edit' element={<EditarOportunidadDeMejora/>}/>

            <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/selectCondicionesDeCalidad' element={<SeleccionarCalidadesOportunidadDeMejora/>}/>
            
           <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:condicionDeCalidades' element={<CrearOportunidadDeMejora/>}/>
            
            <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:condicionDeCalidades/:idOportunidadDeMejora/actividades/nuevo' element={<CrearActividadesDeMejora/>}/>

            <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/actividades' element={<CrearActividades/>}/>

            <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/actividades/edit' element={<EditarActividadesDeMejora/>}/>

            {/* <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/:idActividadesDeMejora/nueva' element={<ProyeccionDeEventos/>}/> */}
          
            <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/:idActividadesDeMejora/nueva' element={<ProyeccionDeEventos/>}/>


            {/* <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/nueva' element={<CrearActividades/>}/> */}

            {/* <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/actividades/edit' element={<EditarOportunidadDeMejora/>}/> */}


            

            {/* <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/:idActividadesDeMejora' element={<ProyeccionDeEventos/>}/> */}

             <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/:idActividadesDeMejora/edit' element={<EditarProyeccionDeEventos/>}/> 



            <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/:idActividadesDeMejora/:idProyeccionDeEventos' element={<VerNotas/>}/>
            <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/:idActividadesDeMejora/:idProyeccionDeEventos/:idNotas' element={<PruebaSetNotes/>}/>
            <Route path='/homepage/:idPrograma/:idPlanDeMejoramiento/:idOportunidadDeMejora/:idActividadesDeMejora/:idProyeccionDeEventos/create' element={<CrearNotes/>}/>






            <Route path='/*' element={<Navigate to='/homepage'/>} /> 
            {/* <Route path='/homepage/:name' element={<TareaPage/>}/> */}
            <Route path='/homepage/:name' element={<CreateOpportunities/>}/>

            <Route path={`/homepage/actualizar/:name/:_id`} 
            element={<ActualizarActiviteComponent/>}/>
            <Route path={`/homepage/view/:name/:_id`} 
            element={<SetEventComponent/>}/>
            {/* <Route path={`/homepage/actualizar/:_id`} 
            element={<ActualizarActiviteComponent/>}/> */}
            <Route path='/homepage/:name/:pagina/:_id' element={<CreateEventComponent/>}/>
            <Route path='/homepage/:name/createNewActivitie' element={<CreateNewActiviteComponent/>}/> 

            <Route path='/homepage/:name/:pagina/:_id/edit' element={<EditMetas/>}/>

            {/* <Route path='/homepage/:name/:pagina/:_id/:id' element={<NotNoteComponent/>}/> */}
            <Route path='/homepage/:name/:pagina/:_id/:id/create' element={<CreateNotesComponent/>}/>
           
            
        </Routes>
    </>
  )
}
