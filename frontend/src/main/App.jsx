import "./App.css"
import React from "react"
import Logo from "../Components/template/logo"
import Footer from "../Components/template/footer"
import Nav from "../Components/template/nav"
import Main from "../Components/template/main"

export default props => 
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
    </div>