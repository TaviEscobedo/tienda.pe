import React,{useEffect,useState} from 'react'
import NavBarBodega from './NavBarBodega'

export default function ProductoDetalle({match}) {
  
   // console.log("url",match);
    const idProd=match.params.idProd;
    

    const [prod, setProd] = useState([])

    const url=`http://localhost:3000/products/${idProd}`

    const getProduct= async ()=>{
      
        const res = await fetch(url);
        const data= await res.json();    
       setProd(data) //de mi api fake json server
      
    }
   useEffect(() => {
    getProduct();
      
  },[])

    return (
        <>
         <NavBarBodega 
        //  cartShop={cartShop}
         /> 
        <div className="container-fluid contenido_detalle">
         <div className="row justify-content-center ">
            <div className="card  card_detalle" >
                    <div className="row no-gutters justify-content-around">
                    
                      <div className="col-md-6 ">
                        <img src="https://via.placeholder.com/500x470" className="card-img" alt="..."/>
                      </div>
                      <div className="col-md-5">
                        <div className="card-body">
                          <h1 className="card-title titulo">{prod.name}</h1>
                          <p className="card-text">{prod.description}</p>
                          <p className="precio"> <strong> {prod.price}</strong></p>
                          <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-cant">-</button>
                            
                            <input type="button" value="1" className=" btn cantidad"></input>
                            <button type="button" className="btn btn-cant">+</button>
                          </div>
                          <p className="card-text"><small className="text-muted">Cantidad</small></p>
                          <a href="#" className="btn  btn-block btn-product">AGREGAR AL CARRITO</a>
                        </div>
                      
                    </div>
                  </div>
                 </div>
            
            
                 </div>
                 </div>
        </>
    )
}
