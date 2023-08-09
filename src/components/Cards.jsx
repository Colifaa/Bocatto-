import React, { useState, useEffect } from 'react';
import { HStack, Box, Card, CardBody, Image, Heading, Text, ButtonGroup, Divider, Stack, CardFooter, Button, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import FormularioRealizarPedido from "../components/FormularioRealizarPedido"

function Cards({ productos, handleDeleteProduct, handleEditProduct, mostrarBotones,mostrarBotonAgregar,setCart,cart }) {

 
  const [isFormOpen, setIsFormOpen] = useState(false);



  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  const handleAddToCart = (producto) => {
    const productoExistente = cart.find((item) => item.nombre === producto.nombre);

    if (productoExistente) {
      // Si el producto con el mismo nombre ya está en el carrito, incrementa la cantidad y el precio total
      const nuevosProductos = cart.map((item) =>
        item.nombre === producto.nombre
          ? {
              ...item,
              cantidad: item.cantidad + 1,
              precioTotal: item.precio * (item.cantidad + 1),
            }
          : item
      );

      setCart(nuevosProductos);
    } else {
      // Si el producto no está en el carrito, agrega uno nuevo con cantidad 1
      setCart([...cart, { ...producto, cantidad: 1, precioTotal: producto.precio }]);
    }
  };
  return (
    <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={2} justifyContent="center">
      {productos?.map((producto, index) => (
        <Box key={index} display="flex" justifyContent="center" flexWrap="wrap" >
          <Card maxW={{ base: "200px", md: "300px" }} mx="auto" bgColor="#000000" color="#FFFFFF" alignItems="center">
            <CardBody>
              <Image
                src={producto.imagen}
                alt={`Imagen de ${producto.nombre}`}
                borderRadius='lg'
                border="4px"
                borderColor="#FF5733"
                boxSize={{ base: "150px", md: "250px" }}
              />
              <Stack>
                <Heading mt="4" size="lg" >{producto.nombre}</Heading>
                <Text>
                  {producto.salsas}
                </Text>
                <Text color='#FF5733' fontSize='2xl'>
                  ${producto.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider borderColor="#FF5733" />
            <CardFooter>
              {mostrarBotones && (
                <ButtonGroup spacing='2'>
                  <Button colorScheme="red" onClick={() => handleDeleteProduct(index)}>Eliminar</Button>
                  <Button colorScheme="blue" onClick={() => handleEditProduct(index)}>Editar</Button>
                </ButtonGroup>
              )}
            </CardFooter>
            <CardFooter>
              {mostrarBotonAgregar && (
                <Button  colorScheme="green" bgColor="#FF5733" onClick={() => handleAddToCart(producto)}>
                  Pedir
                </Button>
              )}
            </CardFooter>
          </Card>
        </Box>
      ))}
      <FormularioRealizarPedido isOpen={isFormOpen} onClose={handleCloseForm} />
    </Grid>
  );
}

export default Cards;
