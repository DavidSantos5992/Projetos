import axios from 'axios'

//base da api  https://api.themoviedb.org/3/
/* /movie/now_playing?api_key=7ce101ef8a0104d3ad51a39c67ba3d19&language=pt-BR */

const api = axios.create({
    baseURL: ' https://api.themoviedb.org/3/'
});

export default api;
