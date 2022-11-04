import ProductosLav from "./ProductosLav";
import ProductosDet from "./ProductosDet";
import ProductosDes from "./Desodorantes";
import ProductosBol from "./Bolsas";

const Contenedor = () => {

    return(
        <div className="container-fluid section">
                    <div className="row section__row">
                        <div className="col-md-12 section__col">
                            <div className="section__colContenedor">
                            <h2 className="section__titulosUno" id="uno">LAVANDINA</h2>
                            <ProductosLav />
                            <h2 className="section__titulosDos" id="dos" >DETERGENTE</h2>
                            <ProductosDet />
                            <h2 className="section__titulosDos" id="tres" >DESODORANTE</h2>
                            <ProductosDes />
                            <h2 className="section__titulosDos" id="cuatro" >BOLSAS</h2>
                            <ProductosBol />
                            </div>
                        </div>
                     </div>
        </div>
                
    )





};


export default Contenedor;