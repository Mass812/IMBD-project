import React, {useState, useEffect} from 'react'
import axios from 'axios';



 const NewlyReleased =( )=>{

    const [newlyReleased, setNewlyReleased] = useState([]);

  
    useEffect(() => {
      // const pullNewReleases = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
      const pullNewReleases = `https://api.themoviedb.org/3/discover/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
      //const pullNewReleases = `https://api.themoviedb.org/3/trending/all/day?api_key=2121f2ad7169f32e4b2cab5cf77d32cd`;
  
      axios
        .get(pullNewReleases)
        .then(res => res.data.results)
        .then(res => {
          setNewlyReleased(res);
        })
        .catch(err => console.error(err, "☹️"));
  
      return () => {
        console.log("left area use effect fired");
      };
    }, []);
  


    return (  
    <div>       

    </div>
    )
};
export default NewlyReleased;