import { Facebook, Instagram } from './icons'

export const menu = [
  {
    title: 'Home',
    path: '#home'
  },
  {
    title: 'Quienes somos',
    path: '#quienes-somos'
  },
  {
    title: 'Productos',
    path: '#productos',
    categories: [
      {
        title: 'Nuestras empanadas',
        url: '/nuestras-empanadas'
      },
      {
        title: 'Empanadas congeladas',
        url: '/empanadas-congeladas'
      }
    ]
  },
  {
    title: 'Nuestros Clientes',
    path: '#clientes'
  },
  {
    title: 'Sucursales',
    path: '#sucursales'
  },
  {
    title: 'Contacto',
    path: '#contacto'
  }
]

export const social = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/lasgauchasok',
    icon: Facebook()
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/lasgauchas.empanadas',
    icon: Instagram()
  }
]

export const whatsapp = {
  title: 'WhatsApp',
  phone: 'https://wa.me/+543875944702'
}

export const dataContact = {
  es: {
    name: 'Nombre y apellido*',
    city: 'Ciudad',
    email: 'E-Mail*',
    location: 'Localidad',
    phone: 'Teléfono*',
    country: 'País',
    message: 'Mensaje',
    send: 'Enviar',
    thanks: '¡Su mensaje fue enviado! Gracias por contactarte con nosotros.',
    error: 'Se produjo un error al enviar el mensaje :-(',
    required: 'Por favor completá este dato'
  }
}
