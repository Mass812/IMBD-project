



import React, {useState, useEffect} from 'react';
import axios from 'axios';





function Buried(){

async function pullMovie(){
    const movieDBSearch = `https://api.themoviedb.org/3/search/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&query=${searchTerm}&page=${pageNum}`;
    const movieByID = '';
    try {
        const searched = await axios
          .get(movieDBSearch)
          .then(res => [res.data.results])
          .then(res => seMoviesReturned(res[0]))
         
        const searchedID = await axios
            .get(movieByID)
            .then(res => setMovieDetails(res[0]))

} catch {

} finally {
            console.log(movieDetails, moviesReturned)
}
}


    useEffect(() => {
        pullMovie();
        return () => {
            console.log('useEffect has fired and updated')
        };
    }, [searchTerm])
}



    useEffect(() => {
      const movieDBSearch = `https://api.themoviedb.org/3/search/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&query=${searchTerm}&page=${pageNum}`;
    
    axios
      .get(movieDBSearch)
      .then(res => [res.data.results])
      .then(res => seMtovieDetails(res[0]))
      .catch(err => console.error(err, "☹️"));
      return () => {
        console.log(movieDetails)
      };
    }, [moviesReturned])


return(

<div>



</div>

)



}

export default Buried;

