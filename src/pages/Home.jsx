
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { ItemContainer } from "../componentes/ItemContainer";
import NavFot from "../componentes/NavFot"
import Menu from "../componentes/Menu"


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts()
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const onAdd = (producto) => {
    console.log(producto);
  };

  return (
      <NavFot>  
      <main className="content">

        <Menu />

        <ItemContainer
          products={products}
          loading={loading}
          onAdd={onAdd}
        />
      </main>
      </NavFot>
  );
};

export default Home;