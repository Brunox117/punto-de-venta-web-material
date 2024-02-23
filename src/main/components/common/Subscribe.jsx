import React, { useState } from "react";
import { Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  paper: {
    padding: "30px",
    textAlign: "center",
    color: "#555",
    maxWidth: "500px",
    margin: "auto",
    marginTop: "100px",
    marginBottom: "100px",
    borderRadius: "25px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
    backgroundColor: "#f5f5f5"
  },
  title: {
    color: "#3f51b5",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  button: {
    backgroundColor: "#3f51b5",
    color: "#fff",
    '&:hover': {
      backgroundColor: "#303f9f"
    }
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
    // Aquí puedes implementar la lógica para suscribir al usuario
    setSubscribed(true);
  };

  const handleLogin = () => {
    // Aquí puedes implementar la lógica para iniciar sesión
    setLoggedIn(true);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" className={classes.title}>¡Únete a Punto Amigo!</Typography>
      {!subscribed && (
        <form className={classes.form}>
          <TextField
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Teléfono"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button variant="contained" className={classes.button} onClick={handleSubscribe}>
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
            label="Número de teléfono"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button variant="contained" className={classes.button} onClick={handleLogin}>
            Iniciar sesión
          </Button>
        </div>
      )}
      {loggedIn && (
        <Typography variant="body1">
          ¡Bienvenido de vuelta! Has iniciado sesión correctamente.
        </Typography>
      )}
    </Paper>
  );
};
