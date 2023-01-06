import "./App.css"
import React from "react"
import Logo from "../Components/template/logo"
import Footer from "../Components/template/footer"
import Nav from "../Components/template/nav"
import Main from "../Components/template/main"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Main icon="home" title="Inicio" subtitle="React Project"/>
        <Footer></Footer>
    </div>