import React, { useState } from "react";
import { Typography, TextField, Button, Paper, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  paper: {
    padding: "30px",
    textAlign: "center",
    color: "#555",
    maxWidth: "400px",
    margin: "auto",
    marginTop: "100px",
    marginBottom: "100px",
    borderRadius: "30px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
    backgroundColor: "#faf5ee"
  },
  title: {
    color: "#f77e0a",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center", // Centra los elementos horizontalmente
    justifyContent: "center" // Centra los elementos verticalmente
  },
  textField: {
    width: '100%', // Llena todo el espacio horizontal
    maxWidth: '300px',
    borderRadius: '15px',
  }
});

export const Subscribe = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Grid container className={classes.paper} elevation={3} square={false}>
      <Typography variant="h4" className={classes.title}>¡Únete a Punto Amigo!</Typography>
      {!subscribed && (
        <form className={classes.form}>
          <TextField
            className={classes.textField}
            fullWidth
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className={classes.textField}
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.textField}
            label="Teléfono"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button variant="contained" sx={{ backgroundColor: '#fff', color: '#000', border: '#f77e0a', '&:hover': { backgroundColor: '#f77e0a', color: '#fff' } }} onClick={handleSubscribe}>
            Suscribirse
          </Button>
        </form>
      )}
      {subscribed && !loggedIn && (
        <div className={classes.form}>
          <Typography variant="body1">¡Gracias por suscribirte!</Typography>
          <Typography variant="body1">
            Si ya tienes una cuenta, inicia sesión:
          </Typography>
          <TextField
            className={classes.textField}
            label="Número de teléfono"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button variant="contained" sx={{ backgroundColor: '#fff', color: '#000', borderColor: '#f77e0a', '&:hover': { backgroundColor: '#f77e0a', color: '#fff' } }} onClick={handleLogin}>
            Iniciar sesión
          </Button>
        </div>
      )}
      {loggedIn && (
        <Typography variant="body1">
          ¡Bienvenido de vuelta! Has iniciado sesión correctamente.
        </Typography>
      )}
    </Grid>
  );
};
