import './index.css'
import data from '../../data/db.json'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <>
         <h1>Lista de Clientes</h1>
         {
            data.map((item, i) => {
               return (
                  <div key={item.idVideo}>
                     <Link to={`/${item.cliente}-${i + 1}/testeador-1`}>
                        {item.cliente}
                     </Link>
                  </div>
               )
            })
         }

      </>
   );
}

export default Home