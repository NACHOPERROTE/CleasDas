import ProductosLav from "./ProductosLav";
import ProductosDet from "./ProductosDet";

const Contenedor = () => {

    return(
        <div className="container-fluid section">
                    <div className="row section__row">
                        <div className="col-md-12 section__col">
                            <div className="section__colContenedor">
                            <h2 className="section__titulosUno" id="titulo__lavandina">LAVANDINA</h2>
                                 <ProductosLav />
                                 <h2 className="section__titulosDos" >DETERGEMTE</h2>
                                <ProductosDet />
                            </div>
                        </div>
                     </div>
        </div>
                
    )





};


export default Contenedor;