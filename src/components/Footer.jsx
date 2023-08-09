import React from 'react';
import * as Chakra from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";



function Footer() {
  return (
    <Chakra.Box py={4}>
      <Chakra.Container maxW="container.lg">
        <Chakra.SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={2}>
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
          
          <Chakra.VStack align="flex-start" alignItems="center">
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
            </Chakra.HStack>
          </Chakra.VStack>
        </Chakra.SimpleGrid>
      </Chakra.Container>
    </Chakra.Box>
  );
}

export default Footer;
