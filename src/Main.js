import React, { useState } from "react";
import { Poster } from "./components/movieAPI"
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const API_URL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
  

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {
 const [query, setQuery] = useState();
 const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value)

    fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${e.target.value}`
    )
    .then((res) => res.json())
    .then((data) => {
      if(!data.errors){
        setResults(data.results);
      } else {
        setResults([]);   
      }
    });
  };

    return (
      <div>
        <div className="navbar">
          <ul>
            <li>Home</li>
          </ul>
        <input className="search"
        type="text"
        placeholder="Search for a movie"
        onChange={onChange}
        value={query}></input>
        </div>
            {results.length > 0 && (
              <div className="container">
                
                {results.map((movie) => (
                  <div key={movie.id}>
                    
                    <Poster movie={movie} />
                  </div>
                ))}
              </div>
            
            )}
      </div>
    )
}

export default MovieBox