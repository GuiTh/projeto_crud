import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        {/* refatorar em casa, separar cada icone do navegador como um componente separado  */}
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i>Inicio
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuarios
            </a>
        </nav>
    </aside>