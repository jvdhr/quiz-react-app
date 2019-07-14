import React from "react";

import styles from "../styles/ResultsStyle";
import Button from "@material-ui/core/Button";

import PieChart from "react-minimal-pie-chart";
import { withRouter } from "react-router-dom";

function Results(props) {
  const classes = styles();
  const { correct, total, wrong } = props.score;

  return (
    <>
      <div className={classes.pieChartContainer} align="center">
        <PieChart
          data={[
            {
              title: "Correct",
              value: correct,
              color: "#00a759"
            },
            {
              title: "Wrong",
              value: wrong,
              color: "#c4063c"
            }
          ]}
          totalValue={total}
          animate={true}
          animationEasing={"ease-in-out"}
          style={{ height: "250px" }}
          label
          labelStyle={{
            fontSize: "15px",
            fontFamily: "sans-serif",
            fill: "#fff"
          }}
        />
      </div>
      <div className={classes.finishButton} align="center">
        <Button
          color="primary"
          variant="contained"
          onClick={() => props.history.push("/")}
        >
          Finish
        </Button>
      </div>
    </>
  );
}

export default withRouter(Results);
