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
            const formatted = {
            Title : data.Title,
            Year : data.Year,
            Rating : data.Rated,
            Released : data.Released,
            Runtime : data.Runtime,
            Genre : data.Genre,
            Director : data.Director,
            Plot : data.Plot,
            Poster : data.Poster
            }
            setMovies(formatted)
            setIsLoading(false)
            console.log(movies)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMovies()
        
    },[id])
    
    return (
           <>
                {isLoading ? <MovieSkel /> : <MovieDetail movies={movies} /> }
           </>
         )
}
export default Movie