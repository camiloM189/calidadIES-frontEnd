import { createSlice } from '@reduxjs/toolkit';

export const universidadesSlice = createSlice({
   name: 'universidades',
   initialState: {
         universidadId:null,
         Universidades:[],
         Usuarios:[]
   },
   reducers: {
    obtenerIdUniversidades: (state,{payload}) => {
           state.universidadId = payload;
    },
    obtenerUniversidades: (state,{payload}) => {
        state.Universidades = payload;
    },
    obtenerUsuarios: (state,{payload}) => {
        state.Usuarios = payload;
    },
   }
});
          

// Action creators are generated for each case reducer function
export const { obtenerIdUniversidades,obtenerUniversidades,obtenerUsuarios } = universidadesSlice.actions;