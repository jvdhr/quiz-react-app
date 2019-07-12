import React from "react";

import Navbar from "./Navbar";

import jay from "../img/jay.jpg";
import styles from "../styles/AboutStyles";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function About() {
  const classes = styles();

  return (
    <>
      <Navbar title={`About`} backButton={true} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paperAbout}>
          <Avatar alt="jay" src={jay} className={classes.bigAvatar} />
          <Typography component="h1" variant="h3">
            Javad Hosseinzadeh
          </Typography>
          <Typography
            className={classes.infoAbout}
            color="textSecondary"
            align="center"
            component="h2"
            variant="h5"
          >
            Web Designer and Developer
          </Typography>
          <Link
            href="https://www.linkedin.com/in/jvdhr/"
            target="_blank"
            variant="h6"
          >
            {"See My LinkedIn Profile"}
          </Link>
          <div className={classes.footerAbout}>
            <Typography component="p" align="center">
              You can find the code repo on{" "}
              <Link
                href="https://github.com/jvdhr/quiz-react-app"
                target="_blank"
              >
                Github
              </Link>
              . Feel free to make any pull requests to improve the application.
              <br /> <em>Made With ❤</em>
            </Typography>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
