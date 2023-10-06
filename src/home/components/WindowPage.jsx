import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { startGetItemById } from "../../store/actividades/actividadesThunks";




export const WindowPage = () => {
  const dispatch = useDispatch()
  const {actividades,close} = useSelector(state => state.actividades)
  const [activeTitle, setActiveTitle] = useState('')
  const {name} = useParams()

  const onClick = (_id,title) => {
      // dispatch(startGetItemById({_id}));
      setActiveTitle(title)
  }
  
 

  return (
    
    <>
      <div className="window-title">
        <h1 className="titulo">{name}</h1>
      </div>

    <div className='window'>
    <h5 className="ms-3 mt-3">Oportunidades de Mejora</h5>
    <div className='list-button '>
      {
        (close) ? 
        <ul>
        {
          actividades?.map(active => (
           
          <li className="mb-4" >
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
  </div>
</>

    );
}
