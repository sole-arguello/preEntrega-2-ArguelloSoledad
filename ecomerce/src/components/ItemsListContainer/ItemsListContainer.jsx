import React, { useEffect, useState } from "react";
import { getProductos } from "../../utils/mFetch";
import { Spinner, Container } from 'react-bootstrap'
//componentes
import ItemList from "../ItemList/ItemList";

function ItemsContainer({ greeting }) {
  
    const [productos, setProductos ] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    
    useEffect(() => {
      
        setTimeout(() => {
          getProductos()
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
      <Container>
          { isLoading ? <div className=" text-center"> <Spinner animation="border" variant="warning" /></div> : <ItemList productos = { productos }/> }
      </Container>
    </> 
  );
}

export default ItemsContainer;
