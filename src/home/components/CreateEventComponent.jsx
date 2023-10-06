import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate, useParams } from "react-router-dom";
import { startActEvent, startDeleteItem, startItemEventId, startSaveEvents, startUpdateItem } from "../../store/actividades/actividadesThunks";
import { useEffect, useState } from "react";
import { useForm } from "../../hook/useForm";
import Swal from "sweetalert2";



export const CreateEventComponent = () => {
  const dispatch = useDispatch();
  const {pagina,_id,name} = useParams();
  const {ItemSet,objeto,itemUpdate,errorMessage} = useSelector(state => state.actividades);
  const navigate = useNavigate();
  const [firt, setFirts] = useState([]);
  const [totalCont, setTotalCont] = useState(0)
  
  let {onInputChange,actEvent,fecha,fecha2,fecha3,fecha4,
    fecha5,fecha6,fecha7,onResetForm
  } = useForm('');
  useEffect(() => {
    dispatch(startItemEventId({_id,pagina}));
    dispatch(startUpdateItem({_id,pagina}));

  }, [_id])



  useEffect(() => {
    if(itemUpdate.length > 0){
      const [{listItem}] = itemUpdate;
      const {metas} = listItem;


      setFirts(metas)
     } 
  }, [itemUpdate])

  const backButton = () => {
    navigate(`/homepage/view/${name}/${pagina}`);

    }  
   
   
  const onSubmit = (event) => {
    event.preventDefault()
    if(actEvent.length === 0) return;
    if(fecha === undefined) {
       fecha = 0
    };
    if(fecha2 === undefined) {
        fecha2 = 0
    };
    if(fecha3 === undefined) {
        fecha3 = 0
    };
    if(fecha4 === undefined) {
      fecha4 = 0
    };
    if(fecha5 === undefined) {
    fecha5 = 0
    };
    if(fecha6 === undefined) {
      fecha6 = 0
    };
    if(fecha7 === undefined) {
      fecha7 = 0
    };
    dispatch(startActEvent({pagina,_id,actEvent,fecha,fecha2,fecha3,fecha4,
      fecha5,fecha6,fecha7}));
    dispatch(startSaveEvents({pagina,_id}));
    onResetForm()

  }
   const buttonIndicador = (id) => {
    navigate(`/homepage/${name}/${pagina}/${_id}/${id}`)
   } 
   const deleteItem = () => {
    dispatch(startDeleteItem({pagina,_id}))
    navigate(`/homepage/Aspectoscurriculares`);
    Swal.fire('El item se elimino correctamente',errorMessage,'success');
   }
   const editMeta = () => {
    navigate(`/homepage/${name}/${pagina}/${_id}/edit`)
   }
 
  return (
    <>
     <button className="btn btn-outline-danger ms-5 editatMetas " type="button"
  data-bs-toggle="modal"data-bs-target="#exampleModal" onClick={editMeta}>
 
    <span>Editar</span>
  </button>
    <div className=" container tabla-margin">
      <div className="table-responsive">
  <table className="table table-bordered table-striped table-query table-bg custom-table">
    <thead className="table-dark ">
      <tr>
      <th>Indicador</th>
      <th>{ItemSet.start}</th>
      <th>{ItemSet.start + 1}</th>
      <th>{ItemSet.start + 2}</th>
      <th>{ItemSet.start + 3}</th>
      <th>{ItemSet.start + 4}</th>
      <th>{ItemSet.start + 5}</th>
      <th>{ItemSet.start + 6}</th>
      </tr>
    </thead>
    <tbody>
      {
                firt?.map(event => (
                  <tr>
                  <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : 'boton-next'}`}><button className={` botonCuadroItem ${(event.totalNota === event.total) ? 'bg-success text-light' : 'boton-next text-light'}`} onClick={() => buttonIndicador(event._id)}>{event.metaTitle}</button></th>
                  <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha}</th>
                  <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha2}</th>
                  <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha3}</th>
                  <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha4}</th>
                  <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha5}</th>
                  <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha6}</th>
                  <th className={`${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha7}</th>
                  </tr>
                ))
              }
    </tbody>
  </table>
  </div>
</div>

  <h2 className="text-center">Proyeccion de Eventos</h2>
  <form className="input-group mb-3 container mt-5"onSubmit={onSubmit}>
  
  <input type="text" className="form-control"
   placeholder="Indicador" aria-label="Username"
   onChange={onInputChange}
   value={actEvent || ''}
   name="actEvent"
   />
   

  <input type="number" className="form-control"
   placeholder="Primer año" aria-label="Username"
   onChange={onInputChange}
   value={fecha || ''}
   name="fecha"
   />
   

   <input type="number" className="form-control"
   placeholder="Segundo año" aria-label="Username"
   onChange={onInputChange}
   value={fecha2 || ''}
   name="fecha2"
   />
   <input type="number" className="form-control"
   placeholder="Tercer año" aria-label="Username"
   onChange={onInputChange}
   value={fecha3 || ''}
   name="fecha3"
   />
   <input type="number" className="form-control"
   placeholder="Cuarto año" aria-label="Username"
   onChange={onInputChange}
   value={fecha4 || ''}
   name="fecha4"
   />
   <input type="number" className="form-control"
   placeholder="Quinto año" aria-label="Username"
   onChange={onInputChange}
   value={fecha5 || ''}
   name="fecha5"
   /><input type="number" className="form-control"
   placeholder="Sexto año" aria-label="Username"
   onChange={onInputChange}
   value={fecha6 || ''}
   name="fecha6"
   /><input type="number" className="form-control"
   placeholder="Septimo año" aria-label="Username"
   onChange={onInputChange}
   value={fecha7 || ''}
   name="fecha7"
   />
  <button type='submit' className="btn btn-primary">Agregar</button>
    
  </form>
  <button className="btn btn-outline-danger btn-block boton-back-evento" onClick={backButton}>Volver</button>
    
 

  </>
    
  )
}
