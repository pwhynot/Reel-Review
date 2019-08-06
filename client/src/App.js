import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/layouts/navbar/index";
import Jumbotron from "./components/layouts/jumbotron/index";
import Footer from "./components/layouts/footer/index";
import Home from "./components/pages/Home";
//import review from "./components/pages/review";



import "./App.css";
import submitReiew from './components/submitReview';
import weeklyTrivia from './components/pages/weeklyTrivia';
import dashboard from './components/pages/dashboard';


 class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Jumbotron />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/review" component={submitReiew}></Route>
          <Route exact path="/weeklyTrivia" component={weeklyTrivia}></Route>
          <Route exact path="/dashboard" component={dashboard}></Route>
          <Footer />
        </div>
      </Router>
     
    )
  }
}

export default App;