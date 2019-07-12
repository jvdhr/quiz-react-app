const styles = {
  answerCorrect: {
    display: "inline-block",
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#00a759",
    borderRadius: "7px",
    fontSize: "2rem",
    color: "#fff"
  },
  answerWrong: {
    display: "inline-block",
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#c4063c",
    borderRadius: "7px",
    fontSize: "2rem",
    color: "#fff"
  },
  loadingContainer: {
    marginTop: "50px"
  },
  countdownFooter: {
    position: "fixed",
    bottom: "0px",
    left: "0px",
    right: "0px",
    padding: "10px",
    backgroundColor: "#284664"
  },
  colCurrentQuestion: {
    margin: "10px 0",
    padding: "25px",
    backgroundColor: "#fcb902",
    borderRadius: "7px",
    fontSize: "2rem",
    color: "rgb(54, 54, 54)",
    cursor: "default"
  },
  colQuestionCounter: {
    marginTop: "20px",
    padding: "25px",
    fontSize: "4rem",
    color: "#2f3640",
    cursor: "default"
  },
  colAnswer: {
    marginTop: "5px",
    marginBottom: "5px",
    padding: "5px",
    backgroundColor: "#546de5",
    borderRadius: "7px",
    fontSize: "2rem",
    color: "#fff",
    transition: "box-shadow 0.2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "inset 0 0 100px 100px rgba(255, 255, 255, 0.3)"
    }
  }
};

export default styles;
