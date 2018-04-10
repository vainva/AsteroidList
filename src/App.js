import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "bulma/css/bulma.css";
import Asteroids from "./Components/Asteroids";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Asteroids />
        <Footer />
      </div>
    );
  }
}

export default App;
