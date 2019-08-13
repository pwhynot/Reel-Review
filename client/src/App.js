import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from './components/layouts/navbar/index';
import Footer from './components/layouts/footer/index';
import Home from './components/pages/Home/Home';
import Register from './components/auth/Register';
import submitReiew from './components/pages/ReviewSubmit/submitReview';

import dashboard from './components/dashboard/dashboard';
import userReviews from './components/pages/Reviews/userReviews';
import Login from './components/auth/Login';
import PrivateRoute from "./components/privateRoute/privateRoute";
import Header from "./components/layouts/Header/header";
import itChapter2 from './components/pages/Articles/itChapter2';
import editorSummerPicks from "./components/pages/Articles/editorSummerPicks";
import './App.css';


if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}
 class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className='App'>
          <Navbar />
          <Header />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/review' component={submitReiew}></Route>
          <Route exact path='/userReviews' component={userReviews}></Route>

          <Route exact path='/register' component={Register}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/itChapter2' component={itChapter2}></Route>
          <Route exact path='/editorSummerPicks' component={editorSummerPicks}></Route>
          <Switch>
              <PrivateRoute exact path="/dashboard" component={dashboard} />
              
            </Switch>
          <Footer />
        </div>
      </Router>
      </Provider>
      
     
    )
  }
}

export default App;