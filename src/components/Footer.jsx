import React from 'react';
import * as Chakra from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";



function Footer() {
  return (
<Chakra.Box py={4}  style={{
    background: "linear-gradient(to right, #1C1C1C, #A7414A, #1C1C1C)",

    borderStyle: "solid",
   
  }} width="100vw">
  
      <Chakra.Container maxW="container.lg"  >
  
        <Chakra.SimpleGrid columns={{ base: 1, sm: 2, md: 2, xl: 3 }} spacing={1} style={{
    background: "linear-gradient(to right, #1C1C1C, #A7414A, #1C1C1C)",
    borderWidth: "0 0px 6px 0px",
    borderStyle: "solid",
    borderColor: "transparent transparent black transparent",
    borderRadius: "5px",
    borderColor: "black transparent transparent transparent", // Cambia el orden de los colores del borde
  }}>
          <Chakra.VStack align="flex-start">
            <Chakra.Text fontSize="md" color="#FF5733" fontWeight="bold">
              Contáctanos
            </Chakra.Text>
            <Chakra.Text fontSize="xs" color="#FF5733">
              Buenos Aires 60, M5600 FZB, Mendoza, Argentina
            </Chakra.Text>
            <Chakra.Text fontSize="xs" color="#FF5733">
              Teléfono: +123 456 789
            </Chakra.Text>
          </Chakra.VStack>

          <Chakra.VStack align="flex-start">
            <Chakra.Text fontSize="md" color="#FF5733" fontWeight="bold">
              Horario de Atención
            </Chakra.Text>
            <Chakra.Text fontSize="xs" color="#FF5733">
              Sábados - Domingos: 11:00 AM - 6:00 PM
            </Chakra.Text>
          </Chakra.VStack>

          <Chakra.VStack align="center" >
            <Chakra.HStack spacing={2}>
              <Chakra.IconButton
                icon={<Chakra.Icon as={FaFacebook} boxSize={4} />}
                aria-label="Facebook"
                variant="ghost"
                color="#FF5733"
              />
              <Chakra.IconButton
                icon={<Chakra.Icon as={FaTwitter} boxSize={4} />}
                aria-label="Twitter"
                variant="ghost"
                color="#FF5733"
              />
              <Chakra.IconButton
                icon={<Chakra.Icon as={FaInstagram} boxSize={4} />}
                aria-label="Instagram"
                variant="ghost"
                color="#FF5733"
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
