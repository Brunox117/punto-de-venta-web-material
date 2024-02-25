import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "30px",
    flexGrow: 1,
    backgroundColor: "#e8d8c8",
    color: "#c4885d",
    padding: "20px 0",
  },
  logo: {
    height: "80px",
  },
  socialIcon: {
    color: "#c4885d",
    fontSize: "40px",
  },
  phoneNumber: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#c4885d",
    fontSize: "16px",
    fontWeight: "bold",
  },
  phoneIcon: {
    color: "#c4885d",
    fontSize: "30px",
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item>
          <CardMedia
            component="img"
            alt="Logo"
            className={classes.logo}
            image="https://firebasestorage.googleapis.com/v0/b/punto-de-venta-web-881ad.appspot.com/o/abarrotito.png?alt=media&token=db38230d-ab6e-4ec2-83ff-2fb4c656ae68"
          />
        </Grid>
        <Grid item>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <a href="https://web.facebook.com/TuPuntodeVenta/">
                <Facebook className={classes.socialIcon} />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/tiendapuntodeventa/">
                <Instagram className={classes.socialIcon} />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.tiktok.com/@tupuntodeventa">
                <svg
                  fill="#c4885d"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="40px"
                  height="40px"
                >
                  <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
                </svg>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <div className={classes.phoneNumber}>
            <WhatsApp className={classes.phoneIcon} />
            <Typography variant="h6">123-456-7890</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
