import React, {useEffect,useState,useRef} from 'react';
 import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
 import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
 import NavegacionLateral from './NavegacionLateral';
 import NavBar from './NavBar';
import TablaProd from './TablaProd';

 //const url="http://13.65.190.213:8000/api/products/products"; //api real
 const url="http://localhost:3000/products"; //api fake

 // const urlCtg="http://13.65.190.213:8000/api/products/categories"; //api real
 const urlCtg="http://localhost:3000/categorias"; //api fake

export default function Producto() {

    const [productos, setProductos]=useState([]);
    const [catg,setCatg]=useState([]);
    const [modalInsertar, setModalInsertar] = useState(false)
    const [modalEliminar, setModalEliminar] = useState(false)
    const [formu, setFormu] = useState({
        id:'',
        name:'',
        description:'',
        price:0,
        discount:0,
        is_active: false,
        category:0,
        tipoModal:''
    })

    const inputFileRef=useRef();
    const getCatg= async ()=>{
      
      const res = await fetch(urlCtg);
      const data= await res.json();
   //   console.table("datos",data)
      //setCatg(data.results); //es para el url verdadero
     setCatg(data) //de mi api fake json server
    // console.table("categ en Component Productos:",data.results)
  }

    const getProductos= async ()=>{
      
        const res = await fetch(url);
        const data= await res.json();
  
      //  setProductos(data.results); //es para el url verdadero
    setProductos(data) //de mi api fake json server
      // console.table("productos:",data.results)
    }

    const postProductos= async()=>{
      // console.log(formu);
      // console.log(inputFileRef.current.files);
       const data={...formu,image:inputFileRef.current.files[0]}
      
        try{
          console.log("data",data);
          const formData= new FormData();

          
          formData.append('name',data.name)
          formData.append('description',data.description)
          formData.append('price',data.price)
          formData.append('discount',data.discount)
          formData.append('category',data.category)
          formData.append('image',data.image) 
          formData.append('is_active',data.is_active)

          console.log("formData",formData);
     const res= await fetch(url,{
            method: 'POST',
            body: formData
            // headers: {
            //     'Accept': 'application/json',
            //   'Content-type': 'application/json'
            // }
          })
     const formatoJson=await res.json();
     console.log(formatoJson);     
          getProductos();
          ModalInsertar();
        }catch(error){
            console.log(error.message);
        }
          
          
        

    }
function ModalInsertar(){
    setModalInsertar(!modalInsertar);

}


const handleChange=  (e)=>{
    // e.persist();
  
     setFormu({
        ...formu,
        [e.target.name]: e.target.value 
    })

}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(formu);
  console.log(inputFileRef.current.files);
}

const seleccionarProducto=(el)=>{
    setFormu({
        id:el.id,
        name:el.name,
        description:el.description,
        price:el.price,
        discount:el.discount,
        image:el.image,
        is_active:el.is_active,
        category:el.category,
        tipoModal:'actualizar'
        
    })
  console.log('elemento seleccionado',el);
  
}
const peticionPut= async()=>{
    try{
      
        const res= await fetch(url+"/"+formu.id,{
               method: 'PUT',
               body: JSON.stringify(formu),
               headers: {
                //    'Accept': 'application/json',
                 'Content-type': 'application/json'
               }
             })
        const Json=await res.json();
        console.log("peticion Put",Json);     
            
             ModalInsertar();
             getProductos();
           }catch(error){
               console.log(error.message);
           }

}


const peticionDelete=()=>{
    axios.delete(url+"/"+formu.id).then(response=>{
   
      setModalEliminar(false);
      getProductos();
  
    })
  }

 useEffect(() => {
 
    getProductos();
    getCatg();
    
},[])


    return (
        <>
           <NavBar/>
        <div className=" container-fluid contenedor ">
        <div className="row">
            <div className="col-md-3 side-nav">

            <NavegacionLateral/>
            </div>
             <div className="col-md-9 ">
             
     <button type="button" className="btn btn-primary"   
     onClick={()=>{ModalInsertar() ; 
      setFormu({
      ...null,
        tipoModal:'insertar'
        
    }) }}>
      Nuevo producto
    </button>
    <TablaProd 
      data={productos}
      seleccionar={seleccionarProducto}
      modalInsertar={ModalInsertar}
      setModalEliminar={setModalEliminar}
    />
      
   <Modal isOpen={modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                <p className="modal-title">Ingresar datos del producto</p>
                  <span style={{float: 'right', cursor: 'pointer'}} onClick={()=>ModalInsertar()}
                  className="close"
                  >x</span>
               
                </ModalHeader>
                <ModalBody>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                          <label >Nombre</label>
                          <input name="name" type="text" className="form-control"
                           placeholder="Nombre" onChange={handleChange} value={formu?formu.name:''}/>
                        </div>
                        <div className="form-group col-md-6">
                          <label >Description</label>
                          <input name="description" type="text" className="form-control" 
                          placeholder="Descripción" onChange={handleChange} value={formu?formu.description:''}/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label >Precio</label>
                          <input name="price" type="text" className="form-control"
                           placeholder="S/ 5,99 " onChange={handleChange} value={formu?formu.price:0}/>
                        </div>
                        <div className="form-group col-md-6">
                          <label >Descuento</label>
                          <input name="discount" type="text" className="form-control" 
                          placeholder="S/ 0,50" onChange={handleChange} value={formu?formu.discount:0}/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label >Categoría</label>
                          <select className="custom-select" name="category" onChange={handleChange} value={formu?formu.category:0}>
                            <option  selected>Elija una categoría</option>
                            { catg.map(ctg=>(

                            <option key={ctg.id} value={ctg.id}>{ctg.name}</option>
                            ))

                            }
                            
                          </select>
                         
                        </div>
                        <div className="form-group col-md-6">
                          
                          <label>Imagen</label>
                           
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" 
                                name="image"
                                ref={inputFileRef}
                                />
                                <label className="custom-file-label" >Elige una imagen</label>
                              </div>
                        </div>
                      </div>
                    
                   
                    <div className="form-row">
                        
                        <div className="form-group col-md-6 ">
                            <label>Estado:</label> <br/>
                            <input type="checkbox" name="is_active"  
                            onChange={(e)=> {setFormu({...formu, is_active: e.target.checked}) }} 
                            checked={formu.is_active} />
                            <label > Activo </label>
                           
                          </div>
                          
                    </div>
                  </form>
                </ModalBody>

                <ModalFooter>
                  { formu.tipoModal==='insertar'? 
                  <button type="submit" className="btn btn-primary"
                    onClick={()=>postProductos()}
                   >Guardar</button>
                  :<button className="btn btn-primary" type="submit" onClick={()=>peticionPut()}> Actualizar </button>
                    } 
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>ModalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>  

            <Modal isOpen={modalEliminar}>
                <ModalBody>
                ¿Estás seguro que deseas eliminar el proveedor {formu && formu.name}?
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={()=>peticionDelete()}>Sí</button>
                    <button className="btn btn-secondary" onClick={()=>setModalEliminar(false)}>No</button>
                    </ModalFooter>
            </Modal>
            </div>
        </div>
    </div>   
        </>
    )
}
