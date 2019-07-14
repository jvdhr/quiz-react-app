import React, { Component } from "react";

import Results from "./Results";
import Navbar from "./Navbar";
import Loading from "./Loading";
import Questions from "./Questions";
import Error from "./Error";

import { withStyles } from "@material-ui/styles";

import styles from "../styles/QuizStyles";

import axios from "axios";

class Quiz extends Component {
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
      this.setState({ isError: true });
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

  handleTimeout = () => {
    this.setState({ showResults: true });
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
      isDisplayMessage,
      message,
      showButton,
      isAnswerCorrect
    } = this.state;
    const total = this.props.location.state.amount;
    let jsx;
    if (isLoading && !isError) {
      jsx = <Loading />;
    } else if (!showResults && !isError) {
      jsx = (
        <Questions
          classes={classes}
          counter={counter}
          total={total}
          currQuestion={currQuestion}
          currAnswers={currAnswers}
          isDisplayMessage={isDisplayMessage}
          isAnswerCorrect={isAnswerCorrect}
          message={message}
          showButton={showButton}
          shuffleArray={this.shuffleArray}
          checkAnswer={this.checkAnswer}
          nextQuestion={this.nextQuestion}
          handleTimeout={this.handleTimeout}
        />
      );
    } else if (isError) {
      jsx = <Error classes={classes} />;
    } else if (!isError && showResults) {
      jsx = <Results score={{ total, correct, wrong }} />;
    }

    return (
      <>
        <div className={classes.cntn}>
          <div className={classes.itm}>
            <Navbar title={`Questions`} backButton={true} />
          </div>
          {jsx}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Quiz);
