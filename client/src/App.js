import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Results from './components/Results/Results';
import Card from './components/Card/Card';
import Search from "./components/Search/Search";

class App extends Component {


  render () {
    return (
    
    <div className="">
      <Navbar/>
      <div className="section center-align row">
        <div className="section blue-grey lighten-5">
          <Jumbotron/>
        </div>
        <div className="divider"></div>
        <div className="section">
          <Search/>
        </div>
        <div className="divider"></div>
        <div className="section">
          <Results>
            <Card />
          </Results>
        </div>

      </div>
    </div>
    )
  };
};


export default App;
