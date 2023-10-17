import { createSlice } from '@reduxjs/toolkit';

export const seguimientoSlice = createSlice({
   name: 'seguimiento',
   initialState: {
        seguimientoTitulo:null,
        descripcion:null,
        files:[],
        start:null,
        dia:null,
        mes:null,
        porcentaje:false
   },
   reducers: {
       onTituloDeSeguimiento: (state,{payload}) => {
           state.seguimientoTitulo = payload;
       },
       onDescripcion: (state,{payload}) => {
        state.descripcion = payload;

       },
       onFliesDeSeguimiento:(state,{payload}) => {
        state.files = payload;
       },
       onStart:(state,{payload}) => {
        state.start = payload;
       },
       onDay:(state,{payload}) => {
        state.dia = payload;
       },
       onMes:(state,{payload}) => {
        state.mes = payload;
       },
       onPorcentaje:(state,{payload}) => {
        state.porcentaje = true;

       },
       offPorcentaje:(state,{payload}) => {
            state.porcentaje = false;

       }
   }    
});
          

// Action creators are generated for each case reducer function
export const { onTituloDeSeguimiento,onDescripcion,onFliesDeSeguimiento,onStart,onDay,onMes,
    onPorcentaje,offPorcentaje } = seguimientoSlice.actions;