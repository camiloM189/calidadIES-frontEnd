import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeNote } from '../../store/programas/planDeMejoramientoSlice';
import { useForm } from '../../hook/useForm';
import { actualizarNota, borrarNota, obtenerLosFiles, obtenerNota, vaciarTodosLosFiles } from '../../store/programas/programaThunks';
import { Link, useNavigate, useParams } from "react-router-dom"
import { WindowNotes } from './WindowNotes';


export const PruebaSetNotes = () => {
    const dispatch = useDispatch();
    const {setNote,active} = useSelector(state => state.planDeMejoramiento);
    const Navigate = useNavigate();
    
    const {idPrograma,idPlanDeMejoramiento,idOportunidadDeMejora,
        idActividadesDeMejora,idProyeccionDeEventos,idNotas} = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {

        dispatch(obtenerNota({idNotas}))
        console.log(setNote);
        dispatch(vaciarTodosLosFiles())
   
        dispatch(obtenerLosFiles(idNotas))
      
    }, [])

  const [arraysFiles, setArraysFiles] = useState([]);

    const {titulosDeNotas,bodyDeNotas,onInputChange} = useForm('');
  const cerrarNote = () => {
    Navigate(`/homepage/${idPrograma}/${idPlanDeMejoramiento}
    /${idOportunidadDeMejora}/${idActividadesDeMejora}/${idProyeccionDeEventos}`)

  }
  const {files} = useSelector(state => state.planDeMejoramiento);

  const actualizarNote = () => {
    dispatch(actualizarNota({titulosDeNotas,bodyDeNotas,idPlanDeMejoramiento,idPrograma,idOportunidadDeMejora,
      idNotas:setNote._id,idActividadesDeMejora,idProyeccionDeEventos}))
  }
  const borrarNotas = () => {
    dispatch(borrarNota({idNota:setNote._id,idProyeccionDeEventos}))
  }
  const fileData = (event) => {
    const file = event.target.files[0];
    setArraysFiles([...arraysFiles,file])

  }
  return (
    <>
    <WindowNotes/>

     <div className="container  windowNotes">
        <h2 className="text-dark mt-2">Fecha: {`${setNote.dia}/${setNote.mes}/${setNote.start}`}</h2> 
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
            placeholder={setNote.titulosDeNotas || ''}
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
      <div className="imagenArchivo mt-5">
        <div className="container text-center">
          <div className="row">
          {files.map((archivo) => (
              <div className="col col-xs-5 col-md-3 col-lg-2">
                {archivo.resource_type === 'raw' ? (
                  <>
                    <div className="color-danger">

                      <FaFileArchive size={70} className="pdf-icon" onClick={() => downloadImage(archivo)} />
                      <i>{archivo.original_filename}</i>
                    </div>
                  </>
                ) : (
                  <>
                    {archivo.format === 'pdf' ? (
                      <>
                        <div className="color-danger">
                          <FaFilePdf size={70} className="pdf-icon" onClick={() => downloadImage(archivo)} />
                          <i>{archivo.original_filename}</i>
                        </div>
                      </>
                    ) : (
                      <div>
                        <img className="img-fluid" src={archivo.url} alt={archivo.url} onClick={() => downloadImage(archivo)} />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
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
      
      <div className="mb-3 editComponent mb-5">
        
      <form>
         <label htmlFor="fileInput" className="fileInputLabel">
         <i className="bi bi-upload"></i>
         </label>
         <input type="file" id="fileInput" className="uploadFile " />
         </form>

  </div>
    
    </>
  )
}
