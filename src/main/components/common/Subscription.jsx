import React, { useState } from 'react';
import { useTheme } from "@emotion/react";
import './Subscription.css';
import { Title } from "../titles/Title";

const Subscription = () => {
  const theme = useTheme();
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (!name || !email || !phone || !validateEmail(email) || !validatePhone(phone)) {
        alert('Por favor, ingrese un nombre, correo electrónico y número de teléfono válidos.');
        return;
      }
      console.log('Suscripción exitosa:', name, email, phone);
    } else {
      if (!phone || !validatePhone(phone)) {
        alert('Por favor, ingrese un número de teléfono válido.');
        return;
      }
      console.log('Inicio de sesión exitoso:', phone);
    }
  };

  return (
    <div className="subscription-container" style={{ backgroundColor: theme.palette.subscription.background }}>
      <Title title="Suscribete a" subtitle="Punto Amigo" />
      <div
        className="subscription-form"
        style={{
          backgroundColor: theme.palette.subscription.card,
          color: theme.palette.subscription.text,
        }}
      >
        <h2 className="form-title" style={{ color: theme.palette.subscription.heading }}>
          {isSignUp ? 'Suscribirse' : 'Iniciar Sesión'}
        </h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={handleNameChange}
                style={{
                  backgroundColor: theme.palette.subscription.input,
                  color: theme.palette.subscription.text,
                }}
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={handleEmailChange}
                style={{
                  backgroundColor: theme.palette.subscription.input,
                  color: theme.palette.subscription.text,
                }}
              />
            </>
          )}
          <input
            type="text"
            placeholder="Número de teléfono"
            value={phone}
            onChange={handlePhoneChange}
            style={{
              backgroundColor: theme.palette.subscription.input,
              color: theme.palette.subscription.text,
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: theme.palette.subscription.button,
              color: theme.palette.subscription.buttonText,
            }}
          >
            {isSignUp ? 'Suscribirse' : 'Iniciar Sesión'}
          </button>
        </form>
        <p
          className="form-toggle"
          onClick={toggleForm}
          style={{
            color: theme.palette.subscription.link,
            cursor: 'pointer',
          }}
        >
          {isSignUp ? '¿Ya tienes una cuenta? Iniciar sesión' : '¿No tienes una cuenta? Suscribirse'}
        </p>
      </div>
    </div>
  );
};

export default Subscription;