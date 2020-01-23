import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Framework from "./Components/Framework/Framework";
import SpecificTrendingMovieDetails from './Components/SpecificMovieCard/SpecificTrendingMovieDetails'
import "./App.css";
import PopularMovies from "./Components/PopularMovies/PopularMovies";
import MovieBySearch from "./Components/MovieBySearch/MovieBySearch";

function App() {
  return (
    <Router>
      
      <div className="App">
   

        <Switch>
          <Route path="/" exact={true} component={Framework} />
           <Route path="/popular-movies"  component={PopularMovies}/>
           <Route path="/search-movies"  component={MovieBySearch}/>
           <Route path="/newly-released"  component={PopularMovies}/>
           <Route path="/my-comments"  component={PopularMovies}/>
          <Route path="/trending/:id" component={SpecificTrendingMovieDetails} />
          <Route path="/movie_detail/:id" component={SpecificTrendingMovieDetails} />
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
