import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Prueba = ({condicionDeCalidades,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idActividades}) => {
    console.log(condicionDeCalidades);
    console.log(idPlanDeMejoramiento);
    console.log(idPrograma);
    console.log(idOportunidadDeMejora);
    console.log(idActividades);
    const navigate = useNavigate();

    navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividades}/nueva`)

  return (
    <></>
  )
}
