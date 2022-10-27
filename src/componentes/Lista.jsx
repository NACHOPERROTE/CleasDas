

// const Lista = (props) => {
//   return <div className="container-fluid listaGrupos">
//             <div className="row listaGrupos__fila">
//                 <div className="col-md-12 listaGrupos__columna">
//                     <ul horizontal className="listaGrupos__lista--ul">
//                         <li className='listaGrupos__lista--li'>Lavandinas</li>
//                         <li className='listaGrupos__lista--li'>Detergentes</li>
//                         <li className='listaGrupos__lista--li'>Bolsas</li>
//                         <li className='listaGrupos__lista--li'>Alcohol</li>
//                         <li className='listaGrupos__lista--li'>Desinfectantes</li>
//                         <li className='listaGrupos__lista--li'>Papeleria</li>
//                         <li className='listaGrupos__lista--li'>Guantes</li>
//                         <li className='listaGrupos__lista--li'>Trapo</li>
//                         <li className='listaGrupos__lista--li'>Bidon Ropa</li>
//                         <li className='listaGrupos__lista--li'>Cif</li>
//                         <li className='listaGrupos__lista--li'>Escobillon</li>
//                         <li className='listaGrupos__lista--li'>Auto</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>   

  
// }

let catalogo = [


    { id : 1 , tipo : "lavandina" , nombre : "Anti Splash x1L" , precio: 1200 } , 
    { id : 2 , tipo : "Detergente" , nombre : "Anti Splash x1L" , precio: 1200 } , 
    { id : 2 , tipo : "Detergente" , nombre : "Anti Splash x1L" , precio: 1200 } , 
  
] 

const Lista = () => {
        
    return (
        catalogo.map((prod) => {
            return( 
                 <li className='listaGrupos__lista--li'>{prod.tipo}</li>
                    
                         
            )
        })

    )

};



export default Lista;