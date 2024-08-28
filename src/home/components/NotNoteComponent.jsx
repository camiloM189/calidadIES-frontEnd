import { useNavigate, useParams } from "react-router-dom";
import { WindowNotesEventsComponent } from "./WindowNotesEventsComponent"
import { useEffect, useState } from "react";
import { startDeleteMetas, startItemEventId, startUpdateItem } from "../../store/actividades/actividadesThunks";
import { useDispatch, useSelector } from "react-redux";
import { SetActiveNote } from "./SetActiveNote";
import Swal from "sweetalert2";
import { getTotalNotes } from "../../helpers/getTotalNotes";



export const NotNoteComponent = () => {
  const navigate = useNavigate();
  const {pagina,_id,id,name} = useParams();
  const dispatch = useDispatch();
  const {active,metas,cont} = useSelector(state => state.notes);
  const {errorMessage,ItemSet,itemUpdate} = useSelector(state => state.actividades);
  const [total, setTotal] = useState(0);
  const [totalNote, setTotalNote] = useState(0);

 
    
 
  useEffect(() => {
    if(itemUpdate.length > 0){
      const [{listItem}] = itemUpdate;
      const {metas} = listItem;
      const trueMeta = metas.filter(meta => meta._id === id);
      const [{total}] = trueMeta;
      const [{totalNota}] = trueMeta;

 
      setTotal(total);
      setTotalNote(totalNota);
     } 
  }, [itemUpdate])

  useEffect(() => {
    dispatch(startItemEventId({_id,pagina}));
    dispatch(startUpdateItem({_id,pagina,id}));
  }, [id]);


  const addNotes = () => {
    navigate(`/homepage/${name}/${pagina}/${_id}/${id}/create`);
  }
  const backButton = () => {
    navigate(`/homepage/${name}/${pagina}/${_id}`);
  } 
  const deleteButton = () => {
    dispatch(startDeleteMetas({_id,pagina,id}));
    navigate(`/homepage/${name}/${pagina}/${_id}`);
    Swal.fire('El item se elimino correctamente',errorMessage,'success');
  } 


  
    
  return (
    <>
  <WindowNotesEventsComponent/>
    {
      (active) ?
      <SetActiveNote/>
      : <div className='noNote'>
        <h1 className="text-light text-center center-text">{metas}</h1>
      <h3 className="text-light text-center center-text">Crea una nota</h3>
      {/* <button className="btn btn-danger boton-borrar-metas" type="button" onClick={deleteButton}
  data-bs-toggle="modal"data-bs-target="#exampleModal" >
    <i className="bi bi-trash"></i>
    <span>Borrar</span>
    </button> */}
    <div className="d-flex flex-row-reverse">
            <button className="btn ms-5 btn-danger boton-borrar-metas" type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-trash"></i>
              <span>Borrar</span>
            </button>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Borrar</h1>
                </div>
                <div class="modal-body">
                  ¿Seguro que quieres borrar esta actividad?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal" 
                  onClick={deleteButton}
                  >Borrar</button>
                </div>
              </div>
            </div>
      </div>
      {/* ${total === totalNote ? 'd-none' : ''} */}
      <button className={`${total === totalNote ? 'd-none' : ''} btn btn-dark boton-posicion `} onClick={addNotes}>+</button>
      <button className="btn btn-outline-danger btn-block boton-regresar-notes" onClick={backButton}>Volver</button>
      
      </div>
    }
   
    </>
  )
}
