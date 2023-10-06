import React from 'react'
import { useSelector } from 'react-redux'
import { NavBarPages } from '../NavBarPages'
import { HomePageCalidadies } from '../HomePageCalidadies'
import { AppRoutes } from '../../routes/AppRoutes'
import { Route, Routes } from 'react-router-dom'
import { Servicios } from '../Servicios'
import { Conocenos } from '../Conocenos'
import { ProcesosDeTrabajo } from '../ProcesosDeTrabajo'
import { Contactanos } from '../Contactanos'

export const PageRoutes = () => {
  const {status} = useSelector(state => state.auth)

  return (
    <>
   {
    (status === 'authenticated')?
    '':
    <NavBarPages/>
   
   }
   
    <Routes>
      <Route path='/' element={<HomePageCalidadies/>}/>
      <Route path='/Servicios' element={<Servicios/>}/>
      <Route path='/Conocenos' element={<Conocenos/>}/>
      <Route path='/ProcesosDeTrabajo' element={<ProcesosDeTrabajo/>}/>
      <Route path='/Contactanos' element={<Contactanos/>}/>

      <Route path='/*' element={<AppRoutes/>}/> 
      {/* <Route path='/*' element={<Navigate to='/HomePageCalidadies'/>} />  */}
     </Routes>
      
   </>
  )
}
