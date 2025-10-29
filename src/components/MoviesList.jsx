import { Link } from "react-router-dom"


const MoviesList = ({ movies, event }) => {
       return (
            <div className="row">
                <div className="searchHeader">
                    <h3>Results for <span className="resultsHeader">"{event}"</span></h3>
                </div>
                <div className="search__results">
                    {movies.map((movie) => (
                        <div className="movie__card">
                            <div className="movie__card--container">
                                <Link to={`/details/${movie.imdbID}`}>
                                <h3 key={movie.imdbID}>{movie.Title}</h3>
                                <p>{movie.Year}</p>
                                <img src={movie.Poster} className="poster"/>
                                </Link>
                            </div>
                        </div>
                    
                    ))}
                </div>
            </div>
              )
}
export default MoviesList