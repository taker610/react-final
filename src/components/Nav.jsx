
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <section id="navigation">
            <div className="container">
                <div className="row">
                    <nav className="nav__wrapper">
                        <div>
                            <h2 className="large-text">The Movie Database</h2>
                        </div>
                        <ul className="list__wrapper">
                            <Link to="/"><li className="list-item">Home</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </section> 
    )
}
export default Nav