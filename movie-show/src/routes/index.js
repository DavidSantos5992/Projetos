import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

function RouterApp() {
    return(
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={ <Home/> } />
                    <Route path="/login" element={ <Login/> } />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterApp