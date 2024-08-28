import { createSlice } from '@reduxjs/toolkit'


export const oportunidadDeMejoraSlice = createSlice({
    name:'oportunidadDeMejoraSlice',
    initialState:{
        TituloDeOportunidadDeMejora:'',
        TituloDeActividadesDeMejora:'',
        IdOportunidadDeMejora:0,
        IdActividadesDeMejora:0,
        year:0,
        Indicador:'',
        fecha:0,
        fecha2:0,
        fecha3:0,
        fecha4:0,
        fecha5:0,
        fecha6:0,
        fecha7:0,
        ActividadesDeMejora:false,
        proyeccionDeEventos:false,
        actividadesDeMejora:[],
        idActividades:0,
        borrarOportunidadDeMejora:false,
        borrarOportunidadDeMejoraId:0,
        agregarSeguimiento:false
    },
    reducers:{
       getTituloDeOportunidadDeMejora:(state,{payload}) => {
            state.TituloDeOportunidadDeMejora = payload
       },
       getTituloDeActividadesDeMejora:(state,{payload}) => {
            state.TituloDeActividadesDeMejora = payload
       },
       getInidicador:(state,{payload}) => {
            state.Indicador = payload
       },
       getFecha:(state,{payload}) => {
            state.fecha = payload;
       },
       getFecha2:(state,{payload}) => {
        state.fecha2 = payload;
       },
       getFecha3:(state,{payload}) => {
            state.fecha3 = payload;
        },
        getFecha4:(state,{payload}) => {
            state.fecha4 = payload;
        },
        getFecha5:(state,{payload}) => {
            state.fecha5 = payload;
        },
        getFecha6:(state,{payload}) => {
            state.fecha6 = payload;
        },
        getFecha7:(state,{payload}) => {
            state.fecha7 = payload;
        },
        ActiveActividadesDeMejora:(state,{payload})=> {
            state.ActividadesDeMejora = true
        },
        falseActividadesDeMejora:(state) => {
            state.ActividadesDeMejora = false

        },
        ActiveProyeccionDeEventos:(state) => {
            state.proyeccionDeEventos = true

        },
        falseProyeccionDeEventos:(state) => {
            state.proyeccionDeEventos = false
        },
        IdOportunidadDeMejora:(state,{payload}) => {
            state.IdOportunidadDeMejora = payload;
        },
        vaciarIdOportunidadDeMejora:(state,{payload}) => {
            state.IdOportunidadDeMejora = 0
        },
        IdActividadesDeMejora:(state,{payload}) => {
            state.IdActividadesDeMejora = payload

        },
        getYear:(state,{payload}) => {
            state.year = payload
        },
        pushactividadesDeMejora:(state,{payload}) => {
            state.actividadesDeMejora = payload
        },
        vaciarActividadeDeMejora:(state,{payload}) => {
            state.actividadesDeMejora = []

        },
        getidActividades:(state,{payload}) => {
            state.idActividades = payload
    
        },
        changeborrarOportunidadDeMejora:(state,{payload}) => {
            state.borrarOportunidadDeMejora = true
            state.borrarOportunidadDeMejoraId = payload
        },
        changeFalseborrarOportunidadDeMejora:(state,{payload}) => {
            state.borrarOportunidadDeMejora = false
        },
        changeSeguimiento:(state,{payload}) => {
            state.agregarSeguimiento = true;
        },
        onchangeSeguimiento:(state,{payload}) => {
            state.agregarSeguimiento = false;
        }
        
    }



})
export const {
    getTituloDeOportunidadDeMejora,getActividadesDeMejora,getInidicador,getFecha,getFecha2,getFecha3,getFecha4,getFecha5,
getFecha6,getFecha7,ActiveActividadesDeMejora,getTituloDeActividadesDeMejora,falseActividadesDeMejora,ActiveProyeccionDeEventos,
falseProyeccionDeEventos,IdOportunidadDeMejora,getYear,IdActividadesDeMejora,vaciarIdOportunidadDeMejora,
pushactividadesDeMejora,getidActividades,vaciarActividadeDeMejora,changeborrarOportunidadDeMejora,changeFalseborrarOportunidadDeMejora,
changeSeguimiento,onchangeSeguimiento

} = oportunidadDeMejoraSlice.actions;

