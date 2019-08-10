import React, { Component } from 'react'
//import Polls from '../../onlinePoll/Polls';
import Card from '../../layouts/card/index';

 class Home extends Component {
    render() {
        return (
            <div>
               <h2>Welcome to Reel Review!</h2> 
               <h4>Check out the latest film and televison news below and be sure take our online poll of the week!</h4>
        <Card />

            </div>
        )
    }
}

export default Home;