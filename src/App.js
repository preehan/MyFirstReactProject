
import { useEffect }from 'react';
import moviecart from './moviecart';
import { useState } from 'react';    
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6d95b806';
const App = () => {
    const [movies, setmovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
 setmovies(data.Search);
} 
useEffect(() => {
searchmovies('Spiderman');
},[]);
return (
    <div className='app'>
<h1>FilmLand</h1>
<div className='search'>
<input
placeholder="Search for Movies"
value={searchTerm}
onChange={(e) => setsearchTerm(e.target.value)}
/>
<img src={SearchIcon} alt='search'
onClick={() => searchmovies(searchTerm)}/>
</div>
{
    movies?.length > 0
    ? (
        <div className='container'>
        {movies.map((movie) => 
       (<moviecart movie = {movie} />) )}
       </div>    
    ) :
    (
        <div className='empty'>
            <h2>No movies found</h2>
        </div>
    )
}

    </div>   
);
}
export default App;