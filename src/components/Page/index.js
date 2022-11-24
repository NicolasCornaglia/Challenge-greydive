import './index.css'

const Page = (props) => {
   document.title = props.cliente
   return (
      <div key={props.idVideo}>
         <a href='/'>
            <img
               className='logo'
               src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png"
               alt="img"
            />
         </a>
         <h1 className='client'>{props.cliente}</h1>
         <h1 className='test'>Test: Test de usabilidad en el sitio web</h1>
         <h2 className='tester'>{props.testeador}</h2>
         <br></br>
         <video controls className='video'>
            <source src={props.linkVideo} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
         </video>
         <h2 className="transc-title">Transcripción</h2>
         <div className='transcription-tests' dangerouslySetInnerHTML={{ __html: props.transcripcion }} />
         <h2 className="transc-title">Tareas</h2>
         <h3 className='escenario'>Escenario: {props.escenario}</h3>
         <br></br>
         {props.preguntas.map((pregunta, i) => {
            if (pregunta.tipoTarea === 'verbalResponse') {
               return (
                  <div className="tarea" key={i}>
                     <h3>Tarea {i + 1}:</h3>
                     <h3>{pregunta.texto}</h3>
                     <p className='duration'>Duración de la tarea: {pregunta.tiempo}</p>
                  </div>
               )
            }
            if (pregunta.tipoTarea === 'opinionScale5') {
               return (
                  <div className="tarea" key={i}>
                     <h3>Tarea {i + 1}:</h3>
                     <h3 dangerouslySetInnerHTML={{ __html: pregunta.texto }} />
                     <p>Respuesta: {pregunta.respuesta}</p>
                     <p className='duration'>Duración de la tarea: {pregunta.tiempo}</p>
                  </div>
               )
            } else {
               return null
            }
         })}
      </div>
   )
}

export default Page