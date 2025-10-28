import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"

import axios from 'axios'
import MovieSkel from './MovieSkel'


const MovieDetail = (movies) => {
       return (
           <div className="details__container">
               <div className="left__side--panel">
                    <img src={movies.Poster ? movies.Poster : null} alt="" />
                </div>
                <div className="right__side--panel">
                    <h2>{movies.title}</h2>
                    <h3>Plot Synopsis</h3>
                    <p className="plot">{movies.Plot}</p>
                    <p>Directed by: {movies.Director}</p>
                    <p>Rated {movies.Rated}</p>
                    <p>Genre: {movies.Genre}</p>
                    <p>Release Date: {movies.Released}</p>
                    <p>Runtime: {movies.Runtime}</p>
                    <Link to={'/'}><FontAwesomeIcon icon={faArrowLeft} />Back to Home</Link>
                </div>
           </div>
              )
}
export default MovieDetail