import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

export default function NavBar() {
    return (
        <nav className="navbar  navbar-dark bg-dark pr-4">
      <Link to="/" className="navbar-brand" id="loguito">   <img src={logo} alt="bodega.pe"  style={{height:"80px"}}/> </Link>
     
        <div className="dropdown" id="dropDown">
    
          <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Admin
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">Gestión</button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" type="button">Salir</button>
          </div>
        </div>
      </nav>
    )
}
