import * as Chakra from "@chakra-ui/react";
import React, { useState } from 'react';

const FormularioInicioSesion = ({ isOpen, onClose, onLoginSuccess, onLogout }) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aquí debes implementar la lógica para verificar las credenciales del administrador
    // Por ejemplo, puedes hacer una solicitud a tu servidor para validar las credenciales
    if (nombreUsuario === 'Bruno' && contrasena === 'Panzas123') {
      alert('Inicio de sesión exitoso');
      setIsLoggedIn(true); // Establece el estado de inicio de sesión a verdadero
      onLoginSuccess(); // Invoca la función para indicar que el inicio de sesión fue exitoso
      onClose(); // Cierra el formulario después del inicio de sesión exitoso
    } else {
      alert('Credenciales inválidas');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Establece el estado de inicio de sesión a falso
    onLogout(); // Invoca la función para indicar que el usuario ha cerrado sesión
  };

  return (
    <Chakra.Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <Chakra.DrawerOverlay />
      <Chakra.DrawerContent>
        <Chakra.DrawerCloseButton />
        <Chakra.DrawerHeader fontSize={['xl', '2xl', '3xl']}>Iniciar sesión</Chakra.DrawerHeader>

        <Chakra.DrawerBody>
          <Chakra.Input placeholder="Nombre de usuario" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />
          <Chakra.Input placeholder="Contraseña" type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        </Chakra.DrawerBody>

        <Chakra.DrawerFooter justifyContent="center">
          <Chakra.Button variant="outline" bgColor="red.100" color="Red" mr={3} onClick={onClose} fontSize={['xl', '2xl', '3xl']}>
            Cancelar
          </Chakra.Button>

          <Chakra.Button onClick={handleLogin} fontSize={['xl', '2xl', '3xl']}>
            Iniciar sesión
          </Chakra.Button>
        </Chakra.DrawerFooter>
      </Chakra.DrawerContent>
    </Chakra.Drawer>
  );
};

export default FormularioInicioSesion;
