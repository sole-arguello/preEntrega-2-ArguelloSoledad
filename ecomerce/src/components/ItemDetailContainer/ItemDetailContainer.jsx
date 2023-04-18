import { useEffect, useState } from 'react'
import { getProductoById } from '../../utils/mockFetch'
import { useParams } from 'react-router-dom'
import { Container, Spinner } from 'react-bootstrap'
import ItemDetail from '../ItemDetail/ItemDetail'



function ItemDetailContainer({greeting}) {

    const [ producto, setProducto ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)

    useEffect(() => {
      setTimeout( () => {
        getProductoById(itemId)
        .then( ( resultado ) => {
            setProducto(resultado)
            //console.log(producto)
        })
        .catch( (err) => console.log(err))
        .finally(() => setIsLoading(false))
      }, 1000)  
    }, [itemId])
  return (
    <Container>
        <h1 className='py-5 text-center'>{ greeting }</h1>
        { isLoading 
        ? <div className='text-center'><Spinner animation="border" variant="warning" /></div> 
        : <ItemDetail {...producto}/> }  
    </Container>
  )
}

export default ItemDetailContainer