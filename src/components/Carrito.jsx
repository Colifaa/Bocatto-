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
      <Chakra.Text fontSize="xl" fontWeight="bold" mb={4}>
        Carrito de Compras
      </Chakra.Text>
      <Chakra.SimpleGrid columns={1} spacing={4}>
        {cart?.map((producto) => (
          <Chakra.Box key={producto.id} p={4} borderWidth={1} borderRadius="md">
            <Chakra.Text>{producto.nombre}</Chakra.Text>
            <Chakra.Text>Precio: ${producto.precio}</Chakra.Text>
            <Chakra.Text>
              {producto.cantidad > 1 && (
                <span>Cantidad: x{producto.cantidad}</span>
              )}
            </Chakra.Text>
            <Chakra.Text>
              Precio Total: ${producto.precio * producto.cantidad}
            </Chakra.Text>
            <Chakra.Button onClick={() => handleEliminarProducto(producto.id)}>
              Eliminar
            </Chakra.Button>
          </Chakra.Box>
        ))}
      </Chakra.SimpleGrid>
    </Chakra.Box>
  );
};

export default Carrito;