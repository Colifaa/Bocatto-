import * as Chakra from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import FormularioInicioSesion from '../components/FormularioInicioSesion';
import Admin from '../components/Admin.jsx';
import FormularioRealizarPedido from "@/components/FormularioRealizarPedido";
import Cards from "../components/Cards"
import { supabase } from '../lib/supabase'; // Asegúrate de que la ruta sea correcta
import Carrito from "../components/Carrito";
import Footer from "../components/Footer";


export default function Home() {
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCardsOpen, setIsCardsOpen] = useState(false);
  const [cart, setCart] = useState([]); // Estado para almacenar los productos del carrito
  const [productos, setProductos] = useState([]);
  const [isAlertOpen, setAlertOpen] = useState(false);

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
  if (cart.length > 0) {
    setIsFormOpen(true);
  } else {
    setAlertOpen(true); // Agrega esto para mostrar el alert
  }
};

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  

  const handleEliminarProducto = (productoId) => {
    // Filtras los productos que no tengan el mismo ID que el producto a eliminar
    const updatedCart = cart.filter((producto) => producto.id !== productoId);
    setCart(updatedCart);
  };






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


    <Chakra.Flex
    height="100vh"
    alignItems="center"
    justifyContent="center"
    flexDirection="column" 
    bgColor="white"
  >
      


  
     <Chakra.VStack  spacing={4} align="center" justifyContent="center" >
     <Chakra.Box display="flex" justifyContent="center" mb="4">
  <Chakra.Image
   width={['80%', '60%', '50%']} 
   height="auto"
   maxW="100%"
   src="Nombre.jpg"
   alt="Imagen del sándwich"
  />
</Chakra.Box>

        <Chakra.Text fontSize={['xl', '2xl', '3xl']} color="#FF5733">•Sanguches de Bondiola• Los verdaderos 🔥🔥 📍 SAN RAFAEL - MENDOZA</Chakra.Text>
        <Chakra.Text fontSize={['xl', '2xl', '3xl']} color="#FF5733">Para llevar🏍️</Chakra.Text>
        <Chakra.Text fontSize={['xl', '2xl', '3xl']} color="#FF5733">A domicilio🏁</Chakra.Text>
        <Chakra.Text fontSize={['xl', '2xl', '3xl']} color="#FF5733">Buenos Aires 60, M5600 FZB, Mendoza, Argentina</Chakra.Text>
  
        {/* Botón para mostrar el componente "Cards" en el modal */}
        <Chakra.Button fontSize={['xl', '2xl', '3xl']} colorScheme="teal" bgColor="#000000" onClick={handleOpenModal}>
          Realizar Pedido
          <Chakra.VStack spacing={4} align="center" justifyContent="center" width="100%">
            <span role="img" aria-label="lomito" style={{ color: "#FF5733" }}>
              🍖
            </span>
          </Chakra.VStack>
        </Chakra.Button>
        <Chakra.Box display="flex" justifyContent="center" >
  <Chakra.Image
  width={['80%', '60%', '50%']} 
    height="auto" 
    maxW="100%" 
    src="Sanguche.jpg"
    alt="Imagen del sándwich"
  />
   
</Chakra.Box>

      </Chakra.VStack>
  
      <Chakra.Modal size="full" isOpen={isOpen} onClose={handleCloseModal}>
        <Chakra.ModalOverlay />
        <Chakra.ModalContent bgColor="#FF5733" color="#FFFFFF">
          <Chakra.ModalHeader>Realizar Pedido</Chakra.ModalHeader>
          <Chakra.ModalCloseButton />
          <Chakra.ModalBody>
            {isCardsOpen && <Cards productos={productos} mostrarBotonAgregar={true} cart={cart} setCart={setCart} />}
            <Carrito cart={cart} onEliminarProducto={handleEliminarProducto} />
          </Chakra.ModalBody>
          {/* Aquí puedes agregar cualquier otro contenido o botones que desees mostrar en el pie del modal */}
          <Chakra.Box mt={4} textAlign="center">
            {/* Botón "Buy now" dentro del modal */}
            <Chakra.Alert
      status="warning"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      display={isAlertOpen ? 'block' : 'none'} // Mostrar el alert solo si isAlertOpen es true
      onClose={() => setAlertOpen(false)} // Cerrar el alert
    >
      <Chakra.AlertIcon boxSize="40px" mr={0} />
      <Chakra.AlertTitle mt={4} mb={1} fontSize="lg">
        Debes agregar productos al carrito para realizar la compra.
      </Chakra.AlertTitle>
      <Chakra.AlertDescription>
        <Chakra.Button
          variant="solid"
          colorScheme="blue"
          onClick={() => setAlertOpen(false)} // Cerrar el alert cuando se haga clic en el botón
        >
          Cerrar
        </Chakra.Button>
      </Chakra.AlertDescription>
    </Chakra.Alert>
    <Chakra.Button
      variant='solid'
      colorScheme='blue'
      bgColor="#000000"
      onClick={handleOpenForm}
      disabled={cart.length === 0}
    >
      Buy now
    </Chakra.Button>
          </Chakra.Box>
        </Chakra.ModalContent>
      </Chakra.Modal>
      <FormularioRealizarPedido isOpen={isFormOpen} onClose={handleCloseForm} cart={cart} />
       
      <Chakra.Box mt="-5" mb="-5">
        <Footer />
        
      </Chakra.Box>
    
    </Chakra.Flex>
    
    
  );
}