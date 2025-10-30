import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import MoviesList from "./MoviesList"
import MoviesSkel from "./MoviesSkel"

const Movies = () => {

    const key = '60f86102'
    const url = "http://www.omdbapi.com/?apikey=&"
    const navigate = useNavigate()
    const [movies,setMovies] = useState([])
    const [val, setVal] = useState()
    const [loading, setLoading] = useState(true)
    const [moviesRefresh, setMoviesRefresh] = useState()

    const { event } = useParams()

    async function getMovies() {
        try {
        const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${event}`)
        const movieData = data.Search.slice(1,7)    
        console.log(movieData)
            setMovies(movieData)
        } catch(err) {
            console.log(err)
        }
    }

    function handleSelect(event) {
        const sortOrder = event.target.value
        if (sortOrder == 1) {
            const ascMovies = movies.sort((a,b) => a.Year-b.Year)
            setMovies(ascMovies)
            console.log(sortOrder)
            setMoviesRefresh(1)
            
        } else if (sortOrder == 2) {
            const descMovies = movies.sort((a,b) => b.Year-a.Year)
            setMovies(descMovies)
            console.log(descMovies)
            console.log(sortOrder)
            setMoviesRefresh(2)
        }
    
    }

    function onSearchKeyPress(key) {
            if (key === 'Enter') {
                goToHomeFromClick()
            }
        }

    function goToHomeFromClick() {
        navigate(`/movies/${val}`)
    }

    useEffect(() => {
        getMovies()
        setLoading(false)
    },[event])

       return (
                <div className="container">
                    <div className="row flex__center">
                        <h1 className="largest-text">Browse our movie database</h1>
                        <div className="search__bar--container">
                            <input val={val} className="searchbar" name="searchbar" type="text" placeholder="Search by Title" onChange={e => setVal(e.target.value)} onKeyDown={e => onSearchKeyPress(e.key)}/>
                            <div className="search__logo" onClick={goToHomeFromClick}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <div>
                        </div>
                        </div>
                        <p><b>Search by title in the box above</b></p>
                        <p className="select__label"><b>Sort Results</b></p>
                        <select className="select" onChange={handleSelect}>
                            <option value=""></option>
                            <option value="1">Sort Release Year by Ascending</option>
                            <option value="2">Sort Release Year by Descending</option>
                        </select>
                        {loading ? <MoviesSkel movies={movies}/> : <MoviesList  movies={movies} event={event} />}
                    </div>
                </div>
              )
}

export default Movies