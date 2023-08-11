import React, { useState } from 'react';
import * as Chakra from "@chakra-ui/react";

const Carrito = ({ compras, onComprar, onEliminarProducto, cart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
  const handleEliminarProducto = (productoId) => {
    onEliminarProducto(productoId);
  };
      
  return (
    <Chakra.Box>
      <Chakra.Text  fontSize="xxx-large"  mb={4} textAlign="center" marginTop={20} textDecoration="inline-block" fontStyle="oblique"  color="black" fontWeight="extrabold"  fontFamily="Georgia">
        Pedido:
      </Chakra.Text>
      <Chakra.SimpleGrid minChildWidth='120px' spacing='40px' bgGradient="linear(to #A7414A, #A7414A, #A7414A)" templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={2} justifyContent="center">
        {cart?.map((producto) => (
          <Chakra.Box key={producto.id} p={4} borderWidth={1} borderRadius="lg" borderColor="#FF5733" bgColor="#000000" color="#FFFFFF" boxShadow="none" bgImage="Bocatto.png" bgSize="cover" bgPos="center" bgRepeat="no-repeat">
            <Chakra.Text fontSize="xl" color="#B76840" bgColor="rgba(0, 0, 0, 0.86)">{producto.nombre}</Chakra.Text>
            <Chakra.Text fontSize="xl" color="#FF5733" bgColor="rgba(0, 0, 0, 0.86)">Precio: ${producto.precio}</Chakra.Text>
            <Chakra.Text fontSize="xl" color="#F2C94C" bgColor="rgba(0, 0, 0, 0.86)">
              {producto.cantidad > 1 && (
                <span>Cantidad: x{producto.cantidad}</span>
              )}
            </Chakra.Text>
            <Chakra.Text fontSize="xx-large" color="#FF5733" fontWeight="bold" bgColor="rgba(0, 0, 0, 0.86)">
              Precio Total: ${producto.precio * producto.cantidad}
            </Chakra.Text>
            <Chakra.Button onClick={() => handleEliminarProducto(producto.id)} mt={2} bgColor="#FF5733" color="#FFFFFF"   colorScheme='red'>
              Eliminar
            </Chakra.Button>
          </Chakra.Box>
        ))}
      </Chakra.SimpleGrid>
    </Chakra.Box>
  );
};

export default Carrito;