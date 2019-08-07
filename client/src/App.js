import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/layouts/navbar/index";
import Jumbotron from "./components/layouts/jumbotron/index";
import Footer from "./components/layouts/footer/index";
import Home from "./components/pages/Home/Home";
import userSignUp from "./components/pages/userSignUp";
import "./App.css";
import submitReiew from './components/pages/ReviewSubmit/submitReview';
import weeklyTrivia from './components/pages/Trivia/weeklyTrivia';
import dashboard from './components/pages/Users/Profile/dashboard';
import userReviews from "./components/pages/Reviews/userReviews";


 class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Jumbotron />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/review" component={submitReiew}></Route>
          <Route exact path="/userReviews" component={userReviews}></Route>
          <Route exact path="/weeklyTrivia" component={weeklyTrivia}></Route>
          <Route exact path="/dashboard" component={dashboard}></Route>
          <Route exact path="/userSignUp" component={userSignUp}></Route>
          <Footer />
        </div>
      </Router>
     
    )
  }
}

export default App;