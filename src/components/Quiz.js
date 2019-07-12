import React, { Component } from "react";

import Results from "./Results";
import Navbar from "./Navbar";
import Answers from "./Answers";

import { withStyles } from "@material-ui/styles";

import "../styles/loader.css";
import styles from "../styles/QuizStyles";

import ReactCountdownClock from "react-countdown-clock";
import axios from "axios";

class Questions extends Component {
  state = {
    counter: 0,
    questions: [],
    currQuestion: "",
    currAnswers: [],
    currCorrectAnswer: "",
    isLoading: true,
    correct: 0,
    wrong: 0,
    showResults: false,
    questionAnswered: false,
    showButton: false,
    isError: false,
    errorText: "",
    isAnswerCorrect: undefined,
    message: "",
    isDisplayMessage: false
  };

  async componentDidMount() {
    const {
      category,
      difficulty,
      token,
      amount: total
    } = this.props.location.state;
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${total}&difficulty=${difficulty}&type=multiple&token=${token}&category=${category}&encode=base64`
      );
      if (!(response.status === 200) || !(response.data.response_code === 0)) {
        throw new Error(`Couldn't fetch data`);
      } else {
        this.setState(st => {
          const newState = {
            ...st,
            questions: this.shuffleArray(response.data.results),
            isLoading: false
          };
          return newState;
        });

        const { counter } = this.state;
        this.pushData(counter);
      }
    } catch (error) {
      this.setState({ isError: true, errorText: error.message });
    }
  }

  pushData = counter => {
    if (!this.state.isError) {
      this.setState(st => {
        const newState = {
          ...st,
          currQuestion: this.state.questions[counter].question,
          currAnswers: [
            this.state.questions[counter].correct_answer,
            ...this.state.questions[counter].incorrect_answers
          ],
          currCorrectAnswer: this.state.questions[counter].correct_answer,
          counter: this.state.counter + 1
        };
        return newState;
      });
    }
  };

  nextQuestion = () => {
    const { counter } = this.state;
    const total = this.props.location.state.amount;

    if (counter === total) {
      this.setState({ showResults: true });
    } else {
      this.pushData(counter);
      this.setState({
        showButton: false,
        questionAnswered: false,
        isDisplayMessage: false,
        isAnswerCorrect: undefined,
        message: ""
      });
    }
  };

  handleShowButton = () => {
    this.setState({
      showButton: true,
      questionAnswered: true
    });
  };

  increaseCorrect = () => {
    this.setState(st => {
      const newState = {
        ...st,
        correct: st.correct + 1
      };
      return newState;
    });
  };

  increaseWrong = () => {
    this.setState(st => {
      const newState = {
        ...st,
        wrong: st.wrong + 1
      };
      return newState;
    });
  };

  shuffleArray = a => {
    let randomArray = [];
    while (a.length !== 0) {
      let randomIndex = Math.floor(Math.random() * a.length);
      randomArray.push(a[randomIndex]);
      a.splice(randomIndex, 1);
    }
    return randomArray;
  };

  checkAnswer = ans => {
    const { currCorrectAnswer, questionAnswered } = this.state;

    if (!questionAnswered) {
      let answer = atob(ans);
      let isCorrect = answer === atob(currCorrectAnswer);

      if (isCorrect) {
        this.increaseCorrect();
        this.setState({ isAnswerCorrect: true });
      } else {
        this.increaseWrong();
        this.setState({ isAnswerCorrect: false });
      }
      this.setMsg(isCorrect, atob(currCorrectAnswer));
    }

    this.handleShowButton();
  };

  setMsg = (isCorrect, answer) => {
    if (isCorrect) {
      this.setState({ message: "Congratulations, That was correct" });
    } else {
      this.setState({
        message: `Sorry, That was no correct. The correct answer was ${answer}`
      });
    }
    this.setState({ isDisplayMessage: true });
  };

  render() {
    const { classes } = this.props;
    const {
      counter,
      currQuestion,
      currAnswers,
      isLoading,
      correct,
      wrong,
      showResults,
      isError,
      errorText
    } = this.state;
    const total = this.props.location.state.amount;
    let jsx;
    if (isLoading && !isError) {
      jsx = (
        <div className={`col-xs-12 ${classes.loadingContainer}`} align="center">
          <div className="loader">
            <svg viewBox="0 0 80 80">
              <circle id="test" cx="40" cy="40" r="32" />
            </svg>
          </div>
          <div className="loader triangle">
            <svg viewBox="0 0 86 80">
              <polygon points="43 8 79 72 7 72" />
            </svg>
          </div>
          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect x="8" y="8" width="64" height="64" />
            </svg>
          </div>
        </div>
      );
    } else if (!showResults && !isError) {
      jsx = (
        <>
          <div
            className={`col-xs-12 ${classes.colQuestionCounter}`}
            align="center"
          >
            <span>
              Question {counter} of {total}
            </span>
          </div>
          <div className={`col-xs-12 ${classes.colQuestion}`} align="center">
            <div className="row">
              <div className={`col-xs-12 ${classes.colCurrentQuestion}`}>
                <h4>{atob(currQuestion)}</h4>
              </div>
              <div className="col-sm-12">
                <Answers
                  answers={this.shuffleArray(currAnswers)}
                  checkAnswer={this.checkAnswer}
                />
              </div>
              {this.state.isDisplayMessage ? (
                <div
                  className={
                    this.state.isAnswerCorrect
                      ? classes.answerCorrect
                      : classes.answerWrong
                  }
                >
                  {this.state.message}
                </div>
              ) : null}
              {this.state.showButton ? (
                <div className="col-sm-12">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.nextQuestion}
                  >
                    Next question
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div className={classes.countdownFooter}>
            <ReactCountdownClock
              seconds={120}
              color="#fff"
              alpha={1.0}
              size={75}
              weight={5}
              fontSize="auto"
              font="Arial"
              showMilliseconds={true}
              paused={false}
              onComplete={() => this.setState({ showResults: true })}
            />
          </div>
        </>
      );
    } else if (isError) {
      jsx = (
        <>
          <h4>Sorry, something went wrong</h4>
          <h2>
            <em> {errorText}</em>
          </h2>
        </>
      );
    } else if (!isError && showResults) {
      jsx = <Results score={{ total, correct, wrong }} />;
    }

    return (
      <>
        <Navbar title={`Questions`} backButton={true} />
        <div className="container">
          <div className="row">{jsx}</div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Questions);
