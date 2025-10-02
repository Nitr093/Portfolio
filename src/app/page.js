import Image from "next/image";
import styles from "../styles/estilo.css";

export default function Home() {
  return (
    <main>
      <div>
        <header style={{opacity: '0.8', userSelect: 'none'}}>          
          <h1 className="profile-img-placeholder">Agustin Nicolas Milani</h1>          
          <p>Desarrollador Web | Proyectos en React y Diseño Responsivo</p>
          <div className="contact-info">
            <div className="contact-item">
              <a href="mailto:anmilani.dev@gmail.com"><i className="fa-solid fa-envelope fa-fade"></i> anmilani.dev@gmail.com</a>
            </div>
            <div className="contact-item">
              <a href="https://www.linkedin.com/in/agustin--milani/" target="_blank"><i className="fa-brands fa-linkedin fa-fade"></i> LinkedIn</a>
            </div>
            <div className="contact-item">
              <a href="https://github.com/Nitr093" target="_blank"><i className="fa-brands fa-github fa-fade"></i> GitHub</a>
            </div>
          </div>
        </header>

        <section className="parallax-section container">
          <h2 id="mi">UN POCO SOBRE MI</h2>
          <hr></hr>
          <p>Soy un apasionado por la tecnología y la informática.
            <br></br>
            Este año, 2025, hice mi primer contacto academicamente con una diplomatura en Desarrollo web
            Full Stack con react en la UTN.BA. Donde descubrí mi entusiasmo por crear soluciones digitales innovadoras.
            Actualmente estudio una Tecnicatura en Programacion en la UTN de Avellaneda.
            Mi intencion hacia el futuro es enfocarme en Ciberseguridad, Ciencia de Datos, Machine Learning y IA 
            para generar chatbots y automatizaciones.
            <br></br>
            <br></br>
            Complemento mi perfil técnico con seis años de experiencia en logística, donde fui encargado, 
            gestionando relaciones con clientes y proveedores, y elaborando cotizaciones y proyectos. 
            Mi capacidad para adaptarme a nuevos desafíos y mi habilidad para conectar con las 
            personas me permiten abordar proyectos con una visión integral, combinando creatividad técnica y enfoque comercial.
            </p>
            <hr></hr>
        </section>

        <div className="cv-content container">
          <div className="left-column">
            <section className="section">
              <h2 className="section-title">Proyectos <i className="fa-solid fa-check"></i></h2>
              <div className="timeline-item">
                <span className="timeline-date">2025</span>
                <h3 className="timeline-title">BENMAN Cerveceria</h3>

                <h4 className="timeline-subtitle">Proyecto Personal</h4>
                <p>Componente interactivo en React para galería de imágenes, optimizado para móviles.
                  Con varias secciones informativas como historia, contacto, tienda.
                  Esta pagina la tenia conectada con el back-end en donde se actualizaba la seccion
                  de Cervezas y Tienda. Pero como era pago ese servicio lo tuve que dar de baja.
                  Hecho con React (front) y Next (back). El back trabajndo con el SQL.
                  Frameworks como Express, Bootstrap,
                </p>
                
                <a href="https://benman-cerveceria.netlify.app/" target="_blank" className="btn btn-dark">Ver Proyecto</a>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">2025</span>
                <h3 className="timeline-title">Pagina de informacion sobre Tecnología</h3>

                <h4 className="timeline-subtitle">Proyecto Personal</h4>
                <p>Una pagina con varias secciones brindado información tanto sobre
                  hardware como software. Con un home conectada al back end
                  con una base de datos (SQL) que se actualizan las noticias de dicha seccion.
                  Fue mi primer proyecto personal, aplicando algunos frameworks y JS basico.
                </p>
                <a href="https://project-own-nine.vercel.app/" target="_blank" className="btn btn-dark">Ver Proyecto</a>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">2025 - Presente</span>
                <h3 className="timeline-title">Portafolio Personal</h3><h3 style={{fontSize: '0.9rem'}}></h3>

                <h4 className="timeline-subtitle">Proyecto Personal</h4>
                <p>Desarrollo de un sitio web responsivo con Next.js (framework de React) para mostrar proyectos
                  personales.</p>
                <a href="/" target="_blank" className="btn btn-dark">Ver Proyecto</a>
              </div>
            </section>

            <section className="section">
              <h2 className="section-title">Educación <i className="fa-solid fa-check"></i></h2>
              <div className="timeline-item">
                <span className="timeline-date">2025</span>
                <h3 className="timeline-title">Curso de Desarrollo Web</h3>
                <h4 className="timeline-subtitle">UTN Avellaneda, Argentina</h4>
                <p>Formación en desarrollo front-end  y back-end con React, HTML, CSS, JavaScript, Node, Express, SQL. </p>
                <a 
                href="https://validator.centrodeelearning.com/validator/a7ca990a-1336-4ccd-9f89-5044da62bf55" 
                className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                target="_blank"
                >
                Certificado <i className="fa-solid fa-certificate fa-spin"></i></a>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">2025 - actualidad</span>
                <h3 className="timeline-title">Tecnicatura en programación</h3>
                <h4 className="timeline-subtitle">UTN Avellaneda, Argentina</h4>
                <p>Formación en desarrollo front-end con React, HTML, CSS y JavaScript.</p>
              </div>
            </section>
          </div>

          <div className="right-column">
            <section className="section">
              <h2 className="section-title">Habilidades <i className="fa-solid fa-check"></i></h2>
              <div className="skills-container">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Node</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">UI/UX</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Photoshop</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Soporte técnico</span>
                <span className="skill-tag">Ensamble hardware</span>
                <span className="skill-tag">Paquete Office</span>
              </div>
            </section>

            <section className="section row">
              <div className="col">
                <h2 className="section-title">Hard Skills <i className="fa-solid fa-cog fa-spin"></i></h2>
                <div className="progress-container">                  
                    <span>HTML & CSS</span>                  
                </div>
                <div className="progress-container">                  
                    <span>JavaScript</span>                  
                </div>
                <div className="progress-container">                  
                    <span>React</span>                  
                </div>
                <div className="progress-container">                  
                    <span>Node</span>                  
                </div>
                <div className="progress-container">                  
                    <span>Python</span>                  
                </div>
              </div>

              <div className="col">
                <h2 className="section-title">Soft Skills <i className="fa-solid fa-handshake-angle fa-flip"></i></h2>
                <div className="progress-container">
                  <div>
                    <span>Resolución de Problemas</span>
                  </div>
                </div>
                <div className="progress-container">
                  <div>
                    <span>Escucha Activa</span>
                  </div>
                </div>
                <div className="progress-container">
                  <div >
                    <span>Relaciones Interpersonales</span>
                  </div>
                </div>
                <div className="progress-container">
                  <div>
                    <span>Carisma</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="section">
              <h2 className="section-title">Languages <i className="fa-solid fa-language"></i></h2>
              <div className="grid-container">
                <div className="grid-item">
                  <h3 className="grid-title">Spanish</h3>
                  <p>Native</p>
                </div>
                <div className="grid-item">
                  <h3 className="grid-title">English</h3>
                  <p>Intermediate</p>
                </div>
              </div>
            </section>

            <section className="section">
              <h2 className="section-title">Intereses <i className="fa-solid fa-bullseye fa-beat-fade"></i></h2>
              <div className="skills-container">
                <span className="skill-tag">Development Web</span>
                <span className="skill-tag">Automation</span>
                <span className="skill-tag">Design UI/UX</span>
                <span className="skill-tag">Technology</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Cibersecurity</span>
                <span className="skill-tag">Data Analyst</span>
              </div>
            </section>
<hr></hr>
          </div>
        </div>
      </div>
    </main>
  );
}
