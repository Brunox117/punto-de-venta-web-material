import { makeStyles } from "@material-ui/core/styles";
import { Facebook, Instagram } from "@material-ui/icons";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { FacebookSVGL } from "../components/svg-links/FacebookSVGL";
import { InstagramSVGL } from "../components/svg-links/InstagramSVGL";
import { TiktokSVGL } from "../components/svg-links/TiktokSVGL";

const useStyles = makeStyles(() => ({
  root: {
    padding: 30,
    minHeight: "100vh",
  },
  title: {
    color: "#c4885d",
    fontWeight: "bold",
  },
  link: {
    color: "inherit", // Reestablece el color predeterminado del texto del enlace
    textDecoration: "inherit", // Reestablece el estilo de subrayado predeterminado
    fontSize: "inherit", // Reestablece el tamaño de fuente predeterminado
  },
}));

export const AboutUsView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Card
          sx={{
            borderRadius: "10px",
            backgroundColor: "#faf5ee",
            margin: "2px",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h4" className={classes.title}>
              Somos Punto de Venta
            </Typography>
            <Typography gutterBottom variant="h5">
              Empresa mexicana dedicada a la comercialización de productos de
              consumo básico, comestibles y no comestibles. Atendiendo las
              necesidades de clientes tenderos y algunos consumidores finales.
              Buscamos brindar una oferta de valor a través de generar una
              experiencia de compra única, destacando el excelente servicio y
              nuestro compromiso de ser aliados para las ganancias de nuestros
              clientes.
            </Typography>
            <Typography gutterBottom variant="h4" className={classes.title}>
              Encuentranos en
            </Typography>
            <a
              href="https://web.facebook.com/TuPuntodeVenta/"
              className={classes.link}
            >
              <Facebook style={{ color: "#c4885d", fontSize: "60px" }} />
              <Typography gutterBottom variant="h6" sx={{ color: "#c4885d" }}>
                @TuPuntodeVenta
              </Typography>
            </a>
            <a
              href="https://www.instagram.com/tiendapuntodeventa/"
              className={classes.link}
            >
              <Instagram style={{ color: "#c4885d", fontSize: "60px" }} />
              <Typography gutterBottom variant="h6" sx={{ color: "#c4885d" }}>
                @tiendapuntodeventa
              </Typography>
            </a>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};
