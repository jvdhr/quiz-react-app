import React from "react";
import styles from "../styles/QuizStyles";
import "../styles/loader.css";
import { withStyles } from "@material-ui/core";

function Loading(props) {
  const { classes } = props;
  return (
    <div
      className={`${classes.itm} ${classes.loadingContainer}`}
      align="center"
    >
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
}

export default withStyles(styles)(Loading);
