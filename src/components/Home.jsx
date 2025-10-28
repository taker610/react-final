import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { redirect, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Home = () => {

    const navigate = useNavigate()
    const [val, setVal] = useState()

    function onSearchKeyPress(key) {
            if (key === 'Enter') {
                goToHomeFromClick()
            }
        }

    function goToHomeFromClick() {
        navigate(`/movies/${val}`)
    }

    return (
        <div className="container" id="home">
            <div className="row">
                <div className="row flex__center">
                    <h1 className="largest-text">Welcome to the Movie Database</h1>
                    <h2 className="large-text">Search for a movie below</h2>
                    <div className="search__bar--container">
                        <input value={val} className="searchbar" name="searchbar" type="text" placeholder="Search by Keyword" onChange={e => setVal(e.target.value)} onKeyDown={e => onSearchKeyPress(e.key)}/>
                        <div className="search__logo" onClick={goToHomeFromClick}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home