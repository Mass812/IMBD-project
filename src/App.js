import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Framework from "./Components/Framework/Framework";
import SpecificTrendingMovieDetails from './Components/SpecificMovieCard/SpecificTrendingMovieDetails';
import TvDetailCard from './Components/SpecificMovieCard/TvDetailCard';
import "./App.css";
import MovieBySearch from "./Components/MovieBySearch/MovieBySearch";

function App() {
  return (
    <Router>
      
      <div className="App">
   

        <Switch>
          <Route path="/" exact={true} component={Framework} />
           <Route path="/search-movies"  component={MovieBySearch}/>
          <Route path="/trending/:id" component={SpecificTrendingMovieDetails} />
          <Route path="/trending-tv/:id" component={TvDetailCard} />
          <Route path="/movie_detail/:id" component={SpecificTrendingMovieDetails} />
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
