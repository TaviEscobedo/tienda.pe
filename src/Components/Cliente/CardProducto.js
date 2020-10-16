import React from 'react'
import { Link } from 'react-router-dom'

export default function CardProducto({prod,agregar}) {

 

    return (
        <div className="card cardProd" style={{"width": "14rem"}}>
        <img src={prod.image} className="card-img-top" alt={prod.name}/>
        <div className="card-body card_prod_body"> 
          <Link to={`/producto/${prod.id}/${prod.name}`}><h5 className="card-title titu">{prod.name}</h5></Link>
          <p className="card-text">{prod.description}o</p>

          <p>s/ <strong>{prod.price}</strong></p>

          <button  className="btn  btn-block btn-product card_product_btn" onClick={()=>agregar(prod)} >AGREGAR</button>
        </div>
      </div> 
    )
}
