import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../../../hook/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { falseActividadesDeMejora } from '../../../store/programas/oportunidadDeMejoraSlice';
import { crearOportunidadaDeMejoraNueva } from '../../../store/programas/OportunidadDeMejoraThunks';
import Swal from 'sweetalert2';

export const CrearOportunidadDeMejora = () => {

    const {OportunidadDeMejoraTitle,onInputChange} = useForm('');
    const {idPlanDeMejoramiento,idPrograma,condicionDeCalidades} = useParams();
    const [year, setYear] = useState(0);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {ActividadesDeMejora,proyeccionDeEventos} = useSelector(state => state.oportunidadDeMejoraSlice);
    useEffect(() => {
        dispatch(falseActividadesDeMejora())
    
      
    }, [])
    const {errorMessage} = useSelector(state => state.planDeMejoramiento);
    
 
    const crearOportunidadDeMejora = (event) => {
    event.preventDefault();
    
    dispatch(crearOportunidadaDeMejoraNueva({condicionDeCalidades,
      idPlanDeMejoramiento,idPrograma,OportunidadDeMejoraTitle}))
    }
    const {IdOportunidadDeMejora} = useSelector(state => state.oportunidadDeMejoraSlice);

    const nextActividad = () => {
      navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${condicionDeCalidades}/${IdOportunidadDeMejora}/actividades/nuevo`)
      Swal.fire('La oportunidad de mejora se ha creado con exito',errorMessage,'success')


    }
    const back = () => {
      navigate(`/homepage/${idPlanDeMejoramiento}/${idPrograma}`)
      Swal.fire('La oportunidad de mejora se ha creado con exito',errorMessage,'success')

    }

  return (
    <>
        <div className={`cuadrado`}>

        <div className='cuadrado border border-1 border-start-0 border-end-0 border-bottom-0 border-dark p-4'>
        <h1 className='ms-5'>{condicionDeCalidades}</h1>
        <div className="mb-3 ms-5">
    
      <form className={`row g-3 ${(ActividadesDeMejora) ? 'disabled' : ''}`} onSubmit={crearOportunidadDeMejora}>
        
      <div class="col-md-10 col-sm-12">
    
        <input type="text" 
          className={`form-control`}
          placeholder="ingrese su oportunidad de mejora"
          name="OportunidadDeMejoraTitle"
          value={OportunidadDeMejoraTitle}
          onChange={onInputChange}
          disabled={ActividadesDeMejora}
          />
      </div>
      <div class="col-md-2 col-None-12">
        <button type="submit" data-bs-toggle="modal"
              data-bs-target="#exampleModal"  className={`btn btn-outline-primary mb-3`} >Agregar</button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Seguimiento</h1>
                </div>
                <div className="modal-body">
                    ¿quieres crear las Actividades de mejora?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={back} >No</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal" 
                    onClick={nextActividad}
                  >Si</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </form>
    <Link to={`/homepage/${idPlanDeMejoramiento}/${idPrograma}`}>
 
      <button className='btn btn-outline-danger btn-block boton-back-evento'>
          Volver
      </button> 
      </Link>
      {/* <button class="btn btn-outline-primary mb-3" onClick={nextNavigate}>Next</button> */}
      </div>
      <div>
        {/* <div className={`${(ActividadesDeMejora) ? '' : 'd-none'}`}>
      <AgregarActividadesDeMejora  IdOportunidadDeMejora={IdOportunidadDeMejora}/>
      </div> */}
    </div>
    </div>     
    </div>
    
  </>
  )
}
