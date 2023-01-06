import "./nav.css"
import React from "react"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <aside className="menu-area">
        <nav className="menu list-group">
            <a href="#/" className="list-group-item list-group-item-action">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users" className="list-group-item list-group-item-action">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>