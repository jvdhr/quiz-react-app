import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowForward from "@material-ui/icons/ArrowForward";

import styles from "../styles/NavbarStyles";

import { withRouter } from "react-router-dom";

function Navbar(props) {
  const classes = styles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          {props.backButton ? (
            <>
              <IconButton
                color="inherit"
                onClick={() => {
                  props.history.goBack();
                }}
                className={classes.button}
                aria-label="Delete"
              >
                <ArrowForward fontSize="inherit" />
              </IconButton>
            </>
          ) : (
            <Button
              color="inherit"
              onClick={() => {
                props.history.push("/about");
              }}
            >
              About
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
