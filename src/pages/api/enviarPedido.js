// Ruta: /pages/api/enviarPedido.js

import twilio from 'twilio';

const accountSid = 'ACfb947dcdb3ab90b0adb4410cc2f4dbd2'; // Reemplaza con tu Account SID de Twilio
const authToken = 'f87501b155dea5e2f8445b8ca5240244'; // Reemplaza con tu Auth Token de Twilio
const client = twilio(accountSid, authToken);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const pedido = req.body;
    const mensajePedido = `¡Hola! Quisiera realizar el siguiente pedido: \n\nNombre: ${pedido.nombre} \nDirección: ${pedido.direccion} \n\nDetalles del pedido: ...`;

    try {
      // Reemplaza "NUMERO_DESTINO" con el número de WhatsApp del propietario de la sanguchería
      const numeroDestino = '+542604224940';

      // Envía el mensaje de WhatsApp utilizando twilio
      await client.messages.create({
        body: mensajePedido,
        from: '+14155238886', // Reemplaza con tu número de Twilio
        to: `whatsapp:${numeroDestino}`
      });

      res.status(200).json({ message: 'El pedido se ha enviado por WhatsApp.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error al enviar el pedido por WhatsApp.' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
}