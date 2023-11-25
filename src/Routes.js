import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home/home"
import Login from "./Routes/Login/login"
import Pass from "./Routes/ForgorPass/pass"
import Register from "./Routes/Register/register"
import Contact from "./Routes/Contact/contact"


const AppRoutes = () => {

    return(

        <Router>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/forgotpassword" element={<Pass/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </Router>

    )

}

export default AppRoutes;