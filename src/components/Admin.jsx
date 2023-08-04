import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Box,
  Modal,
  ModalOverlay ,
  ModalContent,
  ModalHeader,
  ModalCloseButton ,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import Cards from '../components/Cards';

function Admin() {
  const [showForm, setShowForm] = useState(false);
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [salsas, setSalsas] = useState('');
  const [imagenProducto, setImagenProducto] = useState(null);
  
  const [productos, setProductos] = useState([]); // Lista de productos

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario ha iniciado sesión


   

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nuevoProducto = {
      nombre: nombreProducto,
      precio: precioProducto,
      ingredientes: ingredientes,
      salsas: salsas,
      imagen: URL.createObjectURL(imagenProducto),
    };
    
    console.log("Nuevo producto:", nuevoProducto);
    
    setProductos([...productos, nuevoProducto]);
    handleClose();
  };

  const handleClose = () => {
    setShowForm(false);
  };

 

  const toggleForm = () => {
    setShowForm(!showForm);
  };





  return (
    <Box   p={4}>




      <Modal isOpen={showForm} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <FormControl>
                <FormLabel>Nombre del Producto</FormLabel>
                <Input
                  type='text'
                  value={nombreProducto}
                  onChange={(e) => setNombreProducto(e.target.value)}
                />
                <FormHelperText>Indicar nombre del producto.</FormHelperText>
              </FormControl>

          <FormControl mt={4}>
            <FormLabel>Precio del Producto</FormLabel>
            <Input
              type='number'
              value={precioProducto}
              onChange={(e) => setPrecioProducto(e.target.value)}
            />
            <FormHelperText>Indicar precio del producto.</FormHelperText>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Ingredientes</FormLabel>
            <Input
              type='text'
              value={ingredientes}
              onChange={(e) => setIngredientes(e.target.value)}
            />
            <FormHelperText>
              Indicar los ingredientes del producto.
            </FormHelperText>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Salsas</FormLabel>
            <Input
              type='text'
              value={salsas}
              onChange={(e) => setSalsas(e.target.value)}
            />
            <FormHelperText>Indicar las salsas del producto.</FormHelperText>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Imagen del Producto</FormLabel>
            <Input
              type='file'
              accept='image/*'
              onChange={(e) => setImagenProducto(e.target.files[0])}
            />
            <FormHelperText>
              Agregar una imagen representativa del producto.
            </FormHelperText>
          </FormControl>
          <Button type='submit' mt={4} colorScheme='teal' onClick={handleSubmit}>
                Agregar Producto
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
          <Button onClick={handleClose} colorScheme='teal' mr={3}>
            Cerrar Formulario
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
        <Cards productos={productos} />
        <Box display="flex" justifyContent="center" mt={4}>
      <Button onClick={toggleForm} colorScheme='blue'>
        {showForm ? 'Cerrar Formulario' : 'Abrir Formulario'}
      </Button>
    </Box>
    </Box>
  );
}

export default Admin;
