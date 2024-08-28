import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerTodasLasUniversidades } from '../../../store/programas/programaThunks';

export const VerUniversidades = () => {
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(obtenerTodasLasUniversidades());
    
 
    }, [])

    
    const {Universidades} = useSelector(state => state.universidadesSlice);
   
  return (
    <div className=" container tabla-margin animate__animated animate__backInDown">
    <h1>Universidades</h1>
  <div className="table-responsive">
<table className="table table-bordered table-striped table-query table-bg custom-table">
<thead className="table-dark ">
  <tr>
  <th>Nombre de la Universidad</th>
  <th>Codigo de la Universidad</th>
  
  
  </tr>
</thead>
<tbody>
    {
     Universidades?.map(event => (
       <tr className=" border-dark">
       <th className='bg-success text-light'>{event.nombreDeLaUniversidad}</th>
       <th className='bg-success text-light'>{event._id}</th>
    
       </tr>
     ))
    }  
</tbody>
</table>
</div>
</div>
  )
}
