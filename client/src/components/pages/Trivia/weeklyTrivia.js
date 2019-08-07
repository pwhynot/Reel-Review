import React from "react";
import { triviaData } from "./triviaData";

class weeklyTrivia extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadtriviaData = () => {
    this.setState(() => {
      return {
        questions: triviaData[this.state.currentQuestion].question,
        answer: triviaData[this.state.currentQuestion].answer,
        options: triviaData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadtriviaData();
  }
  nextQuestionHandler = () => {
    
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: triviaData[this.state.currentQuestion].question,
          options: triviaData[this.state.currentQuestion].options,
          answer: triviaData[this.state.currentQuestion].answer
        };
      });
    }
  }
  
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === triviaData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>Game Over your Final score is {this.state.score} points, check back next week for a new set of questions. </h3>
          <p>
            The correct answer's for the questions are 
            <ul>
              {triviaData.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </p>
        </div>
      );
    } else {
      return (
        <div className="weeklyTrivia">
          <h4>{this.state.questions} </h4>
          <span>{`Questions ${triviaData.length - 1} out of ${triviaData.length} remaining `}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < triviaData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button>
          )}
          {currentQuestion === triviaData.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export default weeklyTrivia;