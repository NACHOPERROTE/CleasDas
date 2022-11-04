const ProductosBol = () => {

    let catalogo = [


        { id : 1 , tipo : "lavandina" , nombre : "Anti Splash x1L" , precio: 1200 } , 
        { id : 2 , tipo : "lavandina" , nombre : "Anti Splash x2L" , precio: 1400 } , 
        { id : 3 , tipo : "lavandina" , nombre : "Ayudin Clasica x1L" , precio: 1600 } ,
        { id : 4 , tipo : "lavandina" , nombre : "Ayudin Clasica x2L" , precio: 1600 } ,
        { id : 5 , tipo : "lavandina" , nombre : "Ayudin Clasica x4L" , precio: 1600 } ,
        { id : 6 , tipo : "lavandina" , nombre : "Ayudin Clasica x5L" , precio: 1600 } ,
        { id : 7 , tipo : "lavandina" , nombre : "Cloro 5L" , precio: 1600 } ,
        { id : 8 , tipo : "lavandina" , nombre : "Ayudin Gel 700ml" , precio: 1600 } ,
        { id : 9 , tipo : "lavandina" , nombre : "Vim Gel 700ml" , precio: 1600 } ,
        { id : 10 , tipo : "detergente" , nombre : "Ala Vajilla Glicerina Rosa 750ml" , precio: 1600 } ,
        { id : 11 , tipo : "detergente" , nombre : "Ala Ultra Vajilla Limon 500ml" , precio: 1600 } ,
        { id : 12 , tipo : "detergente" , nombre : "Cif Active Gel Limon Verde 500ml" , precio: 1600 } ,
        { id : 13 , tipo : "detergente" , nombre : "Magistral Limon 500ml" , precio: 1600 } ,
        { id : 14 , tipo : "detergente" , nombre : "Detergente 5L" , precio: 1600 } ,
        { id : 15 , tipo : "detergente" , nombre : "Ala Profecional Detergente 15% Limon 5L" , precio: 1600 } ,
        { id : 16 , tipo : "desodorante" , nombre : "Desodorante para Piso 5L" , precio: 1600 } ,
        { id : 17 , tipo : "desodorante" , nombre : "Desodorante Zelnova 5L" , precio: 1600 } ,
        { id : 18 , tipo : "desodorante" , nombre : "Poett Bidon 5L" , precio: 1600 } ,
        { id : 19 , tipo : "desodorante" , nombre : "Procenex Bidon 5L" , precio: 1600 } ,
        { id : 20 , tipo : "desodorante" , nombre : "Procenex Bidon Blanco Original 5L" , precio: 1600 } ,
        { id : 21 , tipo : "desodorante" , nombre : "Flash Ultra Limpiador 5L" , precio: 1600 } ,
        { id : 22 , tipo : "desodorante" , nombre : "Flas Fragancia Limpiadora 5L" , precio: 1600 } ,
        { id : 23 , tipo : "bolsas" , nombre : "40x60 Negras" , precio: 1600 } ,
        { id : 24 , tipo : "bolsas" , nombre : "50x70 Negras" , precio: 1600 } ,
        { id : 25 , tipo : "bolsas" , nombre : "60x100 Negras" , precio: 1600 } ,
        { id : 26 , tipo : "bolsas" , nombre : "80x110 Negras" , precio: 1600 } ,
        { id : 27 , tipo : "bolsas" , nombre : "60x100 Verdes" , precio: 1600 } ,
        { id : 28 , tipo : "bolsas" , nombre : "90x120 Negras" , precio: 1600 } ,
        { id : 29 , tipo : "alcohol" , nombre : "Alcohol 96% 500ml" , precio: 1600 } ,
        { id : 30 , tipo : "alcohol" , nombre : "Alcohol 96% 5L" , precio: 1600 } ,
        { id : 31 , tipo : "alcohol" , nombre : "Alcohol 70% 5L" , precio: 1600 } ,
        { id : 32 , tipo : "alcohol" , nombre : "Alcohol en Gel 500ml" , precio: 1600 } ,
        { id : 33 , tipo : "alcohol" , nombre : "Alcohol en Gel 5L" , precio: 1600 } ,
        { id : 34 , tipo : "desinfectante" , nombre : "Amonio Desinfectante 5L" , precio: 1600 } ,
        { id : 35 , tipo : "desinfectante" , nombre : "Procenex Blanco 5L" , precio: 1600 } ,
        { id : 36 , tipo : "desinfectante" , nombre : "Lysoform Aerosol" , precio: 1600 } ,
        { id : 37 , tipo : "desinfectante" , nombre : "Ayudin Aerosol" , precio: 1600 } ,
        { id : 38 , tipo : "desinfectante" , nombre : "Ayudin Toalla Doy Pack 24u" , precio: 1600 } ,
        { id : 39 , tipo : "desinfectante" , nombre : "Amonio Toalla Tubo 35u" , precio: 1600 } ,
        { id : 40 , tipo : "papeleria" , nombre : "Elegante Hoja Simple 12x4" , precio: 1600 } ,
        { id : 41 , tipo : "papeleria" , nombre : "Elegante Hoja Doble 10x4" , precio: 1600 } ,
        { id : 42 , tipo : "papeleria" , nombre : "Elegante 80 mts 10x4" , precio: 1600 } ,
        { id : 43 , tipo : "papeleria" , nombre : "Higienol Export Pack 12x4" , precio: 1600 } ,
        { id : 44 , tipo : "papeleria" , nombre : "Higienol Doble Hoja 10x4" , precio: 1600 } ,
        { id : 45 , tipo : "papeleria" , nombre : "Higienol Doble Hoja Premium 10x4" , precio: 1600 } ,
        { id : 46 , tipo : "papeleria" , nombre : "Elite Ultra Doble Hoja 10x4" , precio: 1600 } ,
        { id : 47 , tipo : "papeleria" , nombre : "Rollo Cocina Elegante 3x8" , precio: 1600 } ,
        { id : 48 , tipo : "papeleria" , nombre : "Rollo Cocina Susex 3x10" , precio: 1600 } ,
        { id : 49 , tipo : "papeleria" , nombre : "Papel Higienico Cono Chico" , precio: 1600 } ,
        { id : 50 , tipo : "papeleria" , nombre : "Papel Higienico Cono Grande" , precio: 1600 } ,
        { id : 51 , tipo : "papeleria" , nombre : "Caja Toalla Intercalada 2500u" , precio: 1600 } ,
        { id : 52 , tipo : "papeleria" , nombre : "Caja Servilleta Elegante 1000u" , precio: 1600 } ,
        { id : 53 , tipo : "papeleria" , nombre : "Bobina Papel para Mano 400 MTS" , precio: 1600 } ,
        { id : 54 , tipo : "papeleria" , nombre : "Carilina Elite Pañuelo 75u" , precio: 1600 } ,
        { id : 55 , tipo : "guantes" , nombre : "Guantes Mapa Plisse Naranja S al Xl" , precio: 1600 } ,
        { id : 56 , tipo : "guantes" , nombre : "Guantes Mapa Techi Negro 7 al 11" , precio: 1600 } ,
        { id : 57 , tipo : "guantes" , nombre : "Guantes Descartables" , precio: 1600 } ,
        { id : 58 , tipo : "guantes" , nombre : "Guantes Moteados" , precio: 1600 } ,
        { id : 59 , tipo : "guantes" , nombre : "Guantes de Nitrilo" , precio: 1600 } ,
        { id : 60 , tipo : "guantes" , nombre : "Guantes de Latex" , precio: 1600 } ,
        { id : 61 , tipo : "trapo" , nombre : "Trapo Tamaño Consorcio" , precio: 1600 } ,
        { id : 62 , tipo : "trapo" , nombre : "Trapo Cinco Tes 108" , precio: 1600 } ,
        { id : 63 , tipo : "trapo" , nombre : "Trapo Cinco Tes 104" , precio: 1600 } ,
        { id : 64 , tipo : "trapo" , nombre : "Franela 50x60" , precio: 1600 } ,
        { id : 65 , tipo : "trapo" , nombre : "Rejilla" , precio: 1600 } ,
        { id : 66 , tipo : "trapo" , nombre : "Repuesto Lampazo Mopa Chico" , precio: 1600 } ,
        { id : 67 , tipo : "trapo" , nombre : "Repuesto Lampazo Mopa Grande" , precio: 1600 } ,
        { id : 68 , tipo : "trapo" , nombre : "Paño Media Naranja x3u" , precio: 1600 } ,
        { id : 69 , tipo : "trapo" , nombre : "Iberia Turbo Matic" , precio: 1600 } ,
        { id : 70 , tipo : "ropa" , nombre : "Skip Bidon 5L" , precio: 1600 } ,
        { id : 71 , tipo : "ropa" , nombre : "Ala Matic 5L" , precio: 1600 } ,
        { id : 72 , tipo : "ropa" , nombre : "Drive Bidon 5L" , precio: 1600 } ,
        { id : 73 , tipo : "ropa" , nombre : "Suavizante Vivere 5L" , precio: 1600 } ,
        { id : 74 , tipo : "ropa" , nombre : "Suavizante Confort 5L" , precio: 1600 } ,
        { id : 75 , tipo : "ropa" , nombre : "Suavizante 5L" , precio: 1600 } ,
        { id : 76 , tipo : "ropa" , nombre : "Ala en Polvo Regural 800 Gr" , precio: 1600 } ,
        { id : 77 , tipo : "ropa" , nombre : "Ala en Polvo Matic 800 Gr" , precio: 1600 } ,
        { id : 78 , tipo : "ropa" , nombre : "Trenet Doy Pack 400 Cc" , precio: 1600 } ,
        { id : 79 , tipo : "cif" , nombre : "Cif Vidrio Repuesto" , precio: 1600 } ,
        { id : 80 , tipo : "cif" , nombre : "Cif Antigrasa Repuesto" , precio: 1600 } ,
        { id : 81 , tipo : "cif" , nombre : "Cif Baño Repuesto" , precio: 1600 } ,
        { id : 82 , tipo : "cif" , nombre : "Cif Vidrio Gatillo" , precio: 1600 } ,
        { id : 83 , tipo : "cif" , nombre : "Cif Antigrasa Gatillo" , precio: 1600 } ,
        { id : 84 , tipo : "cif" , nombre : "Cif Baño Gatillo" , precio: 1600 } ,
        { id : 85 , tipo : "cif" , nombre : "Cif Antigrasa 5L" , precio: 1600 } ,
        { id : 86 , tipo : "cif" , nombre : "Cif Crema 750ml" , precio: 1600 } ,
        { id : 87 , tipo : "cif" , nombre : "Cif Brillo Antipolvo" , precio: 1600 } ,
        { id : 88 , tipo : "escobillon" , nombre : "Escobillon Plastico" , precio: 1600 } ,
        { id : 89 , tipo : "escobillon" , nombre : "Escobillon para Interiores" , precio: 1600 } ,
        { id : 90 , tipo : "escobillon" , nombre : "Escoba Plastica" , precio: 1600 } ,
        { id : 91 , tipo : "escobillon" , nombre : "Escoba de Guinea Galponera" , precio: 1600 } ,
        { id : 92 , tipo : "escobillon" , nombre : "Escoba con Base Inodoro" , precio: 1600 } ,
        { id : 93 , tipo : "escobillon" , nombre : "Pala de Mano" , precio: 1600 } ,
        { id : 94 , tipo : "escobillon" , nombre : "Pala con Cabo" , precio: 1600 } ,
        { id : 95 , tipo : "escobillon" , nombre : "Plumero Bochita" , precio: 1600 } ,
        { id : 96 , tipo : "escobillon" , nombre : "Plumero Mediano" , precio: 1600 } ,
        { id : 97 , tipo : "escobillon" , nombre : "Cabo 1,30" , precio: 1600 } ,
        { id : 98 , tipo : "escobillon" , nombre : "Cabo 1,50" , precio: 1600 } ,
        { id : 99 , tipo : "escobillon" , nombre : "Cabo 2,00" , precio: 1600 } ,
        { id : 100 , tipo : "auto" , nombre : "Laffitte Pad Aplicador de Cera x4u" , precio: 1600 } ,
        { id : 101 , tipo : "auto" , nombre : "3M Car Cera de Larga Duracion 473ml" , precio: 1600 } ,
        { id : 102 , tipo : "auto" , nombre : "3M Car Cera Rapida 473ml" , precio: 1600 } ,
        { id : 103 , tipo : "auto" , nombre : "3M Car Cera Limpiadora 2 en 1 473ml" , precio: 1600 } ,
        { id : 104 , tipo : "auto" , nombre : "3M Car Removedoa Rayas 236ml" , precio: 1600 } ,
        { id : 105 , tipo : "auto" , nombre : "3M Car Restaurador Cuero y Vinilo 473ml" , precio: 1600 } ,
        { id : 106 , tipo : "auto" , nombre : "3M Car Restaurador De Llantas Gatillo 473ml" , precio: 1600 } ,
        { id : 107 , tipo : "auto" , nombre : "3M Car Shampoo para Autos 473ml" , precio: 1600 } ,
        { id : 108 , tipo : "auto" , nombre : "Silicona Aerosol 260ml" , precio: 1600 } ,
        { id : 109 , tipo : "auto" , nombre : "Revividor Gomas Silisur 600 Cc" , precio: 1600 } ,
        { id : 110 , tipo : "auto" , nombre : "Alpargatas Rejilla Auto 42x54 Cm" , precio: 1600 } ,
        { id : 111 , tipo : "auto" , nombre : "Laffite Manopla Microfibra Grande" , precio: 1600 } ,
        { id : 112 , tipo : "auto" , nombre : "Media Naranja Microfribra 50x60 Cm" , precio: 1600 } ,
    
    ]   

    const bolsas =catalogo.filter( (prod) => prod.tipo === 'bolsas' )
        
      return (
        
        bolsas.map((prod) => {
            return( 
                    <div className="section__colProductos">
                        <div className="section__colProductos--h3">{prod.nombre}</div>
                        <div className="section__colProductos--p">{prod.precio}</div>
                        <div className="boton-agregar"><button className="boton-estilo">Agregar</button></div>
                    </div>
            )
        })
       
          
      )
};

export default ProductosBol;