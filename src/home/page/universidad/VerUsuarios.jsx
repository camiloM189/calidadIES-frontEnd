import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { obtenerTodosLosUsuarios } from '../../../store/programas/programaThunks';

export const VerUsuarios = () => {

    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(obtenerTodosLosUsuarios());
    
 
    }, [])

    
    const {Usuarios} = useSelector(state => state.universidadesSlice);


  return (
    <div className=" container tabla-margin animate__animated animate__backInDown">
    <h1>Universidades</h1>
  <div className="table-responsive">
<table className="table table-bordered table-striped table-query table-bg custom-table">
<thead className="table-dark ">
  <tr>
  <th>Usuario</th>
  <th>Correo</th>
  <th>Universidad</th>
  <th>Codigo de la Universidad</th>
  
  
  </tr>
</thead>
<tbody>
    {
     Usuarios?.map(event => (
       <tr className=" border-dark">
       <th className='bg-success text-light'>{event.name}</th>
       <th className='bg-success text-light'>{event.email}</th>
       <th className='bg-success text-light'>{event.nombreDeLaUniversidad}</th>
       <th className='bg-success text-light'>{event.idUniversidad}</th>
    
       </tr>
     ))
    }  
</tbody>
</table>
</div>
</div>
  )
}
