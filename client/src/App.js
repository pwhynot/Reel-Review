import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/layouts/navbar/index";
import Jumbotron from "./components/layouts/jumbotron/index";
import Footer from "./components/layouts/footer/index";

//import review from "./components/pages/review";



import "./App.css";
import submitReiew from './components/submitReview';


 class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Jumbotron />
          <Route exact path="/review" component={submitReiew}></Route>
          <Footer />
        </div>
      </Router>
     
    )
  }
}

export default App;