const styles = {
  cntn: {
    display: "flex" /* or inline-flex */,
    flexDirection: "column",
    alignContent: "space-between",
    position: "absolute",
    top: "0",
    bottom: "0",
    width: "100%"
  },
  itm: {
    color: "black"
  },
  footer: {
    marginTop: "auto"
  },
  error: {
    padding: "5px 10px",
    textAlign: "center"
  },
  itemQuestion: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    overflow: "auto",
    /* for Firefox */
    minHeight: "10px"
  },
  answerCorrect: {
    display: "inline-block",
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#00a759",
    borderRadius: "7px",
    fontSize: "1.2rem",
    color: "#fff",
    textAlign: "center"
  },
  answerWrong: {
    display: "inline-block",
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#c4063c",
    borderRadius: "7px",
    fontSize: "1.2rem",
    color: "#fff",
    textAlign: "center"
  },
  nextBtn: {
    maxWidth: "200px",
    margin: "0 auto",
    borderRadius: "7px"
  },
  loadingContainer: {
    marginTop: "50px"
  },
  colCurrentQuestion: {
    margin: "10px auto",
    padding: "25px",
    backgroundColor: "#fcb902",
    borderRadius: "7px",
    fontSize: "1.2rem",
    color: "rgb(54, 54, 54)",
    cursor: "default",
    textAlign: "center"
  },
  colQuestionCounter: {
    margin: "20px 0",
    fontSize: "2rem",
    color: "#2f3640",
    cursor: "default"
  },
  colAnswer: {
    minWidth: "250px",
    margin: "5px 0",
    padding: "5px",
    backgroundColor: "#546de5",
    borderRadius: "7px",
    fontSize: "1.2rem",
    color: "#fff",
    textAlign: "center",
    transition: "box-shadow 0.2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "inset 0 0 100px 100px rgba(255, 255, 255, 0.3)"
    }
  }
};

export default styles;
