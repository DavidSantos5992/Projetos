import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"


import api from "../../services/api";

function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(( )=>{
        async function loadFilme() {
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: '7ce101ef8a0104d3ad51a39c67ba3d19',
                    language: 'pt-BR',
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{
                console.log('filme não encontrado')
            })
        }

        loadFilme();

        return() => {
            console.log('Componente Desmontado')
        }
    }, [])
    if (loading) {
        <div className="filme-info">
            <h1>Carregando Filmes</h1>
        </div>
    }
    return(
        <div>
            <div className="filme-info">
                <h1>{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

                <h3>sinopse</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average} / 10 </strong>

            </div>
        </div>
    )
}

export default Filme