import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, FormHelperText, VStack, Select, HStack, Button, IconButton, Box, Flex
} from '@chakra-ui/react';
import Cards from '../components/Cards';
import { supabase } from '../lib/supabase'; // Asegúrate de que la ruta sea correcta
export default function FormularioRealizarPedido({ isOpen, onClose, onEnviarPedido }) {

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [TipoServicio, setTipoServicio] = useState('Retirar');
  const [productosDisponiblesFormulario, setProductosDisponiblesFormulario] = useState([]);


  const [cantidadProductos, setCantidadProductos] = useState({}); 

  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');




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
  
    productosDisponiblesFormulario.forEach((producto) => {
      if (cantidadProductos[producto.id] > 0) {
        const subtotalProducto = producto.precio * cantidadProductos[producto.id];
        productosSeleccionados.push(`- x${cantidadProductos[producto.id]} ${producto.nombre} $${subtotalProducto}`);
      }
    });
  
    let costoTotal = productosSeleccionados.reduce((total, producto) => {
      const precioProducto = parseFloat(producto.match(/\$([0-9.]+)/)[1]);
      return total + precioProducto;
    }, 0);
  
    if (TipoServicio === "A domicilio") {
      costoTotal += costoEnvio;
    }
  
    const mensajeProductos = productosSeleccionados.join("\n");
    const mensajePedido = `¡Hola! Quisiera realizar el siguiente pedido,\n\nTipo de servicio: ${TipoServicio}\n\nNombre: ${nombre}\nTeléfono: ${telefono} 💲 Costos\n${mensajeProductos}${TipoServicio === "A domicilio" ? `\nCosto de entrega: $${costoEnvio},00` : ""}\nTotal a pagar: $${costoTotal},00\n\n👆 Envía este mensaje. Te atenderemos enseguida.`;
  
    const mensajeCodificado = encodeURIComponent(mensajePedido);
  
    const numeroDestino = '+542604224940'; // Cambiar por el número de WhatsApp correcto
    const enlaceWhatsApp = `https://wa.me/${numeroDestino}?text=${mensajeCodificado}`;
  
    window.open(enlaceWhatsApp, '_blank');
  };
  

  const handleCantidadChange = (productoId, cantidad) => {
    setCantidadProductos((prevCantidad) => ({
      ...prevCantidad,
      [productoId]: cantidad,
    }));
  };
  
 

  return (

    <Modal isOpen={isOpen} onClose={onClose} size="full">
    <ModalOverlay />
    <ModalContent color="blackAlpha.800" alignItems="center" bgSize="">
    <ModalHeader fontSize={['xl', '2xl', '3xl']}>
       <Box >
          <VStack spacing={4} align="center">
          <form onSubmit={enviarPedido}>
          <Flex justifyItems="flex-start" alignItems="center" mb={4}>
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
  
              <Input  
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

              <FormControl justifyItems="flex-start" >
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
                   fontSize={['sm', 'md', 'lg']}
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  size={['xs', 'md', 'lg']}
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
              </Flex>
           

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


              <Flex justifyItems="flex-start" alignItems="center" mb={4}>
             
               
       
              {productosDisponiblesFormulario.map(producto => (
              <FormControl key={producto.id} mt={4}>
                <FormLabel
                  textAlign="center"
                  fontWeight="bold"
                  fontSize={['md', 'lg', 'xl']}
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    cursor: 'pointer',
                    borderBottomColor: 'teal.500',
                    textShadow: 'none',
                    transform: 'scale(1.1)',
                  }}
                  _focus={{
                    outline: 'none',
                    borderBottomColor: 'teal.500',
                    textShadow: 'none',
                  }}
                >
                  Cantidad de {producto.nombre}
                </FormLabel>
               
                <Input
                  fontSize={['sm', 'md', 'lg']}
                  type="number"
                  value={cantidadProductos[producto.id] || ''}
                  onChange={(e) => handleCantidadChange(producto.id, e.target.value)}
                  size={['xs', 'md', 'lg']}
                  bg="teal.100"
                  borderRadius="xl"
                  _focus={{ outline: 'none', bg: 'white' }}
                />
                
                <Box minHeight={['120px', '150px', '180px']} width={['90%', '80%', '70%']} mx="auto">
                <FormHelperText
                  textAlign="center"
                  fontWeight="bold"
                  fontSize={['sm', 'md', 'lg']}
                  color="black.500"
                  pb={2}
                  textShadow="1px 1px 2px teal.300"
                  borderBottom="2px solid teal.400"
                  transition="all 0.2s ease-in-out"
                >
                  Selecciona la cantidad de {producto.nombre} que deseas.
                </FormHelperText>
                </Box>
              </FormControl>
            ))}
            
              </Flex>
              <HStack justifyContent="center">
              <Button type="submit" mt={4} colorScheme="teal">
  Enviar Pedido
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
