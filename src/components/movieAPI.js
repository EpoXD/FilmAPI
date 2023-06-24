import React from "react";

export const Poster = ({movie}) => {
    if(movie.poster_path){
    return (
        
        <div className="movie">
            
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={`${movie.title}`} />
                    ) : (
                        <div className="movie"></div>
                        )}

                        
               <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <span>{movie.vote_average}</span>
                  </div>
        </div>
    )
}
}
