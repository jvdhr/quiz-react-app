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
  nameContainer: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "400",
    lineHeight: "1.04"
  },
  infoAbout: {
    marginBottom: "10px",
    "& span": {
      fontSize: " 1rem",
      fontWeight: "400",
      lineheight: "1.33"
    }
  },
  footerAbout: {
    margin: "20px 5px 0",
    "& p": {
      fontSize: "0.75rem",
      fontWeight: "400",
      lineHeight: "1.5",
      letterSpacing: "0.00938em"
    }
  },
  linkedin: {
    fontSize: "0.8rem",
    fontWeight: "500",
    lineHeight: "1.6",
    letterSpacing: "0.0075em"
  }
}));

export default styles;
