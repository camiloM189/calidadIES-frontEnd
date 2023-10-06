import React from 'react'
import { Link } from 'react-router-dom'


export const HomePageCalidadies = () => {
  return (
    <>
  <div className='text-center animate__animated animate__backInDown '>
          <img src="/img/IMAGENDefinitivaDeHomePage-100.jpg" className='img-fluid imgHomePage' />
     </div>
      <main className='animate__animated animate__backInDown'>
      
        <div className='container '>
          <section className='row' >
            <article className='col-md-6 col-12'>
              <h1>Introducción</h1>
                  
                  <p className='justificarTexto'> En el dinámico panorama educativo actual, la excelencia y la innovación son
            fundamentales para garantizar la calidad de la formación académica. Fundada en el
            año 2023, Calidad IES emerge como una opción de orientación y apoyo para
            instituciones educativas en su búsqueda constante de mejora y cumplimiento
            normativo. Estamos dedicados a transformar los desafíos regulatorios y
            administrativos en oportunidades para la mejora continua y el crecimiento
            académico. Con una pasión compartida por la educación de calidad, nos
            enorgullece brindar servicios de consultoría y asesoría especializados que guían el
            camino hacia el éxito académico.</p>
            <br />
            <br />
            <h5>¿Quieres conocer nuestros servicios?</h5>

            <Link to={'/Servicios'}>
            <button className='btn btn-primary mb-5'>Servicios</button>
            </Link>
            </article>
            <article className='col-6'></article>
          </section>


          <section className='row' >
            <article className='col-6'>
              
            </article>
            <article className='col-md-6 col-12'>
                  
                  <p className='justificarTexto'> Nuestro compromiso radica en empoderar a las instituciones educativas en la
           construcción y consolidación de programas académicos de alto nivel. Somos el
           socio confiable que facilita procesos complejos, como la renovación de registros
           calificados, ampliaciones de registros y la creación de programas con acreditación
           de la más alta calidad. Nos dedicamos incansablemente a asegurar que cada paso
           del proceso se alinee con las normativas más recientes, proporcionando a nuestros
           clientes la confianza y tranquilidad para innovar y llevar a las instituciones al más
           alto nivel.</p>

            <Link to={'/Conocenos'}>
            <button className='btn btn-primary mb-5'>Conocenos</button>
            </Link>

            </article>
          </section>



          <section className='row' >
            <article className='col-md-6 col-12'>
                
            <p className='justificarTexto'> El tejido de nuestra reputación está formado por colaboraciones fructíferas con
               diversas instituciones educativas, con un enfoque particular en el respaldo de la
               Universidad del Valle. Desde programas de doctorado hasta programas
               tecnológicos, nuestra huella se extiende a través de una variedad de disciplinas
               académicas. Nuestra visión es ser reconocidos no solo como expertos en
               normativas y procesos, sino también como defensores inquebrantables de la calidad
               educativa. En Calidad IES, no solo creamos soluciones; forjamos relaciones de
               confianza que nutren el potencial educativo y dan forma a un futuro de excelencia
               académica.</p>
               <Link to={'/ProcesosDeTrabajo'}>
               <button className='btn btn-primary mb-5'>Procesos De Trabajo</button>
               </Link>
            </article>
            <article className='col-6'>
         
                
            

            </article>
          </section>

        </div>
      </main>
  
    <footer className="bg-dark p-3">
      <div className="container text-center">
      <small className="text-white">&copy; 2023 Aprendiendo Boostrap</small>
      <p className='text-white'>Email: calidadies2023@gmail.com</p>
    </div>
    </footer> 
  </>
  )
}
