import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layouts/navbar/index";
import Jumbotron from "./components/layouts/jumbotron/index";
import Footer from "./components/layouts/footer/index";

import "./App.css";

 class App extends Component {
  render() {
    return (
      <div>
       <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <Footer />
      </div>
      </Router>  
      </div>
    )
  }
}

export default App;