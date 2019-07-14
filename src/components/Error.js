import React from "react";
import Container from "@material-ui/core/Container";

export default function Error(props) {
  const { classes } = props;
  return (
    <Container component="main" maxWidth="sm">
      <div className={`${classes.itm} ${classes.error}`}>
        <h4>Sorry, Something Went Wrong</h4>
        <h2>
          <em>Please Reload The Page</em>
        </h2>
      </div>
    </Container>
  );
}
