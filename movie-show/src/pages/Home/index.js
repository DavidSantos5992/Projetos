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

        <div className="">

         {
            movie.map( (film) => {

                return(

                    <article className="containerMovies">
                        <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt="" />   

                    </article>

                                 
                )

            })
         }

        </div>

    );



}

export default Home