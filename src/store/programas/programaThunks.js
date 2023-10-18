// import { file } from "googleapis/build/src/apis/file";
import calidadiesApi from "../../api/calidadiesApi";
import { startObtenerIdUniversidad } from "../auth/authThunks";
import { filtrarActividadesDeMejora } from "./OportunidadDeMejoraThunks";
import { obtenerIdUniversidades, obtenerUniversidades, obtenerUsuarios } from "./UniversidadesSlice";
import { getAspectosCurriculares, getDenominacion, getInfraestructuraFísica, getInnovación, getJustificaciónDelPrograma, getMediosEducativos, getOrganizaciónDeLasActividadesAcadémicasYProcesoFormativo, getProfesores, getRelaciónConElSectorExterno } from "./calidadDeContenido";
import {ObtenerTitulosDeActividadesDeOportunidadDeMejora, ProyeccionDeEventos, agragarOportunidadDeMejora, crearPoryeccionDeEventos, crearProgramas, createPlanDeMejoramiento, filtradoUnaOportunidadDeMejora, filtrarActividadDeMejora, filtrarActividades, getOportunidadDeMejoras, getPlanDeMejoramiento, getProgramas, getProgramasFiltrado, nombreDeLaActividadDeMejoramiento, seleccionarCondicionesDeCalidad,OnObtenerNotas, setNoteActive, closeNote, obtenerFiles, vaciarFiles, vaciarActividadesDeMejoramiento } from "./planDeMejoramientoSlice";




export const startBorrarUsuarios = ({_id}) => {
    return async(dispatch,getState) => {
       
         await calidadiesApi.post(`/program/borrarUsuarios`,{_id});

        dispatch(obtenerTodosLosUsuarios())


    }
}
export const obtenerTodosLosUsuarios = () => {
    return async(dispatch,getState) => {
       
       const {data} = await calidadiesApi.post(`/program/obtenerUsuarios`);
       const {Usuarios} = data;

        dispatch(obtenerUsuarios(Usuarios));
        


    }
}
export const obtenerTodasLasUniversidades = () => {
    return async(dispatch,getState) => {
       
       const {data} = await calidadiesApi.post(`/program/obtenerTodasUniversidades`);
       const {Universidad} = data;

        dispatch(obtenerUniversidades(Universidad));
        


    }
}
export const EnviarcodigoUniversidadId = ({idUniversidad,uid}) => {
    return async(dispatch,getState) => {


        await calidadiesApi.post(`/program/agregarUsuarioUniversidad`,{uidUsuario:uid,idUniversidad});

        dispatch(startObtenerIdUniversidad({uid}));
      
        
        

    }

}
export const getProgramasTitle = () => {
    return async(dispatch,getState) => {
    const {idUniversidad } = await getState().auth;


        const {data} = await calidadiesApi.post(`/program/programas`,{idUniversidad});
        const {programa} = data;
        dispatch(getProgramas(programa))
        
    }
}
export const getProgramasTitleId = ({idPrograma}) => {
    return async(dispatch,getState) => {
    const {idUniversidad } = await getState().auth;
        const {data} = await calidadiesApi.post(`/program/programas`,{idUniversidad});
        const {programa} = data;
      
        const programaFiltrado = programa.filter(program => program._id === idPrograma);
  
        if(programaFiltrado.length > 0){
            const [{Programa:name}] = programaFiltrado;
            dispatch(getProgramasFiltrado(name));
        }
        



    }
}
export const createPrograma = ({programa}) => {
    return async(dispatch,getState) => {
    const { name,uid,idUniversidad } = await getState().auth;
    const {data} = await calidadiesApi.post(`/program/crear`,{Programa:programa,usuario:name,uidUsuario:uid,idUniversidad:idUniversidad});
    dispatch(getProgramasTitle())

    }
}
export const borrarPrograma = ({idPrograma}) => {
    return async(dispatch,getState) => {
       const {data} = await calidadiesApi.post(`/program/obtenerFilesIdPrograma`,{idPrograma});
       const {obtenerFiles} = data;
   
       if(obtenerFiles.length > 0){
       for (let i = 0; i < obtenerFiles.length; i++) {
         

            const {public_id} = obtenerFiles[i]

           const {data} = await calidadiesApi.post(`/program/delete/borrarFileDeCloudinary`,{public_id});
           
        }
      }
      await calidadiesApi.delete(`/program/delete/${idPrograma}`);
      dispatch(getProgramasTitle());

    }
}
export const selectCondicionesDeCalidad = ({condiciones}) => {
    return async(dispatch,getState) => {
           dispatch(seleccionarCondicionesDeCalidad(condiciones))
    }
}
export const crearPlanDeMejoramiento = ({idPrograma,setProgramas}) => {
    return async(dispatch,getState) => {
        const start = new Date().getFullYear()
        const tituloDelPlan = `Plan de mejoramiento ${setProgramas} ${start}`
        const {data} = await calidadiesApi.post(`/program/crearPlanDeMejoramiento`,{start:start,
            idPrograma:idPrograma,tituloDePlanDeMejoramiento:tituloDelPlan});
        const {planDeMejoramiento} = data;
 
        dispatch(createPlanDeMejoramiento(planDeMejoramiento)) 
    }
}
export const obtenerPlanDeMejoramiento = ({idPrograma}) =>{
    return async(dispatch,getState) => {
    const {data} = await calidadiesApi.post(`/program/obtenerPLanDeMejoramiento`,{idPrograma:idPrograma});
    const {obtenerPlanDeMejoramiento} = data;
      
    dispatch(getPlanDeMejoramiento(obtenerPlanDeMejoramiento))


    }
}

export const obtenerOportunidadDeMejoraPorId = ({idPlanDeMejoramiento}) => {
    return async(dispatch,getState) => {
        const {data} = await calidadiesApi.post(`/program/obtenerOportunidadDeMejoraPorId`,{idPlanDeMejoramiento});
        const {obtenerOportunidadDeMejoraPorId} = data;

        const Denominacion = obtenerOportunidadDeMejoraPorId.filter((Oportunidad) => Oportunidad.calidadDeContenido === 'Denominacion')
        const AspectosCurriculares = obtenerOportunidadDeMejoraPorId.filter((Oportunidad) => Oportunidad.calidadDeContenido === 'Aspectos Curriculares')
        const JustificaciónDelPrograma = obtenerOportunidadDeMejoraPorId.filter((Oportunidad) => Oportunidad.calidadDeContenido === 'Justificación Del Programa')



        const OrganizaciónDeLasActividadesAcadémicasYProcesoFormativo = obtenerOportunidadDeMejoraPorId.filter((Oportunidad) => Oportunidad.calidadDeContenido === 'Organización De Las ActividadesAcadémicas Y Proceso Formativo')
        const Innovación = obtenerOportunidadDeMejoraPorId.filter((Oportunidad) => Oportunidad.calidadDeContenido === 'Innovación')
        const RelaciónConElSectorExterno = obtenerOportunidadDeMejoraPorId.filter((Oportunidad) => Oportunidad.calidadDeContenido === 'Relación Con El Sector Externo')
        const Profesores = obtenerOportunidadDeMejoraPorId.filter((Oportunidad) => Oportunidad.calidadDeContenido === 'Profesores')
        const MediosEducativos = obtenerOportunidadDeMejoraPorId.filter((Oportunidad) => Oportunidad.calidadDeContenido === 'Medios Educativos')
        const InfraestructuraFísica = obtenerOportunidadDeMejoraPorId.filter((Oportunidad) => Oportunidad.calidadDeContenido === 'Infraestructura Física')

        dispatch(getDenominacion(Denominacion.length))
        dispatch(getAspectosCurriculares(AspectosCurriculares.length))
       

        if(JustificaciónDelPrograma.length >= 1){
            dispatch(getJustificaciónDelPrograma(JustificaciónDelPrograma.length))
        }
        
        dispatch(getOrganizaciónDeLasActividadesAcadémicasYProcesoFormativo(OrganizaciónDeLasActividadesAcadémicasYProcesoFormativo.length))
        dispatch(getInnovación(Innovación.length))
        dispatch(getRelaciónConElSectorExterno(RelaciónConElSectorExterno.length))
        dispatch(getProfesores(Profesores.length))
        dispatch(getMediosEducativos(MediosEducativos.length))
        dispatch(getInfraestructuraFísica(InfraestructuraFísica.length))
       


        dispatch(getOportunidadDeMejoras(obtenerOportunidadDeMejoraPorId))
    }
}
export const borrarPlanesDeMejoramiento = ({idPlanDeMejoramiento,idPrograma}) => {
    return async(dispatch,getState) => {

        const {data} = await calidadiesApi.delete(`/program/delete/${idPrograma}/${idPlanDeMejoramiento}`);
        

       const {data:datos} = await calidadiesApi.post(`/program/obtenerFilesIdPlanDeMejoramiento`,{idPlanDeMejoramiento});
        const {obtenerFiles} = datos;

        for (let i = 0; i < obtenerFiles.length; i++) {
            const {public_id} = obtenerFiles[i]
            await calidadiesApi.post(`/program/delete/borrarFileDeCloudinary`,{public_id});
  

        }

    }
}
export const crearOportunidadaDeMejora = ({condicionDeCalidades,idPlanDeMejoramiento,idPrograma,programa,OportunidadDeMejoraTitle,actividadesOportunidadDeMejora}) =>{
    return async(dispatch,getState) => {
        const start = new Date().getFullYear()
        const {data} = await calidadiesApi.post(`/program/crearOportunidadDeMejora`,{calidadDeContenido:condicionDeCalidades,idPlanDeMejoramiento,idPrograma,programa,OportunidadDeMejoraTitle,start});
        const {oportunidadesDeMejora} = data;
        const {_id} = oportunidadesDeMejora;
       
        dispatch(agragarOportunidadDeMejora(oportunidadesDeMejora));
  
         dispatch(createActividadesMejora({_id,condicionDeCalidades,idPlanDeMejoramiento,
             idPrograma,programa,OportunidadDeMejoraTitle,actividadesOportunidadDeMejora}))
    }
}
export const createActividadesMejora = ({condicionDeCalidades,idPlanDeMejoramiento,idPrograma,programa,OportunidadDeMejoraTitle,actividadesOportunidadDeMejora,_id}) => {
    return async(dispatch,getState) => {
        const start = new Date().getFullYear()
        if(actividadesOportunidadDeMejora.length === 0 ) return;
       
        
         for (let i = 0; i < actividadesOportunidadDeMejora.length; i++) {
        
            const {data} = await calidadiesApi.post(`/program/crearActividadesDeMejora`,{
                calidadDeContenido:condicionDeCalidades,idPlanDeMejoramiento,
            idPrograma,programa,OportunidadDeMejoraTitle,start,
             tituloDeActividades:actividadesOportunidadDeMejora[i],
                idOportunidadDeMejora:_id
             });


         }
    }
}
export const obtenerCondicionesDeCalidad = ({oportunidadDeMejora}) => {
    return async(dispatch,getState) => {

    const {calidadDeContenido} = oportunidadDeMejora;
    const condiciones = calidadDeContenido
  
    dispatch(seleccionarCondicionesDeCalidad(condiciones))

    }
}
export const actualizarOportunidadDeMejora = ({CondicionesDeCalidad,idPlanDeMejoramiento,idOportunidadDeMejora,idPrograma,setProgramas,OportunidadDeMejoraTitle}) => {
    return async(dispatch,getState) => {
        const start = new Date().getFullYear()
        const {data} = await calidadiesApi.post(`/program/actualizarOportunidadDeMejora`,{calidadDeContenido:CondicionesDeCalidad,idOportunidadDeMejora,idPlanDeMejoramiento,idPrograma,programa:setProgramas,OportunidadDeMejoraTitle,start});
        
        
        // filtrarActividades
    }
}
export const actualizarActividadeDeMejora = ({CondicionesDeCalidad,idPlanDeMejoramiento,idPrograma,setProgramas,OportunidadDeMejoraTitle,idOportunidadDeMejora,newActivite}) => {
    return async(dispatch,getState) => {
        const start = new Date().getFullYear()
    
        for (let i = 0; i < newActivite.length; i++) {
             const {data} = await calidadiesApi.post(`/program/actualizarActividadeDeOportunidadDeMejora`,{calidadDeContenido:CondicionesDeCalidad,
                idOportunidadDeMejora,idPlanDeMejoramiento,idPrograma,programa:setProgramas,
                tituloDeActividades:newActivite[i],OportunidadDeMejoraTitle,start});
          
        }
        const {data} = await calidadiesApi.post(`/program/obtenerActividadesDeMejora`,{idOportunidadDeMejora});
        const {obtenerActiviades} = data;
        

        dispatch(filtrarActividades(obtenerActiviades));

    }
}
export const FiltrarUnaOportunidadDeMejora = ({idPlanDeMejoramiento,idOportunidadDeMejora}) => {
    return async(dispatch,getState) => {
        const {data} = await calidadiesApi.post(`/program/obtenerOportunidadDeMejoraPorId`,{idPlanDeMejoramiento});
        const {obtenerOportunidadDeMejoraPorId} = data;

        const filtrarOportunidadDeMejora = obtenerOportunidadDeMejoraPorId.filter(oportunidad => oportunidad._id === idOportunidadDeMejora)
     
   
    
        dispatch(filtradoUnaOportunidadDeMejora(filtrarOportunidadDeMejora[0]))
  }
}
export const filtrarActividadesDeOportunidadDeMejora = ({idOportunidadDeMejora}) => {
    return async(dispatch,getState) => {

        const {data} = await calidadiesApi.post(`/program/obtenerActividadesDeMejora`,{idOportunidadDeMejora});
        const {obtenerActiviades} = data;
        

        dispatch(filtrarActividades(obtenerActiviades));

    }

}
export const borrarOportunidadDeMejora = ({idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora}) => {
    return async(dispatch,getState) => {


    await calidadiesApi.delete(`/program/borrarOportunidadDeMejora/${idOportunidadDeMejora}`);


    const {data} = await calidadiesApi.post(`/program/obtenerFilesIdOportunidadDeMejora`,{idOportunidadDeMejora})
    const {obtenerFiles} = data;

    for (let i = 0; i < obtenerFiles.length; i++) {
        const {public_id} = obtenerFiles[i]
        await calidadiesApi.post(`/program/delete/borrarFileDeCloudinary`,{public_id})
       
    
    }
    
    dispatch(obtenerOportunidadDeMejoraPorId({idPlanDeMejoramiento}));



    }
}
export const filtrarTitulosDeActividadDeOportundiadDeMejora = ({idOportunidadDeMejora}) => {
    return async(dispatch,getState) => {

    const {data} = await calidadiesApi.post(`/program/obtenerActividadesDeMejora`,{idOportunidadDeMejora});
    const {obtenerActiviades} = data;
    for (let i = 0; i < obtenerActiviades.length; i++) {
        const {tituloDeActividades} = obtenerActiviades[i]

        dispatch(ObtenerTitulosDeActividadesDeOportunidadDeMejora(tituloDeActividades))
        
    }

    }
}
export const filtrarUnaActividadDeOportunidadDeMejora = ({idOportunidadDeMejora,idActividadesDeMejora}) => {
    return async(dispatch,getState) => {

        const {data} = await calidadiesApi.post(`/program/obtenerActividadesDeMejora`,{idOportunidadDeMejora});
        const {obtenerActiviades} = data;
        const filtrarOportunidadDeMejora = obtenerActiviades.filter(oportunidad => oportunidad._id === idActividadesDeMejora)
    
        dispatch(filtrarActividadDeMejora(filtrarOportunidadDeMejora[0]))
        dispatch(nombreDeLaActividadDeMejoramiento(filtrarOportunidadDeMejora[0].tituloDeActividades))
    }
}
export const startCrearPoryeccionDeEventos = ({idPlanDeMejoramiento,idPrograma,idActividadesDeMejora,programa,tituloDeActividades,indicador,fecha1,fecha2,fecha3,fecha4,fecha5,fecha6,fecha7,idOportunidadDeMejora,porcentajes}) => {
    return async(dispatch,getState) => {
   
        const start = new Date().getFullYear()
        const totalDeProyecciones = [fecha1, fecha2, fecha3, fecha4, 
            fecha5, fecha6, fecha7].reduce((total, fecha) => total + parseInt(fecha), 0)
 
        const {data} = await calidadiesApi.post(`/program/crearProyeccionDeEventos`,{tituloDeActividades,totalDeProyecciones,idActividadesDeMejora,idPlanDeMejoramiento,idPrograma,programa,indicador,fecha1,fecha2,fecha3,fecha4,fecha5,fecha6,fecha7,start,idOportunidadDeMejora,porcentajes});
        const {ProyeccionDeEventos} = data;
        dispatch(crearPoryeccionDeEventos(ProyeccionDeEventos))
        console.log(ProyeccionDeEventos);
     
    }
}
export const editCrearProyeccionDeEventos = ({actualizarTitulosDeActividades,idActividadesDeMejora}) => {
    return async(dispatch,getState) => {

        const {data} = await calidadiesApi.post(`/program/actualizarUnaActividadDeMejoras`,{actualizarTitulosDeActividades,idActividadesDeMejora});
   


    }
}
export const obtenerProyeccionDeEventos = ({idActividadesDeMejora}) => {
    return async(dispatch,getState) => {
        const {data} = await calidadiesApi.post(`/program/obtenerProyeccionDeEventos`,{idActividadesDeMejora});
        const {obtenerProyeccionDeEventos} = data;
 
        dispatch(ProyeccionDeEventos(obtenerProyeccionDeEventos))
        
    }

}
export const borrarProyeccionDeEventos = ({idProyeccionDeEventos,idActividadesDeMejora}) => {
    return async(dispatch,getState) => {
      
        const {data:datos} = await calidadiesApi.post(`/program/obtenerFilesConProyeccionDeEventos`,{idProyeccionDeEventos});
   
        const {obtenerFiles} = datos;
        if(obtenerFiles.length > 0){
        for (let i = 0; i < obtenerFiles.length; i++) {
            const {public_id} = obtenerFiles[i];
          
            await calidadiesApi.post(`/program/delete/borrarFileDeCloudinary`,{public_id});

       
        }
    }
    const {data} = await calidadiesApi.post(`/program/delete/borrarProyeccionDeEventos`,{idProyeccionDeEventos});

    dispatch(obtenerProyeccionDeEventos({idActividadesDeMejora}))
    


    }
}
export const obtenerFilesConIdActividadesDeMejora = ({idActividadesDeMejora,idOportunidadDeMejora}) => {
    return async(dispatch,getState) => {
       const {data} =  await calidadiesApi.post(`/program/obtenerFilesConIdActividadesDeMejora`,{idActividadesDeMejora});
        const {obtenerFiles} = data;
  

        for (let i = 0; i < obtenerFiles.length; i++) {
             const {public_id} = obtenerFiles[i];
             await calidadiesApi.post(`/program/delete/borrarFileDeCloudinary`,{public_id});
            
        }
       
        await calidadiesApi.post(`/program/borrarActividadDeMejora`,{idActividadesDeMejora});

        const {data:datos} = await calidadiesApi.post(`/program/obtenerActividadesDeMejora`,{idOportunidadDeMejora});
        const {obtenerActiviades} = datos;
       
        dispatch(vaciarActividadesDeMejoramiento());
        dispatch(filtrarActividades(obtenerActiviades));
        dispatch(filtrarActividadesDeMejora({idOportunidadDeMejora}))   

    }
}
export const StartObtenerNotas = ({idProyeccionDeEventos}) => {
    return async(dispatch,getState) => {
        const {data} = await calidadiesApi.post(`/program/obtenerNotas`,{idProyeccionDeEventos});
        const {obtenerNotas} = data;
    
        dispatch(OnObtenerNotas(obtenerNotas))
        for (let i = 0; i < obtenerNotas.length; i++) {
            const {start} = obtenerNotas[i]

  
            
        }
        const numeroDeNotas = obtenerNotas.length;
       const {data:datos} = await calidadiesApi.post(`/program/agregarNotas`,{numeroDeNotas,idProyeccionDeEventos});

        
        
    }
}
export const crearNotas = ({titulosDeNotas,arraysFiles,bodyDeNotas,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos,start,mes,dia,seguimiento,yearSeguimiento}) => {
    return async(dispatch,getState) => {
    
 


    const {data} = await calidadiesApi.post(`/program/crearNotas`,{titulosDeNotas,bodyDeNotas,idPlanDeMejoramiento,idPrograma,
        start,dia,mes,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos,seguimiento,yearSeguimiento});
    const {CrearNotas:crearNota} = data;

 
    let year = crearNota.start
    let idNota = crearNota._id;
  

   if(arraysFiles.length > 0){
   for (let i = 0; i < arraysFiles.length; i++) {
        console.log(arraysFiles.length);

        
        
         dispatch(uploadFiles(arraysFiles[i],idNota,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos));



   }
 }




    //  if(arraysFiles.length > 0){

    //      dispatch(uploadFiles(arraysFiles,idNota,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos));
    //  }


     dispatch(StartObtenerNotas({idProyeccionDeEventos}));
    //  dispatch(obtenerLaFechaDeOportunidadDeMejora({idPlanDeMejoramiento,year,idProyeccionDeEventos,idActividadesDeMejora}))
     dispatch(obtenerOportunidadDeMejoraPorIdAgregarSeguimiento({idPlanDeMejoramiento,year,start,idProyeccionDeEventos,idActividadesDeMejora,seguimiento,yearSeguimiento}))


    }
}
export const obtenerOportunidadDeMejoraPorIdAgregarSeguimiento = ({idPlanDeMejoramiento,year,start,idProyeccionDeEventos,idActividadesDeMejora,seguimiento,yearSeguimiento}) => {
    return async(dispatch,getState) => {
        const {data} = await calidadiesApi.post(`/program/obtenerOportunidadDeMejoraPorId`,{idPlanDeMejoramiento});
        const {obtenerOportunidadDeMejoraPorId} = data;
        const {start:inicio} = obtenerOportunidadDeMejoraPorId[0]
     
         const fecha1 = inicio
         const fecha2 = inicio + 1
         const fecha3 = inicio + 2
         const fecha4 = inicio + 3
         const fecha5 = inicio + 4
         const fecha6 = inicio + 5
         const fecha7 = inicio + 6
  
    

        dispatch(agregarSeguimiento({seguimiento,yearSeguimiento,
            idProyeccionDeEventos,idActividadesDeMejora,fecha1,
            fecha2,fecha3,fecha4,fecha5,fecha6,fecha7}))
        


    }
}
export const agregarSeguimiento = ({idProyeccionDeEventos,idActividadesDeMejora,seguimiento,yearSeguimiento,fecha1,fecha2,fecha3,fecha4,fecha5,fecha6,fecha7}) => {
    return async(dispatch,getState) => {
   

        await calidadiesApi.post(`/program/AgregarNotasFechas`,{seguimiento,
            idProyeccionDeEventos,idActividadesDeMejora,
            yearSeguimiento,fecha1,fecha2,fecha3,
            fecha4,fecha5,fecha6,fecha7});
      

    }
}
export const obtenerNota = ({idNotas}) => {
    return async(dispatch,getState) => {
       
    const {data} = await calidadiesApi.post(`/program/obtenerSetNota`,{idNotas});
    const {obtenerNota} = data;
    dispatch(setNoteActive(obtenerNota))


 }
}
export const actualizarNota = ({titulosDeNotas,bodyDeNotas,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idNotas,idActividadesDeMejora,idProyeccionDeEventos}) => {
    return async(dispatch,getState) => {
        const fechaActual = new Date();
        const start = fechaActual.getFullYear();
        const mes = fechaActual.getMonth() + 1; 
        const dia = fechaActual.getDate();
        const {data} = await calidadiesApi.post(`/program/actualizarNota`,{titulosDeNotas,start,mes,dia,
        bodyDeNotas,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idNotas,
        idActividadesDeMejora,idProyeccionDeEventos});
        

        dispatch(StartObtenerNotas({idProyeccionDeEventos}));
        dispatch(closeNote());
 

    }
}
export const borrarNota = ({idNota,idProyeccionDeEventos,idPlanDeMejoramiento,idActividadesDeMejora}) => {
    return async(dispatch,getState) => {
        
      const {data} = await calidadiesApi.delete(`/program/borrarNota/${idNota}`);
  

      const {borrarNota} =data;
      const {start,seguimiento,yearSeguimiento} = borrarNota;
    
      dispatch(StartObtenerNotas({idProyeccionDeEventos}));
      dispatch(closeNote());

      dispatch(quitarLaFechaDeLaNota({idPlanDeMejoramiento,year:start,seguimiento,yearSeguimiento,idProyeccionDeEventos,idActividadesDeMejora,idNota}))

    }
}
export const uploadFiles = (arraysFiles,idNota,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos) => {
    return async(dispatch,getState) => {  
        console.log(arraysFiles);
         const formData = new FormData();
         formData.append('file',arraysFiles);
         const {data} = await calidadiesApi.post(`/program/upload`,formData);
         const {cloudResp} = data;
         await calidadiesApi.post(`/program/saveFiles`,{cloudResp,idNota,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos});
        //  for (let i = 0; i < arraysFiles.length; i++) {
        //      const formData = new FormData();
        //      formData.append('file',arraysFiles[i]);

        //     const {data} = await calidadiesApi.post(`/program/upload`,formData);

        //       const {cloudResp} = data;
        

        //     const {data:datos} = await calidadiesApi.post(`/program/saveFiles`,{cloudResp,idNota,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos});
           
        //  }
        //    const {data} = await calidadiesApi.post(`/program/uploadFiles`,File);

    }
}
export const obtenerLosFiles = (idNotas) => {
    return async(dispatch,getState) => {
       

        const {data} = await calidadiesApi.post('/program/obtenerFiles',{idNota:idNotas});
        const {obtenerArchivos} = data;
        for (let i = 0; i < obtenerArchivos.length; i++) {
            const {cloudResp} = obtenerArchivos[i]
            dispatch(obtenerFiles(cloudResp))  
       

        }
    }
}
export const actualizarFiles = ({files,idNota,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos}) => {
    return async(dispatch,getState) => {
    
for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            formData.append('file',files[i]);
            const {data} = await calidadiesApi.post(`/program/upload`,formData);
            const {cloudResp} = data;
            const {data:datos} = await calidadiesApi.post(`/program/saveFiles`,{cloudResp,idNota,
                idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,
                idActividadesDeMejora,idProyeccionDeEventos});
    
        }

  }
}
export const vaciarTodosLosFiles = () => {
    return async(dispatch,getState) => {

        dispatch(vaciarFiles())
    }
}
export const borrarFilesDeCloudinary = ({files}) => {
    return async(dispatch,getState) => {
        for (let i = 0; i < files.length; i++) {
            const {public_id} = files[i]
            const {data} = await calidadiesApi.post(`/program/delete/borrarFileDeCloudinary`,{public_id});
        }
    }
}
export const borrarBaseDedatosFiles = (idNotas,files) => {
    return async(dispatch,getState) => {
        console.log(files);
        for (let i = 0; i < files.length; i++) {
            const {data} = await calidadiesApi.post('/program/obtenerFiles',{idNota:idNotas});
            const {obtenerArchivos} = data;
      
            const {_id} = obtenerArchivos[0];
            await calidadiesApi.post('/program/delete/borrarSubirFiles',{_id});

        }
    }
}
export const borrarUnFilesDeCloudinary = ({public_id}) => {
    return async(dispatch,getState) => {
     
        const {data} = await calidadiesApi.post(`/program/delete/borrarFileDeCloudinary`,{public_id});

    }
}
export const borrarUnoDeLaBaseDeDatosFiles = (idNotas,public_id) => {
    return async(dispatch,getState) => {
        const {data} = await calidadiesApi.post('/program/obtenerFiles',{idNota:idNotas});
        const {obtenerArchivos} = data;
      
        const idFile = obtenerArchivos.filter((archivos) => archivos.public_id === public_id)
 
        const [{_id}] = idFile


        // const {_id} = obtenerArchivos[0];
        const {data:datos} = await calidadiesApi.post('/program/delete/borrarUnFile',{_id});
      
        dispatch(vaciarFiles()) 
        dispatch(obtenerLosFiles(idNotas))
  }
}
export const obtenerLaFechaDeOportunidadDeMejora = ({idPlanDeMejoramiento,year,idProyeccionDeEventos,idActividadesDeMejora}) => {
    return async(dispatch,getState) => {
        // console.log('NO');
        // const {data} = await calidadiesApi.post(`/program/obtenerOportunidadDeMejoraPorId`,{idPlanDeMejoramiento});
        // const {obtenerOportunidadDeMejoraPorId} = data;
        // const {start} = obtenerOportunidadDeMejoraPorId[0]
        // const fecha1 = start
        // const fecha2 = start + 1
        // const fecha3 = start + 2
        // const fecha4 = start + 3
        // const fecha5 = start + 4
        // const fecha6 = start + 5
        // const fecha7 = start + 6
        // const notasFecha1 = 1;
        // const notasFecha2 = 1;
        // const notasFecha3 = 1;
        // const notasFecha4 = 1;
        // const notasFecha5 = 1;
        // const notasFecha6 = 1;
        // const notasFecha7 = 1;

        
        // const {data:datos} = await calidadiesApi.post(`/program/obtenerProyeccionDeEventos`,{idActividadesDeMejora});
        // const {obtenerProyeccionDeEventos} = datos;
     
        // if(year === fecha1){
        //     await calidadiesApi.post(`/program/AgregarNotasFechas`,{notasFecha1,idProyeccionDeEventos,idActividadesDeMejora});
        // }else if (year === fecha2){
        //     await calidadiesApi.post(`/program/AgregarNotasFechas`,{notasFecha2,idProyeccionDeEventos,idActividadesDeMejora});
        // }else if (year === fecha3){
        //     await calidadiesApi.post(`/program/AgregarNotasFechas`,{notasFecha3,idProyeccionDeEventos,idActividadesDeMejora});
        // }else if (year === fecha4){
        //      await calidadiesApi.post(`/program/AgregarNotasFechas`,{notasFecha4,idProyeccionDeEventos,idActividadesDeMejora});
        // }else if (year === fecha5){
        //     await calidadiesApi.post(`/program/AgregarNotasFechas`,{notasFecha5,idProyeccionDeEventos,idActividadesDeMejora});
        // }else if (year === fecha6){
        //    await calidadiesApi.post(`/program/AgregarNotasFechas`,{notasFecha6,idProyeccionDeEventos,idActividadesDeMejora});
        // }else if (year === fecha7){
        //     await calidadiesApi.post(`/program/AgregarNotasFechas`,{notasFecha7,idProyeccionDeEventos,idActividadesDeMejora});
        // }
      
       
  }
}
export const quitarLaFechaDeLaNota = ({idPlanDeMejoramiento,year,idProyeccionDeEventos,idActividadesDeMejora,yearSeguimiento,seguimiento,idNota}) => {
    return async(dispatch,getState) => {
    const {data} = await calidadiesApi.post(`/program/obtenerOportunidadDeMejoraPorId`,{idPlanDeMejoramiento});
    const {obtenerOportunidadDeMejoraPorId} = data;
    const {start} = obtenerOportunidadDeMejoraPorId[0]
    const fecha1 = start
    const fecha2 = start + 1
    const fecha3 = start + 2
    const fecha4 = start + 3
    const fecha5 = start + 4
    const fecha6 = start + 5
    const fecha7 = start + 6
  
    const {data:datos} = await calidadiesApi.post(`/program/obtenerProyeccionDeEventos`,{idActividadesDeMejora});
    const {obtenerProyeccionDeEventos} = datos;
    const yearSegumientoNumber = parseInt(yearSeguimiento);
    const SegumientoNumber = parseInt(seguimiento);
 

   
     const {data:quitarNotas} = await calidadiesApi.post(`/program/quitarNotasFechas`,{idProyeccionDeEventos,idActividadesDeMejora,SegumientoNumber,yearSegumientoNumber,idNota});
    console.log(quitarNotas);
    
  }
}
export const obtenerUnaProyeccionDeEventos = ({idActividadesDeMejora,idProyeccionDeEventos}) => {
    return async(dispatch,getState) => {

        const {data} = await calidadiesApi.post(`/program/obtenerProyeccionDeEventos`,{idActividadesDeMejora});
        const {obtenerProyeccionDeEventos} = data;
    
        const filtrarProyeccion = obtenerProyeccionDeEventos.filter((proyeccion) => proyeccion._id === idProyeccionDeEventos)
    
     
        dispatch(ProyeccionDeEventos(filtrarProyeccion))
    }
}
export const StartCrearUniversidad = ({nombreDeLaUniversidad}) => {
    return async(dispatch,getState) => {

    await calidadiesApi.post(`/program/crearUniversidad`,{nombreDeLaUniversidad})



 }
}

