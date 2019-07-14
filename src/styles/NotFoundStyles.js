import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  "@ global": {
    transition: "0.3s all ease"
  },
  notFound: {
    marginTop: "50px",
    "& a": {
      color: "#2f3640",
      textDecoration: "underline"
    },
    "& .contain": {
      position: "relative"
    },
    "& .h1": {
      color: "#2f3640",
      fontSize: "18rem",
      fontWeight: "900",
      position: "relative",
      textAlign: "center",
      "@media (max-width: 980px)": {
        fontSize: "10rem"
      }
    },
    "& h2": {
      color: "#2f3640",
      fontSize: "2rem",
      textAlign: "center"
    },
    "& h5": {
      fontSize: "1.3rem",
      textAlign: "center",
      color: "rgba(47, 54, 64, 1)"
    }
  }
}));

export default styles;
