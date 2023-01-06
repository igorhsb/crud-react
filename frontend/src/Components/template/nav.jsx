import "./nav.css"
import React from "react"
import { Link } from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <aside className="menu-area">
        <nav className="menu list-group">
            <Link to="/" className="list-group-item list-group-item-action">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users" className="list-group-item list-group-item-action">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>