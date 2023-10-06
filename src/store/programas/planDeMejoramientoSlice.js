import { createSlice } from '@reduxjs/toolkit';


export const planDeMejoramientoSlice = createSlice({
   name: 'programas',
   initialState: {
       programas:[],
       loanding:false,
       createProgramas:{},
       CondicionesDeCalidad:'',
       obtenerOportunidadDeMejora:[],
       setProgramas:'',
       plan:[],
       planesObtenidos:[],
       oportunidadDeMejora:{},
       filtrarActividades:[],
       filtroDeActiviadDeMejora:{},
       proyeccionDeEventos:[],
       nombreDeLaActividadDeMejoramiento:'',
       TitulosDeActividadesDeOportunidadesDeMejora:[],
       notas:[],
       active:false,
       setNote:{},
       files:[],
       modeEdit:false,
       totalNotas:0,
       

   },
   reducers: {
       getProgramas: (state,{payload}) => {
           state.programas = payload;
       },
       getProgramasFiltrado:(state,{payload}) => {
            state.setProgramas = payload;
       },
       clearProgramasFiltrado:(state,{payload}) => {
        state.setProgramas = '';

       },
       crearProgramas: (state,{payload}) => {
        state.programas.push(payload);
       },
       seleccionarCondicionesDeCalidad:(state,{payload}) => {
        state.CondicionesDeCalidad = payload;
       },
       vaciarProgramas:(state,{payload}) => {
        state.programas = [];
       },
       setPrograma:(state,{payload}) => {
        state.setProgramas = payload;
       },
       createPlanDeMejoramiento:(state,{payload}) => {
            state.planesObtenidos.push(payload);
       },
       getPlanDeMejoramiento:(state,{payload}) => {
             state.planesObtenidos = payload;
       },
       vaciarPlanDeMejoramiento:(state,{payload}) => {
            state.planesObtenidos = []
       },
       agragarOportunidadDeMejora:(state,{payload}) => {
        state.obtenerOportunidadDeMejora.push(payload);

       },
       getOportunidadDeMejoras: (state,{payload}) => {
        state.obtenerOportunidadDeMejora = payload;
       },
       vaciarOportunidadesDeMejora: (state,{payload}) => {
        state.obtenerOportunidadDeMejora = [];
       },
       filtradoUnaOportunidadDeMejora: (state,{payload}) => {
        state.oportunidadDeMejora = payload
       },
       vaciarOportunidadDeMejora:(state,{payload}) => {
        state.oportunidadDeMejora = {}
       },
       filtrarActividades:(state,{payload}) => {
        state.filtrarActividades = payload
       },
       vaciarActividadesDeMejoramiento:(state,{payload}) => {
        state.filtrarActividades = []
       },
       filtrarActividadDeMejora:(state,{payload}) => {
        state.filtroDeActiviadDeMejora = payload
       },
       ProyeccionDeEventos:(state,{payload}) => {
        state.proyeccionDeEventos = payload

       },
       crearPoryeccionDeEventos:(state,{payload}) => {
        state.proyeccionDeEventos.push(payload)
       },
       nombreDeLaActividadDeMejoramiento:(state,{payload}) => {
        state.nombreDeLaActividadDeMejoramiento = payload
       },
       ObtenerTitulosDeActividadesDeOportunidadDeMejora:(state,{payload}) => {
        state.TitulosDeActividadesDeOportunidadesDeMejora.push(payload)
       },
       vaciarLosTitulosDeActividadesDeOportunidadesDeMejora:(state,{payload}) => {
        state.TitulosDeActividadesDeOportunidadesDeMejora = []
      },
      OnObtenerNotas:(state,{payload}) => {
        state.notas = payload
      },
      clearNotas:(state,{payload}) => {
        state.notas = []
      },
      activeNote:(state,{payload}) => {
        state.active = true
      },
      closeNote:(state,{payload}) => {
        state.active = false
        state.files = []

      },
      setNoteActive:(state,{payload}) => {
       state.setNote = payload
      },
      obtenerFiles:(state,{payload}) => {
        state.files.push(payload) 
      },
      vaciarFiles:(state,{payload}) => {
        state.files = []

      },
      chageMode:(state,{payload}) => {
        state.modeEdit = true
      },
      chagemodeFalse:(state,{payload}) => {
        state.modeEdit = false


      },
      changeModeFalse:(state,{payload}) => {
        state.modeEdit = false

      },
      totalNota:(state,{payload}) => {
        state.totalNotas = payload 
      },
     
      
    }
});
          

// Action creators are generated for each case reducer function
export const { getProgramas,seleccionarCondicionesDeCalidad,
    crearProgramas,vaciarProgramas,getOportunidadDeMejoras,getProgramasFiltrado,
    clearProgramasFiltrado,vaciarOportunidadesDeMejora,createPlanDeMejoramiento,getPlanDeMejoramiento,
    vaciarPlanDeMejoramiento,filtradoUnaOportunidadDeMejora,
    agragarOportunidadDeMejora,filtrarActividades,filtrarActividadDeMejora,
    crearPoryeccionDeEventos,nombreDeLaActividadDeMejoramiento,
    ProyeccionDeEventos,ObtenerTitulosDeActividadesDeOportunidadDeMejora,
    vaciarLosTitulosDeActividadesDeOportunidadesDeMejora,OnObtenerNotas,activeNote,
    setNoteActive,closeNote,obtenerFiles,vaciarFiles,chageMode,changeModeFalse,
    totalNota,vaciarActividadesDeMejoramiento,clearNotas,chagemodeFalse,vaciarOportunidadDeMejora
} = planDeMejoramientoSlice.actions;