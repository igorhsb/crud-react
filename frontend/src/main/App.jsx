import "./App.css"
import React from "react"
import Logo from "../Components/template/logo"
import Footer from "../Components/template/footer"
import Nav from "../Components/template/nav"
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Routes from "./routes"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes/>
            <Footer></Footer>
        </div>
    </BrowserRouter>
        