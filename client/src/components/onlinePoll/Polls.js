import React, { Component } from 'react';
import Poll from 'react-polls';
 
// Declaring poll question and answers
const pollQuestion = 'What is the best Texas based Television Show'
const pollAnswers = [
  { option: 'King of the Hill' },
  { option: 'Dallas' },
  { option: 'Fear the Walking Dead'},
  { option: 'Fixer Upper'}
]
 
class Polls extends Component {
  // Setting answers to state to reload the component with each vote
  state = {
    pollAnswers: [...pollAnswers]
  }
 
  // Handling user vote
  // Increments the votes count of answer when the user votes
  handleVote = voteAnswer => {
    const { pollAnswers } = this.state
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    })
    this.setState({
      pollAnswers: newPollAnswers
    })
  }
 
  render () {
    const { pollAnswers } = this.state
    return (
      <div>
        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
      </div>
    );
  }
};

export default Polls;