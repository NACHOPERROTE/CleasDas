import './estilos/main.scss';
import NavBar from './componentes/NavBar';
import Contenedor from './componentes/Contenedor';
import Menu from './componentes/Menu';

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
     
     <main>

        <Menu />
      
        <Contenedor />



     </main>
    



    </div>
  );
}

export default App;
