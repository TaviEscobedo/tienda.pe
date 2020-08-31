import React,{useState,useEffect} from 'react'
import NavbarPerfil from './NavbarPerfil'
import ProductoCart from './ProductoCart'

let car=JSON.parse(localStorage.getItem("carrito"));
console.log("localsto",car);

export default function Carrito() {

    // const [bolsa, setBolsa] = useState([]);
 
   
    
    //  setBolsa(car);

    // console.log("bolsa",bolsa);
    useEffect(() => {
 
        // let car=JSON.parse(localStorage.getItem("carrito"));
        // console.log("localsto de use effect",car);
        
    },[car])
    return (
        <>
        <NavbarPerfil/>
           
        <div className="contenido container-fluid ">


            <div className="row">
                 <div className="col-md-6">
                    <ul className="list-unstyled">
                        {
                            car?
                            car.map((el)=>(
                            <ProductoCart  
                            key={el.id } 
                            data={el}
                            // c={car}
                            />
                            )): <div>No hay nada en el carrito</div>
                        }
                        
                    </ul>
                 </div>
                    <div className="col-md-6">
                        <Total/>

                    </div>
            </div>
        </div>                
        </>
    )
}


function Total() {
   
    let sub=0;
   
    
    // <p>{sub}</p>
 
        car.map((el)=>{
       
            sub+= el.quantity*el.price ;
   })
   
    
    return (

        <div className="detalle">
                        <div className="mb-4 text-center w-100">
                            <h3>RESUMEN DE PEDIDO</h3>
                        </div>
                        <div className="mb-2 ml-5 mr-5">
                            <div className="d-flex justify-content-between">
                            <h5>
                                SUBTOTAL: 
                            </h5>
                            <h5> S/
                               {Math.round(sub)}
                            </h5>
                            </div>
                        </div>
                        <div className="mb-2 ml-5 mr-5">
                            <div className="d-flex justify-content-between">
                            <h5>
                                ENVIO: 
                            </h5>
                            <h5>
                                S/20.00
                            </h5>
                            </div>
                        </div>
                        <div className="mb-2 ml-5 mr-5">
                            <div className="d-flex justify-content-between">
                            <h5> 
                                TOTAL: 
                            </h5>
                            <h5>S/
                                {sub+20}
                            </h5>
                            </div>
                        </div>
                        <div className="w-100 text-center">
                            <button className="btn btn-lg btn-block btn-success">Comprar</button>
                        </div>
                        </div>
        
    )
}