import React from 'react'

export default function ProductoCart({data}) {
    return (
        <li className="media">
                        <img className="align-self-center mr-3" src={data.image} alt={data.name} style={{"width":"100px"}}/>
                        <div className="media-body">
                        <h5 className="mt-0 mb-1">
                             {data.name}
                         <span className="my-4"> - S/ {data.price}</span>
                        </h5>
                        <div>
                            <div className="form-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                <label className="input-group-text">Cantidad</label>
                                </div>
                                <select className="custom-select" id="inputGroupSelect01" value={data.quantity}>
                                <option value="1" selected>Uno</option>
                                <option value="2">Dos</option>
                                <option value="3">Tres</option>
                                <option value="4">Cuatro</option>
                                <option value="5">Cinco</option>
                                <option value="6">Seis</option>
                                <option value="7">Siete</option>
                                <option value="8">Ocho</option>
                                <option value="9">Nueve</option>
                                </select>
                            </div>
                            </div>
                        </div>
                         <button type="button" className="btn btn-danger">Eliminar</button>
            </div>
                    </li>
    )
}
