import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startActividadesThunks, startGuardado } from '../../store/actividades/actividadesThunks'
import { Link, useParams } from 'react-router-dom'
import { useEffect,useState } from "react"

export const CreateOpportunities = () => {
    const {plan,loanding} = useSelector(state => state.actividades)
    const dispatch = useDispatch()

    const {name} = useParams()

    const onClickNewPlan = () => {
    dispatch(startActividadesThunks())
  
    }

    useEffect(() => {
      dispatch(startGuardado({name}))
 

    }, [])
    
    const {actividades,close} = useSelector(state => state.actividades)
    const [activeTitle, setActiveTitle] = useState('')
  
    const onClick = (_id,title) => {
        // dispatch(startGetItemById({_id}));
        setActiveTitle(title)
    }

  return (
    <>
     <div className='container titulo-intento1 mt-2'>
    <h1 className="text-center text-dark">{name}</h1>
    </div>
    <div className='container cuadrado-oportunidades'>
      <div>
      <h5 className="ms-3 texto-oportunidades mb-3 text-dark">Oportunidades de Mejora</h5>
      </div>
      <div className='cuadro-oportunidades'>
      <div className='list-button'>
      {
        (close) ? 
        <ul>
        {
          actividades?.map(active => (
          <li className="mb-1" >
            <Link to={`/homepage/view/${name}/${active._id}`}>
              <button className="btn  mb-2 listas-cuadrado text-light"
               onClick={() => onClick(active._id,active.title)}> 
               {active.title}
              </button>
             </Link>
          </li>
          ))
        }
    </ul>
    : <></>
      }
    </div>
      </div>
      <Link to={'/homepage'}>
        <button className="btn btn-outline-danger btn-block boton-back">volver</button>
    </Link>
    <Link to={`/homepage/${name}/createNewActivitie`}>
        <button className="btn btn-dark boton-posicion">+</button>
         <button className="btn btn-dark boton-posicion" onClick={onClickNewPlan}>+</button> 
         </Link>
    </div>
 
{/* 
<div className='container titulo-intento1 mt-2'>
  <h1 className="text-center text-dark">{name}</h1>
</div>
<div className='container cuadrado-oportunidades'>
  <div>
    <h2 className="ms-3 texto-oportunidades mb-3 text-dark">Oportunidades de Mejora</h2>
  </div>
  <div className='cuadro-oportunidades mt-5'>
    <div className='list-button'>
      {(close) ? 
        <ul className="row">
          {actividades?.map(active => (
            <li className="col-md-4 col-sm-6 mb-1">
              <Link to={`/homepage/view/${name}/${active._id}`}>
                <button className="btn mb-2 listas-cuadrado text-light" onClick={() => onClick(active._id,active.title)}> 
                  {active.title}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        : <></>
      }
    </div>
    <h3 className='text-center'>Total</h3>
    <h3 className='text-center'>{actividades.length}</h3>
  </div>
  <Link to={'/homepage'}>
        <button className="btn btn-danger boton-back">volver</button>
    </Link>
    <Link to={`/homepage/${name}/createNewActivitie`}>
        <button className="btn btn-dark boton-posicion">+</button>
         <button className="btn btn-dark boton-posicion" onClick={onClickNewPlan}>+</button> 
         </Link>
</div> */}


    {/* <div className='container titulo'>
    <h1 className="text-center">{name}</h1>
    </div>
    <div className='container cuadrado-oportunidades'>
    <h5 className="ms-3 texto-oportunidades mb-3">Oportunidades de Mejora</h5>
    <div className='list-button '>
      {
        (close) ? 
        <ul>
        {
          actividades?.map(active => (
          <li className="mb-1" >
            <Link to={`/homepage/view/${name}/${active._id}`}>
              <button className="btn  mb-2 listas-cuadrado"
               onClick={() => onClick(active._id,active.title)}> 
               {active.title}
              </button>
             </Link>
          </li>
          ))
        }
    </ul>
    : <></>
      }
    </div>
    <Link to={'/homepage'}>
        <button className="btn btn-danger boton-back">volver</button>
    </Link>
    <Link to={`/homepage/${name}/createNewActivitie`}>
        <button className="btn btn-dark boton-posicion">+</button>
        {/* <button className="btn btn-dark boton-posicion" onClick={onClickNewPlan}>+</button> */}
        {/* </Link>
  </div> */} 
    </>
  )
}
