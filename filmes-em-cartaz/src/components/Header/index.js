import './style.css'
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <Link to='/' className="logo"> Filmes em cartaz</Link>
            <Link  className="favoritos" to='/'>Home</Link>
            <Link  className="favoritos" to='/favoritos'>Favoritos</Link>
        </header>
        )
}

export default Header