import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  VStack,
  HStack,
  IconButton,
  Select,
} from '@chakra-ui/react';
import Cards from '../components/Cards';

export default function FormularioRealizarPedido({ isOpen, onClose, onEnviarPedido }) {

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [metodoPago, setMetodoPago] = useState('Efectivo');
  const [TipoServicio, setTipoServicio] = useState('');

  const [cantidadBondiOlocos, setCantidadBondiOlocos] = useState(1); // Valor predeterminado de 1

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

    <Drawer isOpen={isOpen} placement={['top', 'center']} onClose={onClose} size={['full', '90%']}>
      <DrawerOverlay />
      <DrawerContent color="blackAlpha.800" alignItems="center" >
        <DrawerCloseButton />
        
        <DrawerHeader fontSize={['xl', '2xl', '3xl']}>Bondi-O-Loco</DrawerHeader>

        <DrawerBody bgColor="red.200" boxSize="container.md">

          <VStack spacing={4} align="center" > {/* Agregamos mt y mb aquí */}

            <form onSubmit={enviarPedido}>
              <FormControl>
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


                <Input
                  fontSize='20px'
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  size={['xs', 'md']}
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
                  fontSize='20px'
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  size={['xs', 'md']}
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
                  _focus={{ outline: 'none', borderBottomColor: 'teal.500', textShadow: 'none' }}>Tipo de Pago:</FormLabel>
                <Select
                  value={metodoPago}
                  onChange={(e) => setMetodoPago(e.target.value)}
                  fontSize='20px'
                  size="md"
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
                >
                  <option value="Efectivo" style={{ fontSize: '20px', fontFamily: 'Arial', backgroundColor: 'teal', color: 'red' }}>Efectivo</option>
                  <option value="Mercado Pago" style={{ fontSize: '20px', fontFamily: 'Arial', backgroundColor: 'teal', color: 'red' }}>Mercado Pago</option>
                  {/* Agrega más opciones de métodos de pago si es necesario */}
                </Select>
                <FormHelperText textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                >Indicar método de pago.</FormHelperText>
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
   fontSize='20px'
   size="md"
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
                  <option style={{ fontSize: '20px', fontFamily: 'Arial', backgroundColor: 'teal', color: 'red' }} value="Retirar">Retirar</option>
                  <option style={{ fontSize: '20px', fontFamily: 'Arial', backgroundColor: 'teal', color: 'red' }} value="A domicilio">A domicilio</option>
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

              <HStack justifyContent="center">
                <Button type="submit" mt={4} colorScheme="teal">
                  Agregar Producto
                </Button>
                
              </HStack>
            
            </form>

          </VStack>
        </DrawerBody>

        <DrawerFooter justifyContent="center" bg="gray.100">
          <Button variant="outline" color="teal" mr={3} onClick={onClose} fontSize={['xl', '2xl', '3xl']}>
            Cerrar Formulario
          </Button>

          <IconButton
            fontSize={['xl', '2xl', '3xl']}
            as="button"
            onClick={enviarPedido}
            icon={<FaWhatsapp />}
            size="lg"
            colorScheme="green"
            borderRadius="full"
            transition="all 0.2s"
            _hover={{ transform: "scale(1.2)" }}
          />
        </DrawerFooter>
      </DrawerContent>
      
    </Drawer>
    

  );
}
