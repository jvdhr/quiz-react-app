import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  paperAbout: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%"
  },
  bigAvatar: {
    margin: "0 auto",
    marginBottom: 10,
    width: 150,
    height: 150
  },
  infoAbout: {
    marginBottom: "10px"
  },
  footerAbout: {
    position: "absolute",
    bottom: "0",
    "& Typography": { margin: "0 20px" }
  }
}));

export default styles;
