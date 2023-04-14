
import { useEffect, useState } from 'react'
import { getProductoById } from '../../utils/mFetch'
import { Container, Spinner } from 'react-bootstrap'
import ItemDitail from '../ItemDitail/ItemDitail'


function ItemDitailContainer({greeting}) {

    const [ producto, setProducto ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
      setTimeout( () => {
        getProductoById(1)
        .then( ( resultado ) => {
            setProducto(resultado)
            //console.log(producto)
        })
        .catch( (err) => console.log(err))
        .finally(() => setIsLoading(false))
      }, 2000)  
    }, [])
  return (
    <Container>
        <h1 className='py-5 text-center'>{ greeting }</h1>
        { isLoading ? <div className='text-center'><Spinner animation="border" variant="warning" /></div> : <ItemDitail {...producto}/> }  
    </Container>
  )
}

export default ItemDitailContainer