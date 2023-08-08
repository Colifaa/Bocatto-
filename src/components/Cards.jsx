import React, { useState, useEffect } from 'react';
import { HStack, Box, Card, CardBody, Image, Heading, Text, ButtonGroup, Divider, Stack, CardFooter, Button,Grid,GridItem,SimpleGrid } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import FormularioRealizarPedido from "../components/FormularioRealizarPedido"


function Cards({productos,handleDeleteProduct,handleEditProduct,mostrarBotones}) {
  const images = ['Bondiola 1.png', 'Bondiola 2.png'];
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [cart, setCart] = useState([]); // Estado para almacenar los productos del carrito


  console.log("cart",cart);

  const [isFormOpen, setIsFormOpen] = useState(false);

 


  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleNextImage1 = () => {
    setCurrentImage1((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage1 = () => {
    setCurrentImage1((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleNextImage2 = () => {
    setCurrentImage2((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage2 = () => {
    setCurrentImage2((prevImage) => (prevImage - 1 + images.length) % images.length);
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
            <HStack mt={4} justifyContent="center">
              <ChevronLeftIcon boxSize={8} cursor="pointer"  />
              <ChevronRightIcon boxSize={8} cursor="pointer" />
            </HStack>
            
          </Card>
          
        </Box>
        
      ))}
      

      
      <Card maxW={{ base: "200px", md: "300px" }} mx="auto">
        <CardBody>
          <Image
            src={images[currentImage1]}
            alt={`Imagen de Bondiola ${currentImage1 + 1}`}
            borderRadius='lg'
            border="4px"
            boxSize={{ base: "150px", md: "250px" }}
          />

          <Stack>
            <Heading size='md'>Bondi-O-Loco</Heading>
            <Text>
              Rika Rika rikaaaa la guachaaaaaa!
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $2000
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
         
          
          </ButtonGroup>
        </CardFooter>
        <HStack mt={4} justifyContent="center">
          <ChevronLeftIcon boxSize={8} cursor="pointer" onClick={handlePrevImage1} />
          <ChevronRightIcon boxSize={8} cursor="pointer" onClick={handleNextImage1} />
        </HStack>
        
      </Card>
  
    

    
      
      <Card maxW={{ base: "200px", md: "300px" }} mx="auto">
        <CardBody>
          <Image
            src={images[currentImage2]}
            alt={`Imagen de Bondiola ${currentImage2 + 1}`}
            borderRadius='lg'
            border="4px"
            boxSize={{ base: "150px", md: "250px" }}
          />
          

          <Stack>
            <Heading size='md'>Bondi-O-Loco</Heading>
            <Text>
              Rika Rika rikaaaa la guachaaaaaa!
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $2000
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          
          <ButtonGroup spacing='2'>
      
         
          </ButtonGroup>
          
        </CardFooter>
        
        <HStack mt={4} justifyContent="center">
          <ChevronLeftIcon boxSize={8} cursor="pointer" onClick={handlePrevImage2} />
          <ChevronRightIcon boxSize={8} cursor="pointer" onClick={handleNextImage2} />
        </HStack>
      </Card>
      
      <FormularioRealizarPedido isOpen={isFormOpen} onClose={handleCloseForm} />
     
    
    </Grid>




  
  
);
}
 
export default Cards;