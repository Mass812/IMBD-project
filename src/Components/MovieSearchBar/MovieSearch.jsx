import React from 'react';
import '../../MovieThumb.scss'


 const MovieSearch =(props )=>{
    return (  
        
 <div className="movie-button--housing">
           <div className='section-one-sub-title'>
          
          <h2>Search for a Movie</h2>
        </div>
          <input
            className="search-box"
            placeholder="Search Here"
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