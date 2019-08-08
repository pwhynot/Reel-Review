import React, { Component } from 'react';
import Poll from 'react-polls';

const pollQuestion = 'What is the best Texas based Television Show'
const pollAnswers = [
  { option: 'King of the Hill' },
  { option: 'Dallas' },
  { option: 'Fear the Walking Dead'},
  { option: 'Fixer Upper'}
]
 
class Polls extends Component {
  state = {
    pollAnswers: [...pollAnswers]
  }
 
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