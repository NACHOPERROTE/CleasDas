
import Item from "../Item";


const ItemContainer = ({products}) =>{
  
    return(
      <div className="container-fluid section">
      <div className="row section__row">

          <div className="col-md-12 section__col">
          
              <div className="section__colContenedor">
                    <h2>{products.tipo}</h2>
                    {products.map((producto) => {
                    return (
                      
                        
                      <Item
                        key={producto.tipo}
                        id={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                      />
                     

                    );
                  })}

              </div>

          </div>

       </div>
</div>

       
     


    );

};


export default ItemContainer;