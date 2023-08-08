import * as Chakra from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import FormularioInicioSesion from '../components/FormularioInicioSesion';
import Admin from '../components/Admin.jsx';
import FormularioRealizarPedido from "@/components/FormularioRealizarPedido";
import Cards from "../components/Cards"
import { supabase } from '../lib/supabase'; // Asegúrate de que la ruta sea correcta

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
  
  const [productos, setProductos] = useState([]);



  useEffect(() => {
    // Aquí realizas la llamada a Supabase para obtener los productos
    async function fetchProductos() {
      const { data, error } = await supabase.from('productos').select('*');
      if (error) {
        console.error('Error al obtener productos:', error);
      } else {
        setProductos(data);
      }
    }

    fetchProductos();
  }, []);



 
  
  return (
    <Chakra.Flex height="100vh" alignItems="center" justifyContent="center">
    <Chakra.VStack spacing={4} align="center">

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
            {isCardsOpen && <Cards productos={productos}  />}
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