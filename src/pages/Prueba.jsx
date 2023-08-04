import React, { useState } from 'react';
import * as Chakra from "@chakra-ui/react";
import FormularioInicioSesion from '../components/FormularioInicioSesion';
import Admin from '../components/Admin.jsx';
import FormularioRealizarPedido from "@/components/FormularioRealizarPedido";

function Prueba() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    handleCloseForm(); // Cierra el formulario después del inicio de sesión exitoso
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <Admin />
        </>
      ) : (
        <>
          <button onClick={handleOpenForm}>Iniciar sesión</button>
          <FormularioInicioSesion
            isOpen={isOpen}
            onClose={handleCloseForm}
            onLoginSuccess={handleLoginSuccess}
          />
        </>
      )}
    </div>
  );
};
  
export default Prueba;
