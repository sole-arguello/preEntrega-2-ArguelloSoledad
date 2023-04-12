import React, { useEffect, useState } from "react";
import { mFetch } from "../../utils/mFetch";

//componentes
import ItemList from "../ItemList/ItemList";

function ItemsContainer({ greeting }) {
  
    const [productos, setProductos ] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    
    useEffect(() => {
      
        setTimeout(() => {

            mFetch()
            .then((resultado) => {
                setProductos(resultado)
            })

            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));

        }, 1000);
        
    }, [])

  return (
    <>
      <h1 className="py-5 text-center">{greeting}</h1>
      <div className='container'>
          { isLoading ? <p>Cargando...</p> : <ItemList productos = { productos }/> }
      </div>
    </> 
  );
}

export default ItemsContainer;
