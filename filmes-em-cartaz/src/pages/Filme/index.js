import { useEffect,useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import './filme.css'
import api from "../../services/api";

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate()

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
                console.log(response.data)
                setLoading(false)
            })
            .catch(()=>{
                console.log('filme não encontrado')
                navigate('/', { replace: true })/* se não achar o filme manda para a pagina de home */
                return
            })
        }

        loadFilme();

        return() => {
            console.log('Componente Desmontado')
        }
    }, [navigate, id])
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

                <div className="area-buttons">
                    <button>
                        salvar
                    </button>

                    <button>
                        <a target="blank" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                            trailer
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filme