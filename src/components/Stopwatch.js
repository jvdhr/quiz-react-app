import React from "react";
import ReactCountdownClock from "react-countdown-clock";
import styles from "../styles/StopwatchStyles";

export default function Footer(props) {
  const classes = styles();
  return (
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
        onComplete={props.handleTimeout}
      />
    </div>
  );
}
