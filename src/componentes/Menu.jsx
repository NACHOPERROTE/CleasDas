import Lista from "./Lista";

const Menu = () => {
    return(
        <div className="container-fluid listaGrupos">
            <div className="row listaGrupos__fila">
                <div className="col-md-12 listaGrupos__columna">
                    <ul horizontal className="listaGrupos__lista--ul">
                       <Lista />
                    </ul>
                </div>
            </div>
        </div>   




    )


};


export default Menu;