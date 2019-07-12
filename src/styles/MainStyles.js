import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#f1f2f6",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  bigAvatar: {
    margin: "0 auto",
    marginBottom: 10,
    width: 150,
    height: 150
  },
  paper: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.spacing(1)
  },
  customBox: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#e53935",
    border: "2px solid #c62828",
    borderRadius: "4px",
    color: "#fff"
  },
  button: {
    marginTop: "5px"
  }
}));

export default styles;
