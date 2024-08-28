
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { WindowNotesEventsComponent } from "./WindowNotesEventsComponent";
import { useForm } from "../../hook/useForm";
import { useDispatch, useSelector } from "react-redux";
import { StartNotes, startUpdate, startUpdateFiles } from "../../store/actividades/notesThunks";
import { useNavigate, useParams } from "react-router-dom";
import { startItemEventId, startUpdateItem } from "../../store/actividades/actividadesThunks";
import { useEffect, useState } from "react";
import { FaFilePdf, FaFileArchive  } from 'react-icons/fa';

export const CreateNotesComponent = () => {
  const {onInputChange,title,body} = useForm('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { _id,pagina,id,name } = useParams();
  const {file} = useSelector(state => state.notes);


  const [type, setType] = useState(false);
  const [arraysFiles, setArraysFiles] = useState([]);

 
  useEffect(() => {
    dispatch(startItemEventId({_id,pagina}));
    dispatch(startUpdateItem({_id,pagina}));

  }, [_id])

  
  const save = async() => {
    // dispatch(startUpdateFiles({arraysFiles}));
    navigate(`/homepage/${name}/${pagina}/${_id}/${id}`);
    dispatch(StartNotes({title,body,_id,pagina,id,arraysFiles}));
    // setTimeout(() => {
    //    dispatch(StartNotes({title,body,_id,pagina,id,arraysFiles}));
    //  }, "2000");
   }

  const buttonBack = () => {
    navigate(`/homepage/${name}/${pagina}/${_id}/${id}`);
  }
  const fileData = (event) => {
    const file = event.target.files[0];
    setArraysFiles([...arraysFiles,file])
    // dispatch(startUpdateFiles({file}));
  }

 



return (
  <>
  <WindowNotesEventsComponent/>
  <div className="container windowNotes">
  <div className="mb-3">
  <label for="exampleFormControlInput1 " className="form-label text-dark mt-3">Notes Title</label>
  <input type="text" className="form-control"
   id="exampleFormControlInput1" 
   placeholder="Titulo"
   value={title}
   onChange={onInputChange}
   name="title"
   />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label text-dark">Body Note</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
  value={body}
  onChange={onInputChange}
  name="body"
  ></textarea>
</div>
</div>

{/* <div className="imagenArchivo">
  <div className="container text-center">
    <div className="row">
      {file.map((url) => (
        <div className="col col-xs-5 col-md-3 col-lg-2">
          {url.resource_type === 'raw' ? (
            <>
              <div className="color-danger">
              
                <FaFileArchive size={70} className="pdf-icon" />
                <i>{url.original_filename}</i>
              </div>
            </>
          ) : (
            <>
             
              {url.format === 'pdf' ? (
             
                <>
                
                <div className="color-danger">
                <FaFilePdf  size={70} className="pdf-icon" />
                <i>{url.original_filename}</i>
                </div>
               </>
              ) : (
      
                <div>
                  <img className="img-fluid" src={url.url} alt={url.url} />
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  </div>
</div>  */}

<div className="imagenArchivo">
  <div className="container text-dark">
    <div className="row">
      {arraysFiles.map((url) => (
        <div className="col-3 file-cuadrado">
           <FaFileArchive size={70} className="pdf-icon" />
                <i className="texto-url">{url.name}</i>
        </div>
      ))}
    </div>
  </div>
</div> 


<button
className="btn btn-outline-primary btn-block boton-guardar" type='submit' onClick={save} >
            <i className="far fa-save"></i>
            <span> Guardar </span>
</button>
<button
className="btn btn-outline-danger btn-block boton-regresar-notes" type='submit' onClick={buttonBack}>
<span> Volver </span>
</button>
<div className="mb-3 subirArchivos mb-5">
  <form onChange={fileData}>
  <label htmlFor="fileInput" className="fileInputLabel">
  <i className="bi bi-upload botonUpdate-file"></i>
</label>
<input type="file" id="fileInput" className="uploadFile" />
 </form>
  </div>
  </>
)
}
