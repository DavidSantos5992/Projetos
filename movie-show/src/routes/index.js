import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Favoritos from "../pages/Favoritos";
import Header from "../components/Header";

function RouterApp() {
    return(
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/favoritos" element={ <Favoritos/> } />
                    <Route path="/filmes em cartaz" element={ <Movie/> } />
                    <Route path="/login" element={ <Login/> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterApp