import { useDispatch, useSelector } from "react-redux"
import { startOnLogout } from "../store/auth/authThunks"
import { Link } from "react-router-dom"

export const Nabvar = () => {
  const dispatch = useDispatch()
  const {name,tipoDeUsuario} = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(startOnLogout());

  }

  return (
    <div className="navbar navbar-dark bg-dark px-4 nav">
        <span className="navbar-brand">
            {name}
        </span>
        <Link to={`/homepage/crearUniversidad`}>
        <button className={`btn btn-primary ${(tipoDeUsuario === 'admin') ? '' : 'd-none'}`}>
        <i class="bi bi-bag-plus-fill"></i>
            <span>Crear Universidad</span>


        </button>
        </Link>
        <Link to={`/homepage/verUniversidad`}>
        <button className={`btn btn-primary ${(tipoDeUsuario === 'admin') ? '' : 'd-none'}`}>
        <i class="bi bi-bag-check-fill"></i>
        
            <span>Ver Universidad</span>


        </button>
        </Link>
        <Link to={`/homepage/verUsuarios`}>
        <button className={`btn btn-primary ${(tipoDeUsuario === 'admin') ? '' : 'd-none'}`}>
        <i class="bi bi-bag-check-fill"></i>
            <span>Ver Usuarios</span>


        </button>
        </Link>

        <button className="btn btn-outline-danger" onClick={onLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span> Salir</span>


        </button>

    </div>
  )
}
