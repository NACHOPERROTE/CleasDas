import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import ItemContainer from "../componentes/ItemContainer/ItemContainer";
import NavFot from "../componentes/NavFot";
import Menu from "../componentes/Menu";

const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts(categoryId)
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [categoryId]);

  return (
    <>

      <NavFot> 

      <Menu/> 

        <main className="content">
            <ItemContainer products={products} loading={loading} />
        </main>
        
      </NavFot>  

    </>
  );
};


export default Category;