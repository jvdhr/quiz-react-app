import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "../styles/QuizStyles";

const useStyles = makeStyles(styles);

function Answers(props) {
  const classes = useStyles();

  const handleClick = e => {
    props.checkAnswer(e.currentTarget.dataset.answer);
  };

  const { answers } = props;
  return (
    <>
      {answers.map(answer => {
        return (
          <div
            className={classes.colAnswer}
            key={answer}
            data-answer={answer}
            onClick={handleClick}
          >
            {atob(answer)}
          </div>
        );
      })}
    </>
  );
}

export default Answers;
