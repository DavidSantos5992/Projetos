import { Link } from "react-router-dom";

function Header() {
    return(
        <>
        
        <header className="flex items-center justify-between w-full h-11 bg-blue-300 box-border p-6">
            <img src="" alt="" />

            <div className="flex items-center justify-around w-96 -400 text-black capitalize">
                <Link to='/'>Home</Link>
                <Link to='/filmes em cartaz'>Filmes em Cartaz</Link>
                <Link to='/favoritos'>favoritos</Link>
            </div>
            
            <button className="w-24 bg-blue-700 rounded-[10px] flex items-center justify-center">
               <Link to='/login'>
                <strong>Log in</strong>
                </Link>
            </button>

        </header>
        
        </>
    )
    
}

export default Header