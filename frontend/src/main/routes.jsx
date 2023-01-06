import React from "react"
import { Routes, Route, Link} from "react-router-dom";
import Home from "../Components/home/home";
import UserCrud from "../Components/users/users";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <Routes>
        <Route exact path="/" element={ <Home/> }></Route>
        <Route path="/users" element={<UserCrud/>}></Route>
        <Route path="*" element={ <Home/> }/>
    </Routes>
);