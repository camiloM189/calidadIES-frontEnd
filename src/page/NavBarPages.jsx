import { Link, useLocation } from "react-router-dom"


export const NavBarPages = () => {
  const location = useLocation();
  const {pathname} = location;

  
  return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button className="navbar-toggler border-0 hamburguer" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <div className="navbar-brand">
          <img src={`/img/calidadiesBlanca.png`} 
          className="imgLogo img-fluid" alt="logo de calidadies"/>
        </div>
          <ul className="navbar-nav  ms-lg-auto">
            <li className="nav-item">
              <Link to={'/'}>
              <p  className={`nav-link ${(pathname === '/') ? 'active' : '' }`} aria-current="page">Home</p>
              
              </Link>
            </li>
            <li className='nav-item'>
       

              <Link to={'/Servicios'}>
              <a  className={`nav-link ${(pathname === '/Servicios') ? 'active' : '' }`} aria-current="page" href="clientes.html">Servicios</a>
              </Link>
            </li>
            <li  className='nav-item'>
            <Link to={'/Conocenos'}>
              <a className={`nav-link ${(pathname === '/Conocenos') ? 'active' : '' }`} href="comencemos.html">Conocenos</a>
              </Link>
            </li>
            <li className="nav-item">
            <Link to={'/ProcesosDeTrabajo'}>
            <a className={`nav-link ${(pathname === '/ProcesosDeTrabajo') ? 'active' : '' }`} href="comencemos.html">Procesos De Trabajo</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link to={'/Contactanos'}>
            <a className={`nav-link ${(pathname === '/Contactanos') ? 'active' : '' }`} href="comencemos.html">Contactanos</a>
            </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/auth'}>
                <p >Aplicacion</p>
              </Link>
              {/* <a class="nav-link" href="contacto.html"></a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
