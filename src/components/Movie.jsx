import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"

import axios from 'axios'
import MovieDetail from './MovieDetail'
import MovieSkel from './MovieSkel'


const Movie = () => {
       
    const key = '60f86102'
    const url = "http://www.omdbapi.com/?apikey=&"
    const [movies, setMovies] = useState({Title: '', Year: '', Rated: '', Released: '', Runtime: '', Genre: '', Director: '', Plot: '', Poster: ''})
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()
    const { id } = useParams()
    
    async function getMovies() {
        try {
        const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${key}&i=${id}`) 
            movies.title = data.Title
            movies.Year = data.Year
            movies.Rated = data.Rated
            movies.Released = data.Released
            movies.Runtime = data.Runtime
            movies.Genre = data.Genre
            movies.Director= data.Director
            movies.Plot = data.Plot
            movies.Poster = data.Poster
            console.log(movies)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMovies()
        setIsLoading(false)

    },[])
    
    return (
           <>
                {isLoading ? <MovieSkel /> : <MovieDetail movies={movies} /> }
           </>
         )
}
export default Movie