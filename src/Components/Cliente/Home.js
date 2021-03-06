import React,{useState,useEffect} from 'react'
import NavBarBodega from './NavBarBodega'
import CardCategoria from './CardCategoria'


const url="http://localhost:3000/categorias";  //api fake
//const url="http://13.65.190.213:8000/api/products/categories" //api real

export default function Home() {

    const [categoria, setCategoria]=useState([]);
    const [cartShop, setCartShop] = useState( localStorage.getItem("carrito")?JSON.parse(localStorage.getItem("carrito")):'');
    const getCategorias= async ()=>{
      
        const res = await fetch(url);
        const data= await res.json();
    // console.table("datos",data);
     // setCategoria(data.results); //es para el url verdadero
          setCategoria(data) ;//de mi api fake json server
    }

    useEffect(() => {
 
        getCategorias();
        
        
    },[])
    return (
        <div>
            <NavBarBodega cartShop={cartShop}/>
            <div className="container-fluid contenido">

            <div className="row  d-flex flex-row justify-content-center">
               
               {
                   categoria.map((categ ) =>(
                       (categ.is_active)&& <CardCategoria key={categ.id} name={categ.name} id={categ.id}/>
                   
                   
                   ))
               }
               
            
           
           </div>


            </div>
        </div>
    )
}
