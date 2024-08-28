<<<<<<< HEAD
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


export const ProcesosDeTrabajo = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
   
    <div className='container animate__animated animate__backInDown mt-5 mb-5'>
=======
import React from 'react'


export const ProcesosDeTrabajo = () => {
  return (
    <>
   
    <div className='container'>
>>>>>>> 02d322f686694d4a3ca4f372cf75f3c409e0624d
      <h1 className='mb-2'>Proceso de trabajo</h1>
      <section class=" row align-items-lg-center mb-5">
      <article class="col-12 col-lg-6 text-lg-start ">
      <h2>1. Evaluación Inicial:</h2>
            <p className='fs-5'>
            Comenzamos cada colaboración con una evaluación exhaustiva de las necesidades
            y objetivos de la institución educativa. A través de discusiones detalladas y análisis
            profundos, identificamos áreas clave que requieren atención y desarrollo, desde la
            renovación de registros hasta la mejora de procesos
            </p>
        
      </article>
      <article class="col-12 col-lg-6 mb-5">

        <img src="/img/proceso1-100.jpg"  className="me-5 img-arreglando" alt="" />



      </article>





    </section>
    <section class=" row  align-items-lg-center  mb-5">
    <article class="col-12 col-lg-6 text-start text-lg-end  order-lg-1">
    <h2>2. Desarrollo Personalizado:</h2>

    <p className='fs-5'>
    Basándonos en la evaluación inicial, creamos soluciones personalizadas que se
    adaptan a las necesidades únicas de cada institución y programa. Colaboramos
    estrechamente con nuestros clientes para garantizar que nuestras estrategias
    aborden los desafíos específicos que enfrentan
    </p>
      
  
    </article>
    <article class="col-12 col-lg-6 mb-5">

    <img src="/img/proceso2-100.jpg" className="me-5 img-arreglando" alt="" />



    </article>





  </section>



  <section class=" row  align-items-lg-center  mb-5">
    <article class="col-12 col-lg-6 text-start text-lg-start ">
    <h2>3. Cumplimiento Normativo:</h2>
            <p className='fs-5'>
            Una parte integral de nuestro enfoque es asegurar que cada acción y decisión se
            adhiera rigurosamente a las normativas educativas vigentes. Trabajamos en
            estrecha colaboración con los reguladores y organismos pertinentes para garantizar
            que cada programa y proceso cumpla con los requisitos establecidos.
            </p>
          
  
    </article>
    <article class="col-12 col-lg-6 mb-5">
    <img src="/img/proceso3-100.jpg" className="me-5 img-arreglando" alt="" />
  
    </article>
  
  
  
  
  
  </section>


<section class=" row  align-items-lg-center  mb-5">
<article class="col-12 col-lg-6 text-lg-end text-start  order-lg-1 ">
    <h2>4. Acompañamiento Continuo:</h2>
    <p className='fs-5'>
    Nuestro compromiso no termina con la implementación inicial. A lo largo de todo el
    proceso, estamos disponibles para brindar orientación, responder preguntas y
    ajustar estrategias según sea necesario. Nuestro enfoque de acompañamiento
    garantiza que nuestros clientes se sientan apoyados en cada paso del camino.
      </p>
  

  </article>
  <article class="col-12 col-lg-6">


  <img src="/img/proceso4-100.jpg" alt="Descripción de la imagen" className="me-5 img-arreglando"/>




</article>





</section>



<section class=" row  align-items-lg-center  mb-5">
  <article class="col-12 col-lg-6 text-start text-lg-start  ">
     <h2>5. Resultados Exitosos:</h2>
            <p className='fs-5'>
            Nuestro proceso culmina en resultados medibles y tangibles. Desde la obtención
            exitosa de registros calificados hasta la acreditación en alta calidad, nuestros
            clientes experimentan logros que reflejan su dedicación a la mejora educativa y al
            cumplimiento normativo.
            </p>
         
    
  </article>
  <article class="col-12 col-lg-6 mb-5">
  
  <img src="/img/proceso5-100.jpg" className="me-5 img-arreglando"/>
  
  
  
  </article>
  
  <p className='text-center fs-5'>En cada etapa, nuestra metodología combina experiencia técnica con enfoque en la
           colaboración y el empoderamiento. Cada acción que tomamos está al servicio de
           nuestros clientes y de su búsqueda de excelencia académica. A través de nuestro
           proceso de trabajo probado y adaptativo, estamos construyendo un legado de
           transformación y mejora en la educación en el suroccidente colombiano y más allá.</p>
  
  
  
  </section>

<<<<<<< HEAD


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
      <p className='text-white'>Email: calidadies2023@gmail.com</p>
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
=======
      {/* <section className="row align-items-lg-center mb-5">
          <article className=" col-md-7 col-lg-7 col-sm-12 ">
            <h2>1. Evaluación Inicial:</h2>
            <p className='fs-5'>
            Comenzamos cada colaboración con una evaluación exhaustiva de las necesidades
            y objetivos de la institución educativa. A través de discusiones detalladas y análisis
            profundos, identificamos áreas clave que requieren atención y desarrollo, desde la
            renovación de registros hasta la mejora de procesos
            </p>
          </article>

          <article className=" col-5 col-md-5 col-sm-12 ">
          <img src="/img/proceso1-100.jpg" alt="" />
          </article>
        </section>

        <section className="row  align-items-lg-center mb-5">
          <article className="col-md-7 col-7 col-lg-7 ">
          <img src="/img/proceso2-100.jpg" alt="" />
            
          </article>

          <article className="col-5 col-md-5 col-sm-12">
          <h2>2. Desarrollo Personalizado:</h2>

          <p className='fs-5'>
          Basándonos en la evaluación inicial, creamos soluciones personalizadas que se
          adaptan a las necesidades únicas de cada institución y programa. Colaboramos
          estrechamente con nuestros clientes para garantizar que nuestras estrategias
          aborden los desafíos específicos que enfrentan
            </p>
          </article>
        </section>


        <section className="row  align-items-lg-center mb-5">
          <article className="col-md-7 col-7 col-lg-7 col-sm-12">
            <h2>3. Cumplimiento Normativo:</h2>
            <p className='fs-5'>
            Una parte integral de nuestro enfoque es asegurar que cada acción y decisión se
            adhiera rigurosamente a las normativas educativas vigentes. Trabajamos en
            estrecha colaboración con los reguladores y organismos pertinentes para garantizar
            que cada programa y proceso cumpla con los requisitos establecidos.
            </p>
          </article>

          <article className="col-5 col-md-5 col-sm-12 ">
          <img src="/img/proceso3-100.jpg" alt="" />
          </article>
        </section>


        <section className="row  align-items-lg-center mb-5">
          <article className="col-md-7 col-7 col-lg-7 col-sm-12">
          <img src="/img/proceso4-100.jpg" alt="" />
            
          </article>

          <article className="col-5 col-md-5 col-sm-12 ">
          <h2>4. Acompañamiento Continuo:</h2>

          <p className='fs-5'>
          Nuestro compromiso no termina con la implementación inicial. A lo largo de todo el
          proceso, estamos disponibles para brindar orientación, responder preguntas y
          ajustar estrategias según sea necesario. Nuestro enfoque de acompañamiento
          garantiza que nuestros clientes se sientan apoyados en cada paso del camino.
            </p>
          </article>
        </section>


        <section className="row  align-items-lg-center mb-5">
          <article className=" col-md-7 col-7 col-lg-7 col-sm-12">
            <h2>5. Resultados Exitosos:</h2>
            <p className='fs-5'>
            Nuestro proceso culmina en resultados medibles y tangibles. Desde la obtención
            exitosa de registros calificados hasta la acreditación en alta calidad, nuestros
            clientes experimentan logros que reflejan su dedicación a la mejora educativa y al
            cumplimiento normativo.
            </p>
          </article>

          <article className="col-5 col-md-5 col-sm-12 ">
          <img src="/img/proceso5-100.jpg" />
          </article>
        </section>

        <p className='text-center'>En cada etapa, nuestra metodología combina experiencia técnica con enfoque en la
           colaboración y el empoderamiento. Cada acción que tomamos está al servicio de
           nuestros clientes y de su búsqueda de excelencia académica. A través de nuestro
           proceso de trabajo probado y adaptativo, estamos construyendo un legado de
           transformación y mejora en la educación en el suroccidente colombiano y más allá.</p>
 */}


        </div>
        <footer className="bg-dark p-3">
      <div className="container text-center">
      {/* <nav className="d-flex  justify-content-evenly">
      
        <a href="https://facebook.com" target="_blank"><i className="bi bi-facebook fs-3"></i></a>
        <a href="https://twitter.com" target="_blank"><i className="bi bi-twitter fs-3"></i></a>
        <a href="https://github.com" target="_blank"><i className="bi bi-github fs-3"></i></a>
        <a href="https://youtube.com" target="_blank"><i className="bi bi-youtube fs-3"></i></a>
        <a href="https://instagram.com" target="_blank"><i className="bi bi-instagram fs-3"></i></a>
        <a href="https://messenger.com" target="_blank"><i className="bi bi-messenger fs-3"></i></a>
        <a href="https://whatsapp.com" target="_blank"><i className="bi bi-whatsapp fs-3"></i></a>
      </nav> */}
      <small className="text-white">&copy; 2023 Aprendiendo Boostrap</small>
      <p className='text-white'>Email: calidadies2023@gmail.com</p>
>>>>>>> 02d322f686694d4a3ca4f372cf75f3c409e0624d
    </div>
    </footer> 
    </>
  )
}
