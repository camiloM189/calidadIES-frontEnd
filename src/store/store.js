import {  configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { actividadesSlice } from './actividades/actividadesSlice'
import { notesSlice } from './actividades/notesSlice'
import { planDeMejoramientoSlice } from './programas/planDeMejoramientoSlice'
import { calidadDeContenido } from './programas/calidadDeContenido'
import { oportunidadDeMejoraSlice } from './programas/oportunidadDeMejoraSlice'
import { seguimientoSlice } from './programas/seguimientoSlice'
import { universidadesSlice } from './programas/UniversidadesSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    notes:notesSlice.reducer,
    actividades:actividadesSlice.reducer,
    planDeMejoramiento:planDeMejoramientoSlice.reducer,
    calidadDeContenido:calidadDeContenido.reducer,
    oportunidadDeMejoraSlice:oportunidadDeMejoraSlice.reducer,
    seguimientoSlice:seguimientoSlice.reducer,
    universidadesSlice:universidadesSlice.reducer,
  },
  

})