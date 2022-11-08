import { Link } from "react-router-dom";

let catalogo = [ "Lavandina" , "Detergente" , "Bolsas" ];

const Lista = () => {
        
    return (
        catalogo.map((elemento) => {
            return ( 
                <li className='listaGrupos__lista--li'><Link className='listaGrupos__lista--link' to={`/category/${elemento.toLowerCase()}`} key={elemento} >{elemento}</Link></li>     
            );
        })

    );

};




export default Lista;