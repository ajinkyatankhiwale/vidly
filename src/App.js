import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Movies from "./components/movies";
import Customer from "./components/customer";
import Rentals from "./components/rentals";
import PageNotFound from "./components/pageNotFound";
import MovieDetails from "./components/MovieDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main role="main" className="container">
          <NavBar />
          <div className="content">
            <Switch>
              <Route path="/movies/:id" component={MovieDetails} />
              <Route path="/movies" component={Movies} />
              <Route path="/customer" component={Customer} />
              <Route path="/rentals" component={Rentals} />
              <Route path="/pageNotFound" component={PageNotFound} />
              <Route path="/" exact />
              <Redirect to="/pageNotFound" />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
