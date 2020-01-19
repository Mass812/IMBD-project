import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SpecificMovie.scss";

const SpecificTrendingMovieDetails = () => {
  const [data, setData] = useState([]);

  let idParam = useParams();
  let newID = idParam.id.substr(0);
  console.log(idParam, newID)

  useEffect(() => {
    axios
      .get(
        //  `https://api.themoviedb.org/3/movie/38700?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&append_to_response=credits`
        `https://api.themoviedb.org/3/movie/${newID}?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&append_to_response=credits`
      )

      .then(res => setData([res.data]))
      .catch(err => console.error("Could not load data"));

    return () => {
      console.log("Specific has fired");
    };
  }, [newID]);

  console.log("useStae data: ", data);

  const movieDetails = data.map((n, idx) => (
    <div key={idx} className="specific-movie-container">
      <div>
        <section className="specific-movie-basic-container">
          <img
            className="specific-movie-poster"
            src={
              n.poster_path === null
                ? require("../../Assets/greenLanternMWlogo2.jpg")
                : `https://image.tmdb.org/t/p/w500${n.poster_path}`
            }
            alt={n.title}
          />
          <div className="specific-movie-title">
            <h1>{n.title}</h1>
            <br />
            <hr />
            <p>{n.overview}</p>
          </div>
        </section>
       
        <section className="specific-movie-under-header">
          <img
            className="specific-movie-backdrop"
            src={
              n.poster_path === null
                ? require("../../Assets/greenLanternMWlogo2.jpg")
                : `https://image.tmdb.org/t/p/w500${n.backdrop_path}`
            }
            alt={n.title}
          />
          <div className="specific-movie-budget">{n.budget}</div>
          <div className="specific-movie-date">{n.release_date}</div>
          <div className="specific-movie-title">{n.crew}</div>
        </section>
      </div>
    </div>
  ));

  return <div>{movieDetails}</div>;
};
export default SpecificTrendingMovieDetails;
