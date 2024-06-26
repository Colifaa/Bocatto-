import React from 'react';
import * as Chakra from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";



function Footer() {
  return (
<Chakra.Box py={4}  style={{
    background: "linear-gradient(to right, #1C1C1C, #A7414A, #1C1C1C)",

    borderStyle: "solid",
   
  }} width="100vw">
  
  <Chakra.Container maxW="container.lg">
    <Chakra.SimpleGrid columns={{ base: 1, sm: 2, md: 2, xl: 3 }} spacing={1}>
      <Chakra.VStack align="flex-start">
        <Chakra.Text fontSize={[ 'sm', 'md', 'lg', 'xl', '2xl']} color="Black" fontWeight="bold" fontFamily="Georgia">
          Contáctanos
        </Chakra.Text>
        <Chakra.Text fontSize={[ 'sm', 'md', 'lg', 'xl', '2xl']} color="Black" fontFamily="Georgia">
         San Rafael Mendoza, Argentina
        </Chakra.Text>
        <Chakra.Text fontSize={[ 'sm', 'md', 'lg', 'xl', '2xl']} color="Black" fontFamily="Georgia"> 
          Teléfono: 2604110289
        </Chakra.Text>
      </Chakra.VStack>

      <Chakra.VStack align="flex-start">
        <Chakra.Text  fontSize={[ 'sm', 'md', 'lg', 'xl', '2xl']} color="Black" fontWeight="bold" fontFamily="Georgia">
          Horario de Atención
        </Chakra.Text>
        <Chakra.Text fontSize={[ 'sm', 'md', 'lg', 'xl', '2xl']} color="Black" fontFamily="Georgia">
          Viernes - Sábados: 19:00 PM - 23:00 PM 
        </Chakra.Text>
      </Chakra.VStack>

      <Chakra.VStack align="center">
        <Chakra.HStack spacing={2}>
          <Chakra.IconButton
            icon={<Chakra.Icon as={FaFacebook} boxSize={5} />}
            aria-label="Facebook"
            variant="ghost"
            color="Black"
          />
          <Chakra.IconButton
            icon={<Chakra.Icon as={FaTwitter} boxSize={5} />}
            aria-label="Twitter"
            variant="ghost"
            color="Black"
          />
          <Chakra.IconButton
            as="a" // Utilizar un enlace <a> en lugar de un botón
            href="https://www.instagram.com/bocatto.sr/"
            target="_blank" // Abrir enlace en una nueva pestaña
            rel="noopener noreferrer" // Buenas prácticas de seguridad para abrir enlaces en nuevas pestañas
            icon={<Chakra.Icon as={FaInstagram} boxSize={5} />}
            aria-label="Instagram"
            variant="ghost"
            color="black"
          />
                  <Chakra.Image  
  src="Bocattos2.png"
  width="100px" // Ajusta el ancho de la imagen
  height="auto" // Mantiene la proporción de la imagen
  mx="auto" // Centra horizontalmente la imagen
  ml="auto" // Desplaza la imagen hacia la derecha
  
/>
            </Chakra.HStack>
          </Chakra.VStack>
        </Chakra.SimpleGrid>
      </Chakra.Container>
    </Chakra.Box>
  );
}


export default Footer;
