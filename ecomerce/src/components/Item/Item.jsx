import React from 'react'

function Item( {id, titulo, img, precio} ) {
  return (

    <div className='col-lg-3 col-md-6 col-sm-10'>
        <div className="card w-100 mh-100"  key={id}>
            <img className="card-img-top" src={img} alt="imagen card" />
            <div className="card-body">
                <h4>{titulo}</h4>
                <label>Precio: ${precio}</label>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-dark">Ver Detalle</button>
            </div>
        </div>
    </div>
  
  )
}

export default Item