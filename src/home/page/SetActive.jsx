import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chageMode, chagemodeFalse, changeModeFalse, closeNote } from '../../store/programas/planDeMejoramientoSlice';
import { useForm } from '../../hook/useForm';
import { actualizarFiles, actualizarNota, borrarBaseDedatosFiles, borrarFilesDeCloudinary, borrarNota, borrarUnFilesDeCloudinary, borrarUnoDeLaBaseDeDatosFiles, obtenerLosFiles, vaciarTodosLosFiles } from '../../store/programas/programaThunks';
import { Link, useNavigate, useParams } from "react-router-dom"
import { FaFileArchive, FaFilePdf } from "react-icons/fa";
import Swal from 'sweetalert2';

export const SetActive = () => {
    const dispatch = useDispatch();
    const {setNote,active,modeEdit} = useSelector(state => state.planDeMejoramiento);

    
    const {idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos} = useParams();

    
    
  const [arraysFiles, setArraysFiles] = useState([]);

    const {titulosDeNotas,bodyDeNotas,onInputChange} = useForm('');
  const cerrarNote = () => {
    dispatch(closeNote());

  }
  const {files,errorMessage} = useSelector(state => state.planDeMejoramiento);

  const actualizarNote = () => {

    dispatch(actualizarNota({titulosDeNotas,bodyDeNotas,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,
      idNotas:setNote._id,idActividadesDeMejora,idProyeccionDeEventos}))
    if (arraysFiles.length > 0) {
      console.log(setNote);
      dispatch(actualizarFiles({files:arraysFiles,idNota:setNote._id,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,idActividadesDeMejora,idProyeccionDeEventos}))
    }
    Swal.fire('La nota se ha Actualizado con exito',errorMessage,'success')


  }
  const borrarNotas = () => {
    dispatch(borrarNota({idNota:setNote._id,idProyeccionDeEventos,idPlanDeMejoramiento,idActividadesDeMejora}))
    dispatch(borrarFilesDeCloudinary({files}))
    const {_id} = setNote
    const idNotas = _id;
    dispatch(borrarBaseDedatosFiles(idNotas,files))
    Swal.fire('La nota se ha borrado con exito',errorMessage,'success')
  }
  const downloadImage = async (archivo) => {

    if (archivo.resource_type === 'raw') {
      const response = await fetch(archivo.url);
      const blob = await response.blob();

      const link = document.createElement('a');

      link.href = URL.createObjectURL(blob);

      link.download = `${archivo.original_filename}.zip`;

      link.click();
    }
    if (archivo.resource_type === 'image') {
      const response = await fetch(archivo.url);
      const blob = await response.blob();

      const link = document.createElement('a');

      link.href = URL.createObjectURL(blob);

      link.download = `${archivo.original_filename}`;

      link.click();
    }
  };

  const fileData = (event) => {
    if(!event.target.files[0])return;
    const file = event.target.files[0];
    setArraysFiles([...arraysFiles,file])

  }
  const borrarUnFile = (public_id) => {
    dispatch(borrarUnFilesDeCloudinary({public_id}))
    const {_id} = setNote
    const idNotas = _id;
    dispatch(borrarUnoDeLaBaseDeDatosFiles(idNotas,public_id))
    changeModeFalseActive()
    Swal.fire('El archivo se ha borrado con exito',errorMessage,'success')

  }
  const changeMode = () => {
    dispatch(chageMode())
    if(modeEdit === true){
      dispatch(chagemodeFalse())
    }
  }
  const changeModeFalseActive = () => {
    dispatch(changeModeFalse())

  }
  
  return (
   <>
    <div className="container  windowNotes">
      
        <h2 className="text-dark mt-2 tituloDeNotas">Fecha: {`${setNote.dia}/${setNote.mes}/${setNote.start}`}</h2> 
        <div className="mb-3">
          <div className="d-flex flex-row-reverse">
            <button className="btn btn-outline-danger" type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={borrarNotas}
            
            >
              <i className="bi bi-trash"></i>
              <span>Borrar</span>
            </button>

          </div>
          <label for="exampleFormControlInput1 " className="form-label text-dark mt-3">Titulo de Nota</label>
          <input type="text" className="form-control"
            id="exampleFormControlInput1"
            placeholder={setNote.titulosDeNotas}
            value={titulosDeNotas}
            onChange={onInputChange}
            name='titulosDeNotas'
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label text-dark">Cuerpo de la Nota</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
             placeholder={setNote.bodyDeNotas || ''}
             value={bodyDeNotas}
             onChange={onInputChange}
             name="bodyDeNotas"
          ></textarea>
        </div>
      </div>

      <div className="imagenArchivo2 mt-5">
        <div className="container text-center">
          <div className="row">

          {files.map((archivo) => (
              <div className="col col-xs-5 col-md-3 col-lg-2 col-12 mt-5 me-5 ">
                {archivo.resource_type === 'raw' ? (
                  
                  <>

                  <div className="col-3 file-cuadrado">
                             <FaFileArchive size={70} className="pdf-icon iconopdf" onClick={() => downloadImage(archivo)} />
                                  <i className="texto-url">{archivo.original_filename}</i>
                          </div>
    



{/* 
                    <div className="color-danger">
                      
                      <FaFileArchive size={70} className="pdf-icon" onClick={() => downloadImage(archivo)} />
                      <i class={`${(modeEdit === true) ? 'bi bi-dash-circle text-danger BorrarFilePdf' : 'd-none'}`} onClick={() => borrarUnFile(archivo.public_id)}></i>
                      <i>{archivo.original_filename}</i>
                    </div> */}
                  </>
                ) : (
                  <>
                    {archivo.format === 'pdf' ? (
                      <>
                        <div className="col-3 file-cuadrado mb-5 me-5" >
                             <FaFileArchive size={70} className="pdf-icon iconopdf" onClick={() => downloadImage(archivo)} />
                                  {/* <i className="texto-url">{archivo.original_filename}</i> */}
                                  <i class={`${(modeEdit === true) ? 'bi bi-dash-circle text-danger BorrarFilePdf' : 'd-none'}`} onClick={() => borrarUnFile(archivo.public_id)}></i>
                          <i>{archivo.original_filename}</i>
                          </div>
                        {/* <div className="color-danger">
                          <FaFilePdf size={70} className="pdf-icon" onClick={() => downloadImage(archivo)} />
                          <i className={`${(modeEdit === true) ? 'bi bi-dash-circle text-danger BorrarFilePdf' : 'd-none'}`} onClick={() => borrarUnFile(archivo.public_id)}></i>
                          <i>{archivo.original_filename}</i>
                        </div> */}
                    
                      </>
                    ) : (
                      <div className='iconopdf' >
                          {/* Arreglar lo de eliminar  */}
                        <i class={`${(modeEdit === true) ? 'bi bi-dash-circle text-danger borrar-files-icon' : 'd-none'}`} onClick={() => borrarUnFile(archivo.public_id)}></i>
          {/* <li className={`${(active.calidadDeContenido === 'Denominacion') ? 'mb-1' : 'd-none'}`} > */}
                
                        <img className="img-fluid" src={archivo.url} alt={archivo.url} onClick={() => downloadImage(archivo)} />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
               {
              arraysFiles.map(arrayFile => (
                <div className="col col-xs-5 col-md-3 col-lg-2 mt-5 me-5 ">
                {/* <div className="col-3 file-cuadrado">
             
                <FaFileArchive size={70} className="pdf-icon"  />
                <i class={`${(modeEdit === true) ? 'bi bi-dash-circle text-danger borrar-files-icon' : 'd-none'}`} onClick={() => borrarUnFile(arrayFile.public_id)}></i>
                     <i className="texto-url">{arrayFile.name}</i>
               </div> */}
              <div className="col-3 file-cuadrado nuevo">
              <FaFileArchive size={70} className="pdf-icon"/>
                   <i className="texto-url">{arrayFile.name}</i>
           </div>
           </div>
                
              ))
            }
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline-primary boton-guardar" type='submit' onClick={actualizarNote}>
        <span> Actualizar </span>
      </button>
      <button
        className="btn btn-outline-danger btn-block boton-regresar-notes" type='submit' onClick={cerrarNote}>
        <span> Volver </span>
      </button>

      <button className='btn btn-outline-danger editar-files' onClick={changeMode}>Editar</button>
        
      <div className="subirArchivos2 mb-5">
        <p>Subir Archivos</p>
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
