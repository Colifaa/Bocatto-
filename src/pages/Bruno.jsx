import React, { useEffect, useState } from 'react';
import * as Chakra from "@chakra-ui/react";
import FormularioInicioSesion from '../components/FormularioInicioSesion';
import Admin from '../components/Admin.jsx';
import FormularioRealizarPedido from "@/components/FormularioRealizarPedido";
function Bruno() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Al cargar el componente, verifica si hay información de sesión en localStorage
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Almacena el estado de sesión en localStorage
    handleCloseForm(); // Cierra el formulario después del inicio de sesión exitoso
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false'); // Almacena el estado de sesión en localStorage
  };

  const handleGoToHome = () => {
    // Redirigir al home
    window.location.href = '/';
  };

  return (
    
        <Chakra.VStack align="center" spacing={4}>
   
      {isLoggedIn ? (
        <>
         <Admin />
          <Chakra.Button fontSize={['xl', '2xl', '3xl']} colorScheme="teal" onClick={handleLogout}>Cerrar sesión</Chakra.Button>
          <Chakra.Button fontSize={['xl', '2xl', '3xl']} colorScheme="teal" onClick={handleGoToHome}>Ir al Home</Chakra.Button>
        </>
      ) : (
        <>
          <Chakra.Button fontSize={['xl', '2xl', '3xl']} colorScheme="teal" onClick={handleOpenForm}>Iniciar sesión</Chakra.Button>
          <FormularioInicioSesion
            isOpen={isOpen}
            onClose={handleCloseForm}
            onLoginSuccess={handleLoginSuccess}
          />
        </>
      )}
      </Chakra.VStack>
 
  );
};
  
export default Bruno;
