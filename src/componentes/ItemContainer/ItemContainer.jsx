
import Item from "../Item";


const ItemContainer = ({products}) =>{

    return(
        <div className="products">
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


    );

};


export default ItemContainer;