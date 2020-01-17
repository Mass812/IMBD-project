import React from "react";
import "./Framework.scss";
import MovieCard from "../Movie/MovieCard";

const Framework = () => {


const greenLanternLogo = require('../../Assets/greenLanternMWlogo2.jpg')


  return (
      <div>
      <header className="framework-header"> 
      <img className='greenLantern' src={greenLanternLogo} alt={'Matt Wellman Logo'}/>
    
      </header>
      <aside className="framework-under-header"/>
    <div className="framework">
      <section className="framework-section-one">  Welcome to Quick IMDB</section>
      <section className="framework-section-two">Best Rated</section>
    <section className="framework-section-main">
        <MovieCard />
      </section>
    </div>
    </div>
  );
};
export default Framework;
