
const Item = ({id, tipo, nombre , precio}) =>{

   

  return( 

            <div className="section__colProductos">
                <div className="section__colProductos--h3">{nombre}</div>
                <div className="section__colProductos--p">{precio}</div>
                <div className="boton-agregar"><button className="boton-estilo">Agregar</button></div>
            </div>

);
};


export default Item;




