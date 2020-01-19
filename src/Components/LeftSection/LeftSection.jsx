import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LeftSection.scss";

const LeftSection = () => {
  const [newlyReleased, setNewlyReleased] = useState([]);

  const API_KEY = process.env.REACT_APP_TMBD_KEY;
  useEffect(() => {
   const pullNewReleases = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

    axios
      .get(pullNewReleases)
      .then(res => res.data.results)
      .then(res => {
        setNewlyReleased(res);
      })
      .catch(err => console.error(err, "☹️"));

    return () => {
      console.log("left area use effect fired", );
    };
  },[]);

  console.log('new and trending', newlyReleased)

  const nowTrending = newlyReleased.map((n, id) => (
    <div key={n.id} className='trending-card-body'>
       <div className='trending-photo-body'>

        <div className="trending">{!n.title ? 'No Title' : n.title}</div>
        <img className='trending-photo' src={`https://image.tmdb.org/t/p/w500${n.poster_path}`} alt={n.title} />
       </div>
      
    </div>
  ));

  return (
    <div>
      <div> {nowTrending} </div>
    </div>
  );
};
export default LeftSection;
