import React from "react";

import styles from "../styles/ResultsStyle";

import PieChart from "react-minimal-pie-chart";
import { withRouter } from "react-router-dom";

function Results(props) {
  const classes = styles();
  const { correct, total, wrong } = props.score;

  return (
    <>
      <div className={`col-xs-12 ${classes.pieChartContainer}`} align="center">
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
      <div className={`col-xs-12 ${classes.finishButton}`} align="center">
        <button
          className="btn btn-primary"
          onClick={() => props.history.push("/")}
        >
          Finish
        </button>
      </div>
    </>
  );
}

export default withRouter(Results);
