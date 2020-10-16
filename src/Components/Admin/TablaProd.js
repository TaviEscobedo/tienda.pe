import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function TablaProd({data,seleccionar,modalInsertar,setModalEliminar}) {
    const _seleccionar=(el)=>{
        seleccionar(el);
        modalInsertar()
    }
    const __seleccionar=(el)=>{
        seleccionar(el);
        setModalEliminar(true)
    }
    return (
        <>
           <table className="table table-striped  table-responsive">
            <thead className="thead-dark">
              <tr>
               
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col"  className="text-center">Precio</th>
                <th scope="col"  className="text-center">Descuento</th>
                <th scope="col">Categoría</th>
                <th scope="col">Imagen</th>
                <th scope="col">Estado</th>
                <th scope="col">Editar</th>
                <th scope="col">Borrar</th>
              </tr>

            </thead>
            <tbody>
                { data.map((el)=>(
                    <tr key={el.id}>
                    {/* <td >{el.id}</td> */}
                    <td>{el.name}</td>
                    <td>{el.description}</td>
                    <td>{el.price}</td>
                    <td>{el.discount}</td>
                    <td>{el.category}</td>
                    {/* <td>{el.image}</td> */}
                    <td><img src={el.image} alt={el.name} id="img-icon"/></td>
                    {(el.is_active)? <td>Activo</td> : <td>No activo</td>}
                    <td className="text-center" >

                        <i className="fa fa-edit fa-1x "
                          onClick={()=>{_seleccionar(el)}}>
                         </i>
                        
                    </td>
                    <td className="text-center"   >
                        <i className="fa fa-trash-alt fa-1x "
                         onClick={()=>{__seleccionar(el) }}>
                         </i>
                    </td>
                    
                  </tr>

                ))
                     

                }
 
            </tbody>
          </table> 
        </>
    )
}
