import { useDispatch, useSelector } from "react-redux"
import { WindowPage } from "../components/WindowPage"

import { startActividadesThunks, startGuardado } from "../../store/actividades/actividadesThunks"
import { CreateNewActiviteComponent } from "../components/CreateNewActiviteComponent"
import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


export const TareaPage = () => {
    const {plan,loanding} = useSelector(state => state.actividades)
    const dispatch = useDispatch()

    const {name} = useParams()

    const onClickNewPlan = () => {
    dispatch(startActividadesThunks())
  
    }

    useEffect(() => {
      dispatch(startGuardado({name}))
 

    }, [])

  return (
    <>
    {
        (plan)?
        <CreateNewActiviteComponent/>
        :<>
        <WindowPage />
     
        <Link to={`/homepage/${name}/createNewActivitie`}>
        <button className="btn btn-dark boton-posicion">+</button>
        {/* <button className="btn btn-dark boton-posicion" onClick={onClickNewPlan}>+</button> */}
        </Link>

        <Link to={'/homepage'}>
        <button className="btn btn-danger boton-back">volver</button>
        </Link>

         </>
    }
    </>
  )
}

