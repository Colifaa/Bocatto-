// Ejemplo básico de cómo manejar el inicio de sesión del administrador
export default function handler(req, res) {
    const { email, password } = req.body;
  
    // Verificar las credenciales del administrador y devolver el token de acceso si la autenticación es exitosa
    if (email === 'admin@example.com' && password === 'admin123') {
      const token = '...'; // Aquí debes generar el token de acceso para el administrador
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  }