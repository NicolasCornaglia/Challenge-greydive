import './App.css'
import data from './data/db.json'
import { Routes, Route } from 'react-router-dom'
import Page from './components/Page'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {
          data.map((item, i) => {
            const preguntas = item.preguntas.map(pregunta => {
              return ({ tiempo: pregunta.tiempo, tipoTarea: pregunta.tipoTarea, respuesta: pregunta.respuesta, texto: pregunta.texto })
            })

            return (
              <Route
                key={i}
                path={`/${item.cliente}-${i + 1}/testeador-1`}
                element={
                  <Page
                    cliente={item.cliente}
                    testeador={`Testeador 1`}
                    linkVideo={item.linkVideo}
                    transcripcion={item.transcripcion}
                    escenario={item.escenario}
                    preguntas={preguntas}
                    idVideo={item.idVideo}
                  />
                } />
            )
          })
        }
      </Routes >
    </div >
  )
}

export default App
