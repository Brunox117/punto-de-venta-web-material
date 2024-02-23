import { makeStyles } from "@material-ui/core/styles";
import { Facebook, Instagram } from "@material-ui/icons";
import { Card, CardContent, Grid, Typography } from "@mui/material";

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
            <a
              href="https://www.tiktok.com/@tupuntodeventa"
              className={classes.link}
            >
              <svg
                fill="#c4885d"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="60px"
                height="60px"
              >
                <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
              </svg>
              <Typography gutterBottom variant="h6" sx={{ color: "#c4885d" }}>
                @tupuntodeventa
              </Typography>
            </a>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};