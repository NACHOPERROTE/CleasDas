import Counter from "./Contador";
import portada from '../img/portada.jpg';
import Formulario from "./Formulario";
import carrito from '../img/carrito.png';



const NavBar = () => {

    return(
        <header>
             <nav>
          <div className="container-fluid header">

            <div className="row header__navbar">

              <div className="col-md-6 header__contenido">
                  <img src={portada} alt=""  className='header__contenido--img'/>
                    <h2 className="header__contenido--a">Clear Das</h2>
              </div>

              <div className="col-md-6 header__lista">
                <Formulario />
                
                <button className="header__lista--btn"><img src={carrito} alt=""  className='header__carrito--img'/></button>

              </div>
              
            </div>

          </div>
           
        </nav>


        </header>


    );


};

export default NavBar;