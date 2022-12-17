import './App.css';
import React, { useState, useEffect } from 'react';
import MoviesCard from './components/movies-card/movies-card.component';
import SearchBox from './components/search-box/search-box.coponents';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [movie, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movie)

  const key = process.env.API_KEY
console.log(key)
  const fetchData = async (event) => {

    const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=83cbd73ed3a369f069c0638d99dd78e8`)
    .then((response) => response.json())
     setMovies(api.results)  
     console.log(api.results)    
  } 
  
  useEffect(() => {
     fetchData()
  },[])

  useEffect(() => {
    var newFilteredMovies = movie.filter((item) => {
      return item.original_title.toLocaleLowerCase().includes(searchField)
      })
      
      setFilteredMovies(newFilteredMovies);

   },[movie,searchField])
  
  const onSearchChange = (event) => {
        const searchTermString = event.target.value.toLocaleLowerCase();
        setSearchField(searchTermString);
    };

  
  return (
    <div className='App'>
        <h1 className="title">Movie Search</h1>
        <SearchBox className = 'search-box' onSearchHandler={onSearchChange} placeholder={'Enter movie'}/>
        <MoviesCard movies = {filteredMovies}/>
    </div>
  )
}

export default App;
