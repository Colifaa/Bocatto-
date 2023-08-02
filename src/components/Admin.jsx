import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Box,
} from '@chakra-ui/react';

function Admin() {
  const [showForm, setShowForm] = useState(false);
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [salsas, setSalsas] = useState('');
  const [imagenProducto, setImagenProducto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para guardar los datos del producto, como enviar una solicitud a la ruta API de Next.js para almacenarlos en una base de datos o archivo.
    // Por ejemplo:
    const producto = {
      nombre: nombreProducto,
      precio: precioProducto,
      ingredientes: ingredientes,
      salsas: salsas,
      imagen: imagenProducto,
    };
    console.log(producto);
    // Luego, puedes enviar los datos a la ruta API utilizando fetch u otra librería para hacer solicitudes HTTP.
    handleClose(); // Cierra el formulario después de enviar los datos.
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <Box p={4}>
      {showForm ? (
        <form onSubmit={handleSubmit}>
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

          <Button type='submit' mt={4} colorScheme='teal'>
            Agregar Producto
          </Button>

          <Button onClick={handleClose} mt={4} ml={4}>
            Cerrar Formulario
          </Button>
        </form>
      ) : (
        <Button onClick={toggleForm} mt={4} colorScheme='blue'>
          Abrir Formulario
        </Button>
      )}
    </Box>
  );
}

export default Admin;
