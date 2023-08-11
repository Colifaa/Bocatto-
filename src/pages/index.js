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
    style={{
      background: "linear-gradient(to right, #1C1C1C, #A7414A, #1C1C1C)",
      overflowX: "hidden", // Usa camelCase aquí
    }}
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bgColor="black"
      bgRepeat="no-repeat"
    >
      
 
      <Chakra.Box display="flex" justifyContent="center" mb="2" >
        <Chakra.Image
            width={['100%', '90%', '80%', '70%', '60%', '50%', '40%', '30%', '20%', '10%']}
          height="auto"
          maxW="100%"
          src="Nombre.png"
        />
      </Chakra.Box>
      
      <Chakra.VStack spacing={4} align="center" justifyContent="center" width="100%" padding={4} mt="-1">
     
      <Chakra.Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']} color="black" fontWeight="extrabold" fontFamily="Georgia">
  🔥SANDWICHES DE CARNE BRASEADA🔥
</Chakra.Text>

<Chakra.Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']}color="black" fontWeight="extrabold" fontFamily="Georgia">
  SAN RAFAEL - MENDOZA 📌
</Chakra.Text>
<Chakra.Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']} color="black" fontWeight="extrabold"  fontFamily="Georgia">
  TAKE AWAY 🏍️
</Chakra.Text>
<Chakra.Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']} color="black" fontWeight="extrabold"  fontFamily="Georgia">
  DELIVERY 🏁
</Chakra.Text>
<Chakra.Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']} color="black" fontWeight="extrabold"  fontFamily="Georgia">
LUGONES 1906 (ESQUINA BRAÑA)
</Chakra.Text>
        <Chakra.Button
          fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']}
          colorScheme="teal"
          bgColor="#FF5733" // Cambiado a color de fondo
          color="black" // Cambiado el color de texto
          onClick={handleOpenModal}
          _hover={{
            bgColor: "#FF5733", // Cambio de color en hover
            color: "black", // Cambio de color de texto en hover
          }}
        >
          Realizar Pedido
          <Chakra.VStack spacing={4} align="center" justifyContent="center" width="100%">
            <span role="img" aria-label="lomito" style={{ color: "#FF5733" }}>
              🍖
            </span>
          </Chakra.VStack>
        </Chakra.Button>
  
        <Chakra.Box display="flex" justifyContent="center" width="100%" mt="-2">
          <Chakra.Image
      width={['100%', '90%', '80%', '70%', '60%', '50%', '40%', '30%', '20%', '10%']}
            height="auto"
            maxW="100%"
            src="Sanguche.png"
            alt="Imagen del sándwich"
          />
        </Chakra.Box>
      </Chakra.VStack>
  
      <Chakra.Modal size="full" isOpen={isOpen} onClose={handleCloseModal}>
        <Chakra.ModalOverlay />
        <Chakra.ModalContent  style={{
    background: "linear-gradient(to right, #1C1C1C, #A7414A, #1C1C1C)",

    borderStyle: "solid",
   
  }}>
          <Chakra.ModalHeader>Realizar Pedido</Chakra.ModalHeader>
        
          <Chakra.ModalCloseButton color="Blue" bgColor="orange.400"/>
         
          <Chakra.ModalBody>
            {isCardsOpen && <Cards productos={productos} mostrarBotonAgregar={true} cart={cart} setCart={setCart} />}
            <Carrito cart={cart} onEliminarProducto={handleEliminarProducto} />
          </Chakra.ModalBody>
          {/* Aquí puedes agregar cualquier otro contenido o botones que desees mostrar en el pie del modal */}
          <Chakra.Box mt={4} textAlign="center">
            <Chakra.Alert
              borderRadius="xl"
              position="absolute"
              bottom="45px"
              status="warning"
              variant='subtle'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              height='180px'
              left="50%" // Centra horizontalmente el alert
              we
              transform="translateX(-50%)" // Ajusta el centro horizontal
              width={['80%', '60%', '50%']} // Ancho responsivo
              display={isAlertOpen ? 'block' : 'none'}
              onClose={() => setAlertOpen(false)}
            >
              <Chakra.AlertIcon boxSize="40px" display="flex" justifyContent="center" alignItems="center" margin="auto" />
              <Chakra.AlertTitle mt={4} mb={1} fontSize={['md', 'lg', 'lg']} color="red.600">
                Debes agregar productos para realizar la compra.
              </Chakra.AlertTitle>
              <Chakra.AlertDescription maxWidth={['60%', '80%', '80%']}>
                <Chakra.Button
                  variant="solid"
                  colorScheme="teal"
                  mb="-10"
                  onClick={() => setAlertOpen(false)} // Cerrar el alert cuando se haga clic en el botón
                >
                  Cerrar
                </Chakra.Button>
              </Chakra.AlertDescription>
            </Chakra.Alert>
            <Chakra.Button
              position="relative"
              bottom="0" // Fija el botón en la parte inferior del contenedor
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