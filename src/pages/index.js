import * as Chakra from "@chakra-ui/react";
import React, { useState } from 'react';
import axios from 'axios';
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import FormularioInicioSesion from '../components/FormularioInicioSesion';
import Admin from '../components/Admin.jsx';
import FormularioRealizarPedido from "@/components/FormularioRealizarPedido";
import Cards from "../components/Cards"

export default function Home() {
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCardsOpen, setIsCardsOpen] = useState(false);

  const handleOpenCards = () => {
    setIsCardsOpen(true);
  };

  const handleOpenModal = () => {
    setIsCardsOpen(true);
    onOpen();
  };

  const handleCloseModal = () => {
    setIsCardsOpen(false);
    onClose();
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [metodoPago, setMetodoPago] = useState('Efectivo');
  const [TipoServicio, setTipoServicio] = useState('');

  const [cantidadBondiOlocos, setCantidadBondiOlocos] = useState(1); // Valor predeterminado de 1

  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const { isOpen: isOpenInicioSesion, onOpen: onOpenInicioSesion, onClose: onCloseInicioSesion } = Chakra.useDisclosure();

  // Otros inputs de contacto y pedido
  const enviarPedido = () => {

    const costoProductos = 2000; // Costo por unidad de "Bondi-O-Loco"
    const costoEnvio = 300;
    const costoTotal = costoProductos * cantidadBondiOlocos + costoEnvio;

    // Construir el mensaje de WhatsApp con los datos del pedido
    const mensajePedido = `¡Hola! Quisiera realizar el siguiente pedido,\n\nTipo de servicio: ${TipoServicio}\n\nNombre: ${nombre}\nTeléfono: ${telefono}\n\nMétodo de pago: ${metodoPago} - A coordinar\n\n💲 Costos\nCosto de los productos: $${costoProductos * cantidadBondiOlocos},00\nCosto de entrega: $${costoEnvio},00\nTotal a pagar: $${costoTotal},00\n\n📝 Pedido\n\n- x${cantidadBondiOlocos} Bondi-O-Loco $${costoProductos * cantidadBondiOlocos},00\n  Precio unitario $${costoProductos},00\n\n👆 Envía este mensaje. Te atenderemos enseguida.`;

    // Codificar el mensaje para que sea válido en la URL
    const mensajeCodificado = encodeURIComponent(mensajePedido);

    // Construir el enlace de WhatsApp con el mensaje predefinido
    const numeroDestino = '+542604224940';
    const enlaceWhatsApp = `https://wa.me/${numeroDestino}?text=${mensajeCodificado}`;

    // Abrir el enlace de WhatsApp en una nueva ventana o pestaña
    window.open(enlaceWhatsApp, '_blank');
  };
  return (
    <Chakra.Flex height="100vh" alignItems="center" justifyContent="center">
    <Chakra.VStack spacing={4} align="center">
      <Admin/>
      <Chakra.Text fontSize={['4xl', '5xl', '6xl']}>Boccato</Chakra.Text>
      <Chakra.Text fontSize={['xl', '2xl', '3xl']}>•Sanguches de Bondiola• Los verdaderos 🔥🔥 📍 SAN RAFAEL - MENDOZA</Chakra.Text>
      <Chakra.Text fontSize={['xl', '2xl', '3xl']}>
        Para llevar🏍️
      </Chakra.Text>
      <Chakra.Text fontSize={['xl', '2xl', '3xl']}>
        A domicilio🏁
      </Chakra.Text>
      <Chakra.Text fontSize={['xl', '2xl', '3xl']}>
        Buenos Aires 60, M5600 FZB, Mendoza, Argentina
      </Chakra.Text>
      
      {/* Botón para abrir el formulario de inicio de sesión */}
      <Chakra.Button fontSize={['xl', '2xl', '3xl']} colorScheme="teal" onClick={onOpenInicioSesion}>
        Iniciar sesión
      </Chakra.Button>
      
      {/* Componente del formulario de inicio de sesión */}
      <FormularioInicioSesion isOpen={isOpenInicioSesion} onClose={onCloseInicioSesion} />
     {/* Botón para mostrar el componente "Cards" en el modal */}
     <Chakra.Button fontSize={['xl', '2xl', '3xl']} colorScheme="teal" onClick={handleOpenModal}>
        Realizar Pedido
        <Chakra.VStack align="center" spacing={4}>
          <span role="img" aria-label="lomito">
            🍖
          </span>
        </Chakra.VStack>
      </Chakra.Button>

    </Chakra.VStack>
    
    <Chakra.Modal size="full" isOpen={isOpen} onClose={handleCloseModal}>
          <Chakra.ModalOverlay />
          <Chakra.ModalContent>
            <Chakra.ModalHeader>Realizar Pedido</Chakra.ModalHeader>
            <Chakra.ModalCloseButton />
            <Chakra.ModalBody>
              {isCardsOpen && <Cards />}
            </Chakra.ModalBody>
            {/* Aquí puedes agregar cualquier otro contenido o botones que desees mostrar en el pie del modal */}
            <Chakra.Box mt={4} textAlign="center">
              {/* Botón "Buy now" dentro del modal */}
              <Chakra.Button variant='solid' colorScheme='blue' onClick={handleOpenForm}>
                Buy now
              </Chakra.Button>
            </Chakra.Box>
          </Chakra.ModalContent>
        </Chakra.Modal>
        <FormularioRealizarPedido isOpen={isFormOpen} onClose={handleCloseForm} />
  </Chakra.Flex>
);
}