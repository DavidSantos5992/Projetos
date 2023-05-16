import { wait } from '@testing-library/user-event/dist/utils';
import api from '../../services/api'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [movie, setMovie] = useState([])

    useEffect(() => {

        async function loadMovie() {

            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: '7ce101ef8a0104d3ad51a39c67ba3d19',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            const updateMovie = response.data.results.slice(0, 10)
            setMovie(updateMovie)

            console.log(updateMovie)

        }

        loadMovie();
    }, []);

    return (

        <div className="w-full flex flex-col items-center justify-center ">

         {
            movie.map( (film) => {

                return(

                    <article key={film.id} className='w-96 h-96 flex flex-col items-center mb-96 rounded-xl bg-red-500' >

                        <strong>{film.title}</strong>
                        <img className='w-full h-80 object-contain' src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt="" />   
                        <button>Ver descrição</button>

                    </article>

                                 
                )

            })
         }

        </div>

    );



}

export default Home