import React from 'react';


 const MovieSearch =(props )=>{
    return (  
        
 <div className="movie-button--housing">
          <h1>Movie Search</h1>
          <input
            className="search-box"
            placeholder="Search for a Movie"
            onChange={props.onChange}
            onBlur={props.onBlur}
            onKeyPress={props.onKeyPress}
          />
          <button className="search-button" onSubmit={props.onSubmit}>
            Search Movies{" "}
          </button>
    </div>
    )
};
export default MovieSearch;