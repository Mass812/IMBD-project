import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Framework from "./Components/Framework/Framework";
import SpecificTrendingMovieDetails from './Components/MovieDetailComp/SpecificTrendingMovieDetails'
import "./App.css";
import ScrollReset from "./Components/ScrollReset/ScrollReset";
import LeftSection from "./Components/LeftSection/LeftSection";

function App() {
  return (
    <Router>
      {/* <ScrollReset> */}
      <div className="App">
   

        <Switch>
          <Route path="/" exact={true} component={Framework} />
          <Route path="/trending/:id" component={SpecificTrendingMovieDetails} />
          <Route path="/movie_detail/:id" component={SpecificTrendingMovieDetails} />
        </Switch>
      </div>
      {/* </ScrollReset> */}
    </Router>
  );
}

export default App;
