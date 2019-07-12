import React, { useState, useEffect, useRef } from "react";

// Components
import Navbar from "./Navbar";

// Material UI
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

// Resources and Styles
import quiz from "../img/quiz.webp";
import styles from "../styles/MainStyles";

// Third Party
import axios from "axios";

function Main(props) {
  const classes = styles();
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [amount, setAmount] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [token, setToken] = useState("");
  const [categories, setCategories] = useState([""]);
  const [category, setCategory] = useState("");

  const getToken = async () => {
    try {
      const response = await axios.get(
        `https://opentdb.com/api_token.php?command=request`
      );
      if (!(response.status === 200)) {
        throw new Error(`Couldn't fetch data`);
      } else {
        setToken(response.data.token);
      }
    } catch (error) {}
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(`https://opentdb.com/api_category.php`);
      if (!(response.status === 200)) {
        throw new Error(`Couldn't fetch data`);
      } else {
        setCategories(response.data.trivia_categories);
      }
    } catch (error) {}
  };

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    getToken();
    getCategories();
  }, []);

  const handleNumChange = e => {
    setAmount(e.target.value);
  };

  const handleDifficultyChange = e => {
    setdifficulty(e.target.value);
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  const toggleDisplayError = () => {
    if (!displayError) {
      setDisplayError(!displayError);
    }
  };

  const startQuiz = () => {
    if (amount !== "" && difficulty !== "" && category !== "") {
      props.history.push({
        pathname: "/quiz",
        state: { amount, difficulty, token, category }
      });
    } else toggleDisplayError();
  };

  return (
    <>
      <Navbar title="Quiz App" />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar alt="quiz" src={quiz} className={classes.bigAvatar} />

          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} htmlFor="category-select">
              Category
            </InputLabel>
            <Select
              value={category}
              onChange={handleCategoryChange}
              input={
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="category"
                  id="category-select"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories.map((category, idx) => {
                return (
                  <MenuItem key={idx} value={category.id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} htmlFor="number-select">
              Questions
            </InputLabel>
            <Select
              value={amount}
              onChange={handleNumChange}
              input={
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="amount"
                  id="number-select"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} htmlFor="difficulty-select">
              Difficulty
            </InputLabel>
            <Select
              value={difficulty}
              onChange={handleDifficultyChange}
              input={
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="difficulty"
                  id="difficulty-select"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"easy"}>Easy</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"hard"}>Hard</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={startQuiz}
          >
            Start
          </Button>
          {displayError ? (
            <div className={classes.customBox}>
              <Typography component="p" align="center">
                Please Select Category, Difficulty and Number of Questions
              </Typography>
            </div>
          ) : null}
        </div>
      </Container>
    </>
  );
}

export default Main;
