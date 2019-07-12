import React from "react";

import Navbar from "./Navbar";

import styles from "../styles/NotFoundStyles";

import { Link } from "react-router-dom";

function NotFound() {
  const classes = styles();
  console.log(classes.notFound);
  return (
    <>
      <Navbar title={``} backButton={true} />
      <div className={classes.notFound}>
        <div className={`container ${classes.contain}`}>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12 text-center">
              <h1 className="h1">
                <span>404</span>
              </h1>
              <h2>Oh, no!</h2>
              <h5 className="mb-5">
                <em>
                  We are in the middle of nowhere please go back{" "}
                  {<Link to="/">home</Link>}...
                </em>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
