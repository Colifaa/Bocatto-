import React, { useState, useEffect } from 'react';
import { HStack, Box, Card, CardBody, Image, Heading, Text, ButtonGroup, Divider, Stack, CardFooter, Button,Grid,GridItem,SimpleGrid } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import FormularioRealizarPedido from "../components/FormularioRealizarPedido"


function Cards({productos,handleDeleteProduct,handleEditProduct,mostrarBotones}) {
 
 
  const [cart, setCart] = useState([]); // Estado para almacenar los productos del carrito


  console.log("cart",cart);

  const [isFormOpen, setIsFormOpen] = useState(false);

 


  const handleCloseForm = () => {
    setIsFormOpen(false);
  };





  
  return (
    
   
    
    <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} justifyContent="center">
    
    {productos?.map((producto, index) => (
        <Box key={index} display="flex" justifyContent="center" flexWrap="wrap">
          <Card maxW={{ base: "200px", md: "300px" }} mx="auto">
            <CardBody>
              <Image
                src={producto.imagen}
                alt={`Imagen de ${producto.nombre}`}
                borderRadius='lg'
                border="4px"
                boxSize={{ base: "150px", md: "250px" }}
              />

              <Stack>
                <Heading size='md'>{producto.nombre}</Heading>
                <Text>
                  {producto.salsas}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${producto.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
            {mostrarBotones && (  // Mostrar los botones solo si mostrarBotones es true
                <ButtonGroup spacing='2'>
                  <Button colorScheme="red" onClick={() => handleDeleteProduct(index)}>Eliminar</Button>
                  <Button colorScheme="blue" onClick={() => handleEditProduct(index)}>Editar</Button>
                </ButtonGroup>
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