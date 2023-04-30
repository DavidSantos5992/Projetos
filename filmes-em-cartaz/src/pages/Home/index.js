import { useEffect, useState } from "react"
import api from "../../services/api";
///movie/now_playing?api_key=7ce101ef8a0104d3ad51a39c67ba3d19&language=pt-BR


function Home() {
    const [filmes, setFilmes ] = useState([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key: '7ce101ef8a0104d3ad51a39c67ba3d19',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            console.log(response.data.results)
        }

        loadFilmes();
    })

    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home