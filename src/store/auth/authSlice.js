import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
    status: 'checking', // 'not-authenticated','authenticated','checking'
    uid: null,
    email:null,
    name:null,
    photoURL:null,
    errorMessage:undefined,
    aplication:false,
    codigo:null,
    password:null,
    tipoDeUsuario:null,
    idUniversidad:null
},
reducers: {
  login:(state,{payload}) => {
   state.status = 'authenticated';
   state.uid = payload.uid;
   state.email = payload.email;
   state.name = payload.name;
   state.photoURL = payload.photoURL;
   state.errorMessage = undefined;
   state.tipoDeUsuario = payload.tipoDeUsuario;
   state.idUniversidad = payload.idUniversidad;
  },
  logout:(state,{payload}) => {
   state.status = 'not-authenticated';
   state.uid = null;
   state.email = null;
   state.name = null;
   state.photoURL = null;
   state.errorMessage = payload;
   state.tipoDeUsuario = null
  },
  checkingCredentials: (state) => {
       state.status = 'checking';
  },
  clearErrorMessage:(state) => {
    state.errorMessage = undefined;
  },
  onPage:(state) => {
    state.aplication = true;
  },
  onCodigo:(state,{payload}) => {
    state.codigo = payload.codigo;
    state.email = payload.email;
    state.name = payload.name;
    state.password = payload.password;
  },
  onClear:(state,{payload}) => {
    state.password = null
    state.codigo = null

  },
  obtenerIdUniversidad:(state,{payload}) => {
    state.idUniversidad = payload.idUniversidad;
    state.tipoDeUsuario = payload.tipoDeUsuario;

  }
}
});
          

// Action creators are generated for each case reducer function
export const { login,logout,checkingCredentials,
  clearErrorMessage,onPage,onCodigo,onClear,obtenerIdUniversidad } = authSlice.actions;