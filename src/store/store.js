import {  configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { actividadesSlice } from './actividades/actividadesSlice'
import { notesSlice } from './actividades/notesSlice'
import { planDeMejoramientoSlice } from './programas/planDeMejoramientoSlice'
import { calidadDeContenido } from './programas/calidadDeContenido'
import { oportunidadDeMejoraSlice } from './programas/oportunidadDeMejoraSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    notes:notesSlice.reducer,
    actividades:actividadesSlice.reducer,
    planDeMejoramiento:planDeMejoramientoSlice.reducer,
    calidadDeContenido:calidadDeContenido.reducer,
    oportunidadDeMejoraSlice:oportunidadDeMejoraSlice.reducer,
    
  },
  

})