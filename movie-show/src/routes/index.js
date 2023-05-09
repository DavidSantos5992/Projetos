import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Header from "../components/Header";

function RouterApp() {
    return(
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/login" element={ <Login/> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterApp