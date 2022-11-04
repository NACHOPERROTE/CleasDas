import { Link } from "react-scroll";

let catalogo = [


    { id : "uno" , tipo : "Lavandinas"  } , 
    { id : "dos" , tipo : "Detergentes"  } , 
    { id : "tres" , tipo : "Desodorantes"  } , 
    { id : "cuatro" , tipo : "Bolsas"  } , 
    { id : 2 , tipo : "Alcohol"  } , 
    { id : 2 , tipo : "Desinfectantes"  } , 
    { id : 2 , tipo : "Papeleria"  } , 
    { id : 2 , tipo : "Guantes"  } , 
    { id : 2 , tipo : "Trapos"  } , 
    { id : 2 , tipo : "Ropa"  } , 
    { id : 2 , tipo : "Cifs"  } , 
    { id : 2 , tipo : "Escobillones"  } , 
    { id : 2 , tipo : "Auto"  } , 
] 

const Lista = () => {
        
    return (
        catalogo.map((prod) => {
            return( 
                 <li className='listaGrupos__lista--li'><Link to={prod.id}>{prod.tipo}</Link></li>     
            )
        })

    )

};



export default Lista;