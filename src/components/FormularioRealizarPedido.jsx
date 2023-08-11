import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, FormHelperText, VStack, Select, HStack, Button, IconButton, Box, Flex
} from '@chakra-ui/react';
import Cards from '../components/Cards';
import { supabase, storage } from '../lib/supabase'; // Asegúrate de que la ruta sea correcta
export default function FormularioRealizarPedido({ isOpen, onClose, onEnviarPedido,cart}) {
  const [nombre, setNombre] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [TipoServicio, setTipoServicio] = useState('Retirar');
  const [productosDisponiblesFormulario, setProductosDisponiblesFormulario] = useState([]);



  useEffect(() => {
    async function fetchProductosDisponibles() {
      const { data, error } = await supabase.from('productos').select('*');
      if (error) {
        console.error('Error al obtener productos:', error);
      } else {
        setProductosDisponiblesFormulario(data);
      }
    }

    fetchProductosDisponibles();
  }, []);

  const enviarPedido = () => {
    const productosSeleccionados = [];

    cart.forEach((producto) => {
      const subtotalProducto = producto.precio * producto.cantidad;
      productosSeleccionados.push(`- x${producto.cantidad} ${producto.nombre} $${subtotalProducto}`);
    });

    const costoTotal = cart.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    const costoEnvio = TipoServicio === "A domicilio" ? 300 : 0;

    const mensajeProductos = productosSeleccionados.join("\n");
    const mensajePedido = `¡Hola! Quisiera realizar el siguiente pedido,\n\nTipo de servicio: ${TipoServicio}\n\nNombre: ${nombre}\nDomicilio: ${domicilio} \n\n 💲 Costos:\n\n${mensajeProductos}${TipoServicio === "A domicilio" ? `\nCosto de entrega: $${costoEnvio},00` : ""}\nTotal a pagar: $${costoTotal + costoEnvio},00\n\n👆 Envía este mensaje. Te atenderemos enseguida.`;

    const mensajeCodificado = encodeURIComponent(mensajePedido);

    const numeroDestino = '+542604224940'; // Cambiar por el número de WhatsApp correcto
    const enlaceWhatsApp = `https://wa.me/${numeroDestino}?text=${mensajeCodificado}`;

    window.open(enlaceWhatsApp, '_blank');
  };
 

  return (
<Modal isOpen={isOpen} onClose={onClose} size="full" >
  <ModalOverlay  />
  <ModalContent style={{
    background: "linear-gradient(to right, #1C1C1C, #A7414A, #1C1C1C)",

    borderStyle: "solid",
   
  }} alignItems="center">
    <ModalHeader fontSize={['xl', '2xl', '3xl']}>
      <Box>
        <VStack spacing={4} align="center">
          <form onSubmit={enviarPedido}>
            <Flex justifyItems="flex-start" alignItems="center">
              <FormControl justifyItems="flex-start">
                <FormLabel
                  textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                  _hover={{ cursor: 'pointer', borderBottomColor: 'teal.500', textShadow: 'none', transform: 'scale(1.1)' }}
                  _focus={{ outline: 'none', borderBottomColor: 'teal.500', textShadow: 'none' }}
                >
                  Nombre
                </FormLabel>

                <Input
                  fontSize={['sm', 'md', 'lg']}
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  size={['xs', 'md', 'lg']}
                  bg="teal.200"
                  borderRadius="xl"
                  _focus={{ outline: 'none', bg: 'white' }}
                />

                <FormHelperText textAlign="center"
             fontWeight="bold"
             fontSize={['md', 'lg', 'xl']}
             color="black"
             pb={2}
             textShadow="1px 1px 2px teal.300"
             borderBottom="2px solid teal.400"
             transition="all 0.2s ease-in-out"
                >Indicar nombre.</FormHelperText>
              </FormControl>

              <FormControl justifyItems="flex-start">
                <FormLabel textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                  _hover={{ cursor: 'pointer', borderBottomColor: 'teal.500', textShadow: 'none', transform: 'scale(1.1)' }}
                  _focus={{ outline: 'none', borderBottomColor: 'teal.500', textShadow: 'none' }}>Domicilio</FormLabel>

                <Input
                  fontSize={['sm', 'md', 'lg']}
                  type="text"
                  value={domicilio}
                  onChange={(e) => setDomicilio(e.target.value)}
                  size={['xs', 'md', 'lg']}
                  bg="teal.200"
                  borderRadius="xl"
                  _focus={{ outline: 'none', bg: 'white' }}
                />
                <FormHelperText textAlign="center"
                  fontWeight="bold"
                  fontSize={["sm",'md', 'lg', 'xl' , "2x1"]}
                  color="black"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                >Domicilio y Nro.</FormHelperText>
              </FormControl>
            </Flex>

            <FormControl mt="4">
              <FormLabel textAlign="center"
                fontWeight="bold"
                fontSize={["sm",'md', 'lg', 'xl' , "2x1"]}
                color="black"
                pb={2}
                textShadow="1px 1px 2px teal.300"
                borderBottom="2px solid teal.200"
                transition="all 0.2s ease-in-out"
                _hover={{ cursor: 'pointer', borderBottomColor: 'teal.500', textShadow: 'none', transform: 'scale(1.1)' }}
                _focus={{ outline: 'none', borderBottomColor: 'teal.500', textShadow: 'none' }} >Servicio:</FormLabel>
              <Select
              
                fontSize={[ 'lg', 'xl' , "2x1"]}
                color="black"
                fontWeight="bold"
                borderRadius="md"
                _focus={{
                  outline: 'none', // Remueve el contorno al seleccionar el select
                  boxShadow: 'none', // Remueve la sombra al seleccionar el select
                }}
                _selected={{
                  bg: 'purple.500', // Color de fondo cuando se selecciona una opción
                }}
                value={TipoServicio}
                onChange={(e) => setTipoServicio(e.target.value)}
              >
                <option style={{ fontSize: '15px', fontFamily: 'Arial', backgroundColor: 'teal', color: 'red' }} value="Retirar">Retirar</option>
                <option style={{ fontSize: '15px', fontFamily: 'Arial', backgroundColor: 'teal', color: 'red' }} value="A domicilio">A domicilio</option>
                {/* Agrega más opciones de tipos de servicio si es necesario */}
              </Select>
              <FormHelperText textAlign="center"
                fontWeight="bold"
                fontSize={['md', 'lg', 'xl']}
                color="black"
                pb={2}
                textShadow="1px 1px 2px teal.300"
                borderBottom="2px solid teal.400"
                transition="all 0.2s ease-in-out"
              >Indicar tipo de servicio.</FormHelperText>
            </FormControl>

            <Flex justifyItems="flex-start" alignItems="center" mb={4}>
              {/* Agregar más campos del formulario si es necesario */}
            </Flex>

            <HStack justifyContent="center">
              <Button type="submit" mt={4}    position="relative"
              bottom="0" // Fija el botón en la parte inferior del contenedor
              variant='solid'
              colorScheme='green'
              bgColor="#000000">
                Enviar Pedido
              </Button>
            </HStack>
          </form>
        </VStack>
      </Box>
    </ModalHeader>
    <ModalCloseButton bgColor="orange.500" color="blue" />
  </ModalContent>
</Modal>
  );
}
