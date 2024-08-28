import { useDispatch, useSelector } from "react-redux"
import { WindowNotes } from "./WindowNotes"
import { useForm } from "../../hook/useForm";
import { crearNotas, obtenerLaFechaDeOportunidadDeMejora } from "../../store/programas/programaThunks";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaFilePdf, FaFileArchive  } from 'react-icons/fa';
import Swal from "sweetalert2";
import { ModalSeguimiento } from "./ModalSeguimiento";
import { changeSeguimiento } from "../../store/programas/oportunidadDeMejoraSlice";
import { onDay, onDescripcion, onFliesDeSeguimiento, onMes, onStart, onTituloDeSeguimiento } from "../../store/programas/seguimientoSlice";



export const CrearNotes = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [arraysFiles, setArraysFiles] = useState([]);

  const {titulosDeNotas,bodyDeNotas,onInputChange} = useForm('');
  const {idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos} = useParams();
  const {errorMessage} 
  = useSelector(state => state.planDeMejoramiento);

  const crearNotes = () => {
    const fechaActual = new Date();
    const start = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; 
    const dia = fechaActual.getDate();
 

    dispatch(changeSeguimiento())
  
    dispatch(onTituloDeSeguimiento(titulosDeNotas));
    dispatch(onDescripcion(bodyDeNotas));

    dispatch(onStart(start));
    dispatch(onDay(dia));
    dispatch(onMes(mes));

    


        
  }
  const {agregarSeguimiento} = useSelector(state => state.oportunidadDeMejoraSlice);


  const backNotes = () => {
    navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}/${idOportunidadDeMejora}/${idActividadesDeMejora}/${idProyeccionDeEventos}`)

  }
  const fileData = (event) => {
    const file = event.target.files[0];
   
    setArraysFiles([...arraysFiles,file]);
    // dispatch(startUpdateFiles({file}));
  }

  return (
    <>
    {
      (agregarSeguimiento) ?
      <>
      <ModalSeguimiento arraysFiles={arraysFiles}/>
      <WindowNotes/>
      <div className="container windowNotes">
      <div className="mb-3">
        <p className="form-label text-dark text-md-start text-sm-end text-end mt-3">Titulo de seguimiento</p>
      {/* <label for="exampleFormControlInput1 " className="form-label text-dark text-end mt-3">Titulo de seguimiento</label> */}
      <input type="text" className="form-control"
       id="exampleFormControlInput1" 
       placeholder="Titulo"
       value={titulosDeNotas}
       onChange={onInputChange}
       name="titulosDeNotas"
       />
    </div>
    <div className="mb-3">
      <p className="form-label text-dark text-md-start text-end text-sm-end mt-3">Notas</p>
      {/* <label for="exampleFormControlTextarea1" className="form-label text-dark"></label> */}
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
      value={bodyDeNotas}
      onChange={onInputChange}
      name="bodyDeNotas"
      ></textarea>
    </div>
    </div>
    
    <div className="imagenArchivo">
      <div className="container text-dark">
        <div className="row">
          {arraysFiles.map((url) => (
            <div className="col col-xs-5 col-md-3 col-lg-2 mt-5 me-5 ">
            
          <div className="col-3 file-cuadrado nuevo">
          <FaFileArchive size={70} className="pdf-icon"/>
               <i className="texto-url">{url.name}</i>
       </div>
       </div>
         
          ))}
        </div>
      </div>
    </div> 
    
    <button
    className="btn btn-outline-primary btn-block boton-guardar" type='submit' onClick={crearNotes} >
                <i className="far fa-save"></i>
                <span> Guardar </span>
    </button>
    <button
    className="btn btn-outline-danger btn-block boton-regresar-notes" type='submit' onClick={backNotes}>
    <span> Volver </span>
    </button>
    
    <div className="mb-3 subirArchivos mb-5">
    <p>Subir Archivos</p>
    
      <form onChange={fileData}>
      <label htmlFor="fileInput" className="fileInputLabel">
      <i className="bi bi-upload botonUpdate-file"></i>
    </label>
    <input type="file" id="fileInput" className="uploadFile" />
     </form>
      </div>
      
      </>
      :
      <>
      <WindowNotes/>
      <div className="container windowNotes">
      <div className="mb-3">
        <p className="form-label text-dark text-md-start text-sm-end text-end mt-3">Titulo de seguimiento</p>
      {/* <label for="exampleFormControlInput1 " className="form-label text-dark text-end mt-3">Titulo de seguimiento</label> */}
      <input type="text" className="form-control"
       id="exampleFormControlInput1" 
       placeholder="Titulo"
       value={titulosDeNotas}
       onChange={onInputChange}
       name="titulosDeNotas"
       />
    </div>
    <div className="mb-3">
      <p className="form-label text-dark text-md-start text-end text-sm-end mt-3">Notas</p>
      {/* <label for="exampleFormControlTextarea1" className="form-label text-dark"></label> */}
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
      value={bodyDeNotas}
      onChange={onInputChange}
      name="bodyDeNotas"
      ></textarea>
    </div>
    </div>
    
    <div className="imagenArchivo">
      <div className="container text-dark">
        <div className="row">
          {arraysFiles.map((url) => (
            <div className="col col-xs-5 col-md-3 col-lg-2 mt-5 me-5 ">
            
          <div className="col-3 file-cuadrado nuevo">
          <FaFileArchive size={70} className="pdf-icon"/>
               <i className="texto-url">{url.name}</i>
       </div>
       </div>
         
          ))}
        </div>
      </div>
    </div> 
    
    <button
    className="btn btn-outline-primary btn-block boton-guardar" type='submit' onClick={crearNotes} >
                <i className="far fa-save"></i>
                <span> Guardar </span>
    </button>
    <button
    className="btn btn-outline-danger btn-block boton-regresar-notes" type='submit' onClick={backNotes}>
    <span> Volver </span>
    </button>
    
    <div className="mb-3 subirArchivos mb-5">
    <p>Subir Archivos</p>
    
      <form onChange={fileData}>
      <label htmlFor="fileInput" className="fileInputLabel">
      <i className="bi bi-upload botonUpdate-file"></i>
    </label>
    <input type="file" id="fileInput" className="uploadFile" />
     </form>
      </div>
    </>
    
    }
 
  </>
  )
}
