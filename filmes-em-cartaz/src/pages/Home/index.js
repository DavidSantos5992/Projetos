import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from 'react-router-dom'
import "./home.css"

///movie/now_playing?api_key=7ce101ef8a0104d3ad51a39c67ba3d19&language=pt-BR


function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes() {

            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '7ce101ef8a0104d3ad51a39c67ba3d19',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)
          /*   console.log(response.data.results.slice(0,10)); */
        }

        loadFilmes();
    })

    if (loading) {
        return(
            <div className="loading">
                Carregando Filmes
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista-filmes">

                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="filme.title" />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}

                
            </div>
        </div>
    )
}

export default Home