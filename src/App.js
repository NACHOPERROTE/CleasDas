import './estilos/main.scss';
import NavBar from './componentes/NavBar';
import Cajas from './componentes/Cajas'

function App() {
  return (
    <div className="App">

      <NavBar />

      
{/*      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
     
     <div className="section__col">
        <div id="contenedorProductosLavandina" className='section__col--div'>           
            <h2 className='section__titulosUno'>LAVANDINA</h2>
          <Cajas />
        </div>
      </div>



    </div>
  );
}

export default App;
