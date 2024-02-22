import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navButton: {
    marginLeft: theme.spacing(3),
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  phoneNumber: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    color: "#c4885d",
    fontSize: "5px", // Tamaño de fuente más grande
    fontWeight: "bold", // Negritas
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
  appBar: {
    backgroundColor: "#e8d8c8",
    height: "80px",
  },
  navButtonText: {
    marginTop: "20px",
    marginBottom: "20px",
    color: "#000",
    fontSize: "1.5em", // Tamaño de fuente más grande
    fontWeight: "bold", // Negritas
  },
  drawerPaper: {
    width: 240,
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>LOGO</Grid>
        <Grid item>
          
        </Grid>
        <Grid item>NUMERO DE TELEFONO</Grid>
      </Grid>
    </div>
  );
};
