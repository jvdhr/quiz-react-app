import React from "react";

import Navbar from "./Navbar";

import styles from "../styles/NotFoundStyles";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";

function NotFound() {
  const classes = styles();
  console.log(classes.notFound);
  return (
    <>
      <Navbar title={``} backButton={true} />
      <div className={classes.notFound}>
        <Container component="main" maxWidth="sm">
          <h1 className="h1">
            <span>404</span>
          </h1>
          <h2>Oh, no!</h2>
          <h5>
            <em>
              We are in the middle of nowhere please go back{" "}
              {<Link to="/">home</Link>}...
            </em>
          </h5>
        </Container>
      </div>
    </>
  );
}

export default NotFound;
