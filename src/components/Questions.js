import React from "react";

import Answers from "./Answers";
import Stopwatch from "./Stopwatch";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

function Questions(props) {
  const {
    classes,
    counter,
    total,
    currQuestion,
    currAnswers,
    shuffleArray,
    checkAnswer,
    isDisplayMessage,
    isAnswerCorrect,
    message,
    showButton,
    nextQuestion,
    handleTimeout
  } = props;
  return (
    <>
      <Container component="main" maxWidth="sm">
        <div
          className={`${classes.itm} ${classes.colQuestionCounter}`}
          align="center"
        >
          <span>
            Question {counter} of {total}
          </span>
        </div>
        <div className={`${classes.itm} ${classes.colCurrentQuestion}`}>
          <h4>{atob(currQuestion)}</h4>
        </div>
        <div className={classes.itemQuestion}>
          <Answers
            answers={shuffleArray(currAnswers)}
            checkAnswer={checkAnswer}
          />
          {isDisplayMessage ? (
            <div
              className={
                isAnswerCorrect ? classes.answerCorrect : classes.answerWrong
              }
            >
              {message}
            </div>
          ) : null}
          {showButton ? (
            <Button
              variant="contained"
              color="primary"
              className={classes.nextBtn}
              onClick={nextQuestion}
            >
              Next Question
            </Button>
          ) : null}
        </div>
      </Container>
      <div className={`${classes.itm} ${classes.footer}`}>
        <Stopwatch handleTimeout={handleTimeout} />
      </div>
    </>
  );
}

export default Questions;
