import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


export const Servicios = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>

    <div className='container mt-5 animate__animated animate__backInDown mb-5'>
  <section id="servicios"class="row min-vh-100 align-items-lg-center ">
          <article class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="card mx-auto  mb-3 cardServicios " >
              <div className='imgBackground'>
              <img src="/img/servicio1.png" class="card-img-top bg-third-color " alt="..."/>
              </div>
              <div class="card-body">
                <h5 class="card-title titulosDeCard">Renovación y Ampliación de Registros Calificados</h5>
                <p class="card-text">Guiamos a las instituciones
                de educación superior a través de los procesos 
                de Renovación de Registros
                Calificados, asegurando que cada programa c
                umpla con los requisitos establecidos
                y esté alineado con las últimas 
                regulaciones normativas</p>
                
              </div>
            </div>
          </article>
          <article class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="card mx-auto  mb-3 cardServicios">
            <div className='imgBackground'>
              <img src="/img/servicio2.png" class="card-img-top bg-third-color " alt="..."/>
              </div>
              <div class="card-body">
                <h5 class="card-title">Creación de Programas Académicos y Ampliación de Oferta:
                </h5>
                <p class="card-text">Colaboramos en la
                 concepción y desarrollo de programas educativos innovadores y relevantes,
                 identificando oportunidades para ampliar la oferta educativa y diversificar la
                 propuesta académica.</p>
               
              </div>
            </div>
          </article>
          <article class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="card mx-auto  mb-3 cardServicios">
            <div className='imgBackground'>
              <img src="/img/servicio3.png" class="card-img-top bg-third-color " alt="..."/>
              </div>
              <div class="card-body">
                <h5 class="card-title">Documentación 
                  y Cumplimiento Normativo:
                 
                </h5>
                <p class="card-text">Proporcionamos soporte integral en
                la recopilación y preparación de la
                 documentación requerida para los procesos de
                registro y ampliación, garantizando 
                el cumplimiento exhaustivo de los lineamientos
                normativos</p>
              
              </div>
            </div>
          </article>
          <article class="col-12 col-md-6 col-lg-6 d-flex">
            <div class="card mx-auto mb-3 cardServicios">
            <div className='imgBackground'>
              <img src="/img/servicio4.png" class="card-img-top bg-third-color " alt="..."/>
              </div>
              <div class="card-body">
                <h5 class="card-title">Acompañamiento 
                  en Procesos de Acreditación:
                 
                </h5>
                <p class="card-text">  Brindamos un apoyo completo
                  en los complejos procesos de acreditación, 
                  desde la planificación y preparación
                  inicial hasta la presentación final, asegurando 
                  que cada programa esté listo para
                  obtener el reconocimiento de alta calidad.</p>
               
              </div>
            </div>
          </article>
          <article class="col-12 col-md-6 col-lg-6 d-flex">
            <div class="card mx-auto mb-3 cardServicios">
            <div className='imgBackground'>
              <img src="/img/servicio5.png" class="card-img-top bg-third-color " alt="..."/>
              </div>
              <div class="card-body">
                <h5 class="card-title titulosDeCard">Preparación de Documentos
                  y Evaluación de Requisitos:
                 
                </h5>
                <p class="card-text">  Trabajamos en
                  estrecha colaboración con las instituciones 
                  para crear documentos de alta calidad
                  que reflejen sus fortalezas y logros educativos, 
                  y realizamos una revisión exhaustiva
                  de los requisitos para garantizar 
                  la presentación exitosa en los procesos de
                  acreditación.</p>
               
              </div>
            </div>
          </article>

        </section>
        </div>
    {/* <footer className="bg-dark p-3">
      <div className="container text-center">
      <small className="text-white">

        
      <div>
        <div style={{width:'20%',cursor:'pointer'}}>
          <img src="/img/calidadies.png" alt="" style={{width:'100%'}}/>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <Link to={'/Servicios'}>
          <p className='text-white' style={{cursor:'pointer'}}>servicios</p>
          </Link>
          <Link to={'/Conocenos'}>
          <p className='text-white' style={{cursor:'pointer'}}>conocenos</p>
          </Link>
        
          <Link to={'/ProcesosDeTrabajo'}>
          <p className='text-white' style={{cursor:'pointer'}}>Procesos de trabajo</p>
          </Link>
          <Link to={'/Contactanos'}>
          <p className='text-white' style={{cursor:'pointer'}}>contactanos</p>
          </Link>
    
          </div>
        </div>

      </small>
     

    </div>
    </footer>  */}

    <footer className="bg-dark p-3">
      <div className="container text-center">
      <small className="text-white">  

      <div className='div-footer'>
          <div className='footer-img-div'>
            <img src="/img/calidadies.png" alt="" className='img-fluid'/>
          </div>
  
        <div className='contenedor-footer'>
          <div className='contenedor-footer-p1'>
            <p className='footer-contenido' data-bs-toggle="modal" data-bs-target="#exampleModal1">Quienes somos</p>
            
            <div className="modal fade text-dark" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Quienes Somos</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  En Calidad IES, somos una firma de consultoría y asesoría que tiene su origen en la pasión por la educación y el compromiso con la excelencia académica. Fundada en el año 2023 en el suroccidente colombiano, nos enorgullecemos de ser líderes en la transformación de los desafíos educativos en oportunidades de crecimiento y mejora. Nuestra profunda comprensión de las regulaciones educativas y nuestra dedicación a la calidad nos han llevado a ser un socio confiable para instituciones que buscan sobresalir en un entorno académico en constante evolución
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                   
                  </div>
                </div>
              </div>
            </div>










            <p className='footer-contenido ' data-bs-toggle="modal" data-bs-target="#exampleModal2">Mision</p>
            <div className="modal fade text-dark" id="exampleModal2" tabindex="-2" aria-labelledby="exampleModalLabel2" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel2">Mision</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  Nuestra misión en Calidad IES es ser el aliado de confianza de las instituciones educativas en el suroccidente colombiano, brindando servicios de consultoría y asesoría excepcionales para impulsar la excelencia académica y el cumplimiento normativo. Nos dedicamos a transformar los desafíos en oportunidades, acompañando a nuestros clientes en la creación, renovación y ampliación de programas educativos de alta calidad.
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                   
                  </div>
                </div>
              </div>
            </div>




            <p className='footer-contenido' data-bs-toggle="modal" data-bs-target="#exampleModal3">Vision</p>

            <div className="modal fade text-dark" id="exampleModal3" tabindex="-3" aria-labelledby="exampleModalLabel3" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel2">Vision</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  En el horizonte del año 2028, visualizamos a Calidad IES como la empresa líder indiscutible en el suroccidente colombiano, reconocida por su capacidad para impulsar la transformación positiva en el ámbito educativo. Como referente en la región, seremos admirados por nuestra experiencia, integridad y contribución a la mejora continua de la calidad educativa. Trabajaremos incansablemente para nutrir un entorno donde la innovación y el cumplimiento normativo se unan armoniosamente, elevando así los estándares de la educación en la región. A través de nuestra dedicación, forjaremos alianzas duraderas que inspiren a instituciones a aspirar a lo mejor y afrontar el futuro con confianza y éxito.
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  
                  </div>
                </div>
              </div>
            </div>







            <p className='footer-contenido' data-bs-toggle="modal" data-bs-target="#exampleModal4">Objetivo</p>
            <div className="modal fade text-dark" id="exampleModal4" tabindex="-4" aria-labelledby="exampleModalLabel4" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel4">Objetivo</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  Nuestro objetivo general en Calidad IES es ser el principal motor de transformación y excelencia en el ámbito educativo del suroccidente colombiano, mediante la provisión de servicios de consultoría y asesoría que optimicen la calidad de los programas académicos, promuevan la innovación pedagógica y aseguren elcumplimiento riguroso de las normativas educativas.
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='contenedor-footer-p2' >

            <p className='footer-contenido' data-bs-toggle="modal" data-bs-target="#exampleModal5">Servicios</p>
            <div className="modal fade text-dark" id="exampleModal5" tabindex="-5" aria-labelledby="exampleModalLabel5" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel5">Servicios</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <ol>
                      <li>Renovación y Ampliación de Registros Calificados</li>
                      <li>Creación de Programas Académicos y Ampliación de Oferta</li>
                      <li>Documentación y Cumplimiento Normativo</li>
                      <li>Acompañamiento en Procesos de Acreditación</li>
                      <li>Preparación de Documentos y Evaluación de Requisitos </li>

                    </ol>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                   
                  </div>
                </div>
              </div>
            </div>








            <p className='footer-contenido' data-bs-toggle="modal" data-bs-target="#exampleModal6">Procesos de trabajo</p>

            <div className="modal fade text-dark" id="exampleModal6" tabindex="-6" aria-labelledby="exampleModalLabel6" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel6">Procesos de trabajo</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <ol>
                      <li>Evaluación Inicial</li>
                      <li>Desarrollo Personalizado</li>
                      <li>Cumplimiento Normativo</li>
                      <li>Acompañamiento Continuo</li>
                      <li>Resultados Exitosos</li>        
                    </ol>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                  </div>
                </div>
              </div>
            </div>






            <p className='footer-contenido' data-bs-toggle="modal" data-bs-target="#exampleModal7">Contactanos</p>

            <div className="modal fade text-dark" id="exampleModal7" tabindex="-7" aria-labelledby="exampleModalLabel7" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel7">Contactanos</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Email: calidadies2023@gmail.com

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                
                  </div>
                </div>
              </div>
            </div>






            <p className='footer-contenido' data-bs-toggle="modal" data-bs-target="#exampleModal8">Introduccion</p>
            <div className="modal fade text-dark" id="exampleModal8" tabindex="-8" aria-labelledby="exampleModalLabel8" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel8">Introduccion</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  En el dinámico panorama educativo actual, la excelencia y la innovación son fundamentales para garantizar la calidad de la formación académica. Fundada en el año 2023, Calidad IES emerge como una opción de orientación y apoyo para instituciones educativas en su búsqueda constante de mejora y cumplimiento normativo. Estamos dedicados a transformar los desafíos regulatorios y administrativos en oportunidades para la mejora continua y el crecimiento académico. Con una pasión compartida por la educación de calidad, nos enorgullece brindar servicios de consultoría y asesoría especializados que guían el camino hacia el éxito académico.
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                  </div>
                </div>
              </div>
            </div>


          </div>
     

        </div>   
      </div>








      </small>
      {/* <p className='text-white' style={{marginTop:'5%'}}>Email: calidadies2023@gmail.com</p> */}
    </div>
    </footer> 
    </>
  )
}
