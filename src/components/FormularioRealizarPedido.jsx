import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, FormHelperText, VStack, Select, HStack, Button, IconButton, Box
} from '@chakra-ui/react';
import Cards from '../components/Cards';

export default function FormularioRealizarPedido({ isOpen, onClose, onEnviarPedido }) {

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [metodoPago, setMetodoPago] = useState('Efectivo');
  const [TipoServicio, setTipoServicio] = useState('Retirar');

  const [cantidadBondiOlocos, setCantidadBondiOlocos] = useState(1); // Valor predeterminado de 1
  const [CantidadOsobuco, setCantidadOsobuco] = useState(1); // Valor predeterminado de 1

  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');



  const handleLogin = () => {
    // Aquí debes implementar la lógica para verificar las credenciales del administrador
    // Por ejemplo, puedes hacer una solicitud a tu servidor para validar las credenciales
    if (nombreUsuario === 'admin' && contrasena === 'admin123') {
      setEstaAutenticado(true);
      onClose(); // Cierra el formulario después del inicio de sesión exitoso
    } else {
      alert('Credenciales inválidas');
    }
  };

  // Otros inputs de contacto y pedido
  const enviarPedido = () => {

    const costoProductos = 2000; // Costo por unidad de "Bondi-O-Loco"
    const costoEnvio = 300;
    const costoTotal = (costoProductos * cantidadBondiOlocos) + (costoProductos * CantidadOsobuco) + costoEnvio;


    // Construir el mensaje de WhatsApp con los datos del pedido
    const mensajePedido = `¡Hola! Quisiera realizar el siguiente pedido,\n\nTipo de servicio: ${TipoServicio}\n\nNombre: ${nombre}\nTeléfono: ${telefono} 💲 Costos\nCosto de los productos: $${costoProductos * cantidadBondiOlocos} $${costoProductos * CantidadOsobuco} \nCosto de entrega: $${costoEnvio},00\nTotal a pagar: $${costoTotal},00\n\n📝 Pedido\n\n- x${cantidadBondiOlocos} Bondi-O-Loco $${costoProductos * cantidadBondiOlocos}\n  \n\n- x${CantidadOsobuco} Osobuco $${costoProductos * CantidadOsobuco}\n   Precio unitario $${costoProductos},00\n\n👆 Envía este mensaje. Te atenderemos enseguida.`;

    // Codificar el mensaje para que sea válido en la URL
    const mensajeCodificado = encodeURIComponent(mensajePedido);

    // Construir el enlace de WhatsApp con el mensaje predefinido
    const numeroDestino = '+542604224940';
    const enlaceWhatsApp = `https://wa.me/${numeroDestino}?text=${mensajeCodificado}`;

    // Abrir el enlace de WhatsApp en una nueva ventana o pestaña
    window.open(enlaceWhatsApp, '_blank');
  };

  return (

    <Modal isOpen={isOpen} onClose={onClose} size="full">
    <ModalOverlay />
    <ModalContent color="blackAlpha.800" alignItems="center" bgSize="">
      <ModalHeader fontSize={['xl', '2xl', '3xl']}>  <Box >
          <VStack spacing={4} align="center">
          <form onSubmit={enviarPedido}>
            
            <FormControl justifyItems="flex-start">
              <FormLabel
                textAlign="center"
                fontWeight="bold"
                fontSize={['md', 'lg', 'xl']}
                color="black.500"
                pb={2}
                textShadow="1px 1px 2px teal.300"
                borderBottom="2px solid teal.400"
                transition="all 0.2s ease-in-out"
                _hover={{ cursor: 'pointer', borderBottomColor: 'teal.500', textShadow: 'none', transform: 'scale(1.1)' }}
                _focus={{ outline: 'none', borderBottomColor: 'teal.500', textShadow: 'none' }}
              >
                Nombre
              </FormLabel>
  
              <Input htmlSize={4} width='auto' 
                fontSize={['sm', 'md', 'lg']}
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                size={['xs', 'md', 'lg']}
                bg="teal.100"
                borderRadius="xl"
                _focus={{ outline: 'none', bg: 'white' }}
              />
  
              <FormHelperText textAlign="center"
                fontWeight="bold"
                fontSize={['sm', 'md', 'lg']}
                color="black.500"
                pb={2}
                textShadow="1px 1px 2px teal.300"
                borderBottom="2px solid teal.400"
                transition="all 0.2s ease-in-out"
              >Indicar nombre del producto.</FormHelperText>
            </FormControl>

              <FormControl mt={4}>
                <FormLabel textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                  _hover={{ cursor: 'pointer', borderBottomColor: 'teal.500', textShadow: 'none', transform: 'scale(1.1)' }}
                  _focus={{ outline: 'none', borderBottomColor: 'teal.500', textShadow: 'none' }}>Teléfono</FormLabel>
                <Input
                  fontSize='15px'
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  size={['xs', 'md','sm']}
                  bg="teal.100"
                  borderRadius="xl"
                  _focus={{ outline: 'none', bg: 'white' }}
                />
                <FormHelperText textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                >Indicar número de teléfono.</FormHelperText>
              </FormControl>

           

              <FormControl mt="4">
                <FormLabel textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                  _hover={{ cursor: 'pointer', borderBottomColor: 'teal.500', textShadow: 'none', transform: 'scale(1.1)' }}
                  _focus={{ outline: 'none', borderBottomColor: 'teal.500', textShadow: 'none' }} >Servicio:</FormLabel>
                <Select
   fontSize='15px'
   size="sm"
   color="red.500"
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
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                >Indicar tipo de servicio.</FormHelperText>
              </FormControl>



              <FormControl mt={4}>
                <FormLabel textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                  _hover={{ cursor: 'pointer', borderBottomColor: 'teal.500', textShadow: 'none', transform: 'scale(1.1)' }}
                  _focus={{ outline: 'none', borderBottomColor: 'teal.500', textShadow: 'none' }}>Cantidad de Bondi-Olocos</FormLabel>
                <Input
                  type="number"
                  value={cantidadBondiOlocos}
                  onChange={(e) => setCantidadBondiOlocos(e.target.value)}
                  size="sm"
                />
                <FormHelperText textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                >Indicar cantidad de productos.</FormHelperText>
              </FormControl>


              <FormControl mt={4}>
                <FormLabel textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                  _hover={{ cursor: 'pointer', borderBottomColor: 'teal.500', textShadow: 'none', transform: 'scale(1.1)' }}
                  _focus={{ outline: 'none', borderBottomColor: 'teal.500', textShadow: 'none' }}>Cantidad de Osobuco</FormLabel>
                <Input
                  type="number"
                  value={CantidadOsobuco}
                  onChange={(e) => setCantidadOsobuco(e.target.value)}
                  size="sm"
                />
                <FormHelperText textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                >Indicar cantidad de productos.</FormHelperText>
              </FormControl>

              <HStack justifyContent="center">
            <Button type="submit" mt={4} colorScheme="teal">
              Agregar Producto
            </Button>
          </HStack>
        </form>
        </VStack>
        </Box></ModalHeader>
      <ModalCloseButton />

      <ModalBody>
      
      </ModalBody>

      <ModalFooter justifyContent="center" bg="gray.100">
    


      </ModalFooter>
    </ModalContent>
  </Modal>

  );
}
