import './estilos/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductosDet from './componentes/ProductosDet';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/category/:categoryId"} element={<ProductosDet />}/>
       
      </Routes>
       
     </BrowserRouter> 
    </div>
  );
}

export default App;
