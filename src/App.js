import Movies from "./components/Movies";
import Nav from "./components/Nav"
import Home from "./components/Home"
import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            //<Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:event" element={<Movies />}></Route>
            <Route path="/details/:id" element={<Movie/>}></Route>
          </Routes> 
          <Footer />
      </div>
    </Router>
  );
}

export default App;
