import { useEffect } from 'react'
import { Link } from 'wouter'
import Layout from '../../layout/Layout'
import { useState } from 'react'
import { Cold, Fire } from '../../components/icons'
import Item from './Item'

const Index = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    const header = document.querySelector('header')
    const body = document.querySelector('body')
    const footer = document.querySelector('footer')
    header.classList.add('bg-light-gray')
    body.classList.add('bg-light-gray')
    header.classList.add('text-black')
    footer.classList.add('text-black')
    return () => {
      header.classList.remove('bg-light-gray')
      body.classList.remove('bg-light-gray')
      header.classList.remove('text-black')
      footer.classList.remove('text-black')
    }
  }, [])

  const data = [
    {
      title: 'salta',
      path: 'salta',
      options: [
        {
          title: 'capital',
          places: [
            {
              title: 'Las Gauchas - Los Eucaliptus 246, B° Tres Cerritos',
              contact: 'Contacto: (387) 594-4702',
              precocidas: true,
              calientes: true
            },
            {
              title: 'Las Gauchas - Paseo gastronómico “El Prado”, San Luis',
              contact: 'Contacto: (387) 592-8720',
              precocidas: false,
              calientes: true
            },
            {
              title: 'La Tablita - Av. Gral Savio 983, B° Grand Burg',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Don Lorenzo - Puyerredón 496.',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Don Lorenzo - “El Punto”, San Lorenzo Chico.',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Don Lorenzo - “Paseo Hernández” J. Hernández 635. San Lorenzo.',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Lo de César - Av. San Martín 2220, San Lorenzo.',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'La Chacra - Valle Escondido, Ruta 9 Acc, Norte.',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Tienda de Sabores - Necochea 211.',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Trocadero - Selina Hotel, Balcarse 460.',
              contact: '',
              precocidas: false,
              calientes: false
            },
            {
              title: 'El Bodegón - O’Higgins 395.',
              contact: '',
              precocidas: false,
              calientes: true
            },
            {
              title: 'El Puesto, La Comarca - Av. Yerba Buena 1500, San Lorenzo Chico.',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Super Market - Caseros 227.',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title:
                'Check Bar & Coffee - Aeropuerto Internacional de Salta “Martín Miguel de Güemes”, zonda de embarque.',
              contact: '',
              precocidas: true,
              calientes: true
            },
            {
              title: 'a Posta - Km 0,5 interno a San Lorenzo Chico.',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Nuevo Casino Alberdi - Alberdi 165.',
              contact: '',
              precocidas: false,
              calientes: true
            },
            {
              title: 'Legado Mítico Hotel - Mitre 647.',
              contact: '',
              precocidas: false,
              calientes: true
            },
            {
              title: 'Sucreé - Alsina 196.',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Pollería Santiago - Santiago del Estero 226.',
              contact: '',
              precocidas: true,
              calientes: false
            }
          ]
        },
        {
          title: 'cayayate',
          places: [
            {
              title: '',
              contact: 'Contacto: (387) 613-3518 (Sólo pedidos por teléfono).',
              precocidas: true,
              calientes: false
            }
          ]
        }
      ]
    },
    {
      title: 'jujuy',
      path: 'jujuy',
      options: [
        {
          title: 'san salvador de jujuy',
          places: [
            {
              title: 'Punto Gourmet - El lapacho 55, Los perales',
              contact: 'Contacto - (0388) 445-3900',
              precocidas: true,
              calientes: false
            }
          ]
        }
      ]
    },
    {
      title: 'cordoba',
      path: 'cordoba',
      options: [
        {
          title: 'ciudad de cordoba',
          places: [
            {
              title: 'La Guella Argentina',
              contact: 'Contacto - (0351) 695-6329',
              precocidas: true,
              calientes: false
            }
          ]
        },
        {
          title: 'zona sur',
          places: [
            {
              title: 'Mercado Todo Rico - Av B. O’Higgins 5461',
              contact: 'Contacto - (0351) 371-7768',
              precocidas: true,
              calientes: false
            }
          ]
        },
        {
          title: 'zona norte',
          places: [
            {
              title: 'Tienda Serrana - Menéndez Pidal 3909',
              contact: 'Contacto: (0351) 809-4109',
              precocidas: true,
              calientes: false
            }
          ]
        }
      ]
    },
    {
      title: 'santa fe',
      path: 'santa-fe',
      options: [
        {
          title: 'rosario',
          places: [
            {
              title: 'AL FUEGO - J. Paz 1065',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'AL FUEGO - Entre Rios 386',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'AL FUEGO - Alvear 288',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'AL FUEGO - Paraguay 1609',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'AL FUEGO - Velez Sarfield 556',
              contact: '',
              precocidas: true,
              calientes: false
            },
            {
              title: 'AL FUEGO - Rioja 1856',
              contact: '',
              precocidas: true,
              calientes: false
            }
          ]
        },
        {
          title: 'funes',
          places: [
            {
              title: 'Mi Tienda Natural - Av. Fuerza Aérea 1880.',
              contact: 'Contacto: (0341) 624-5984',
              precocidas: true,
              calientes: false
            },
            {
              title: 'AL FUEGO - Av. Galindo 3460.',
              contact: 'Contacto: (341) 216-8718',
              precocidas: true,
              calientes: false
            }
          ]
        }
      ]
    },
    {
      title: 'buenos aires',
      path: 'buenos-aires',
      options: [
        {
          title: 'zona norte',
          places: [
            {
              title: 'San Isidro',
              contact: 'Contacto: (11) 2614-1642',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Gral. Pacheco',
              contact: 'Contacto: (11) 3197-3444',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Villa del Mayo',
              contact: 'Contacto: (11) 4149-9530',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Don Torcuato',
              contact: 'Contacto: (11) 4149-9530',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Tigre',
              contact: 'Contacto: (11) 4149-9530',
              precocidas: true,
              calientes: false
            }
          ]
        },
        {
          title: 'caba',
          places: [
            {
              title: 'Belgrano',
              contact: 'Contacto: (11) 7107-4633',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Devoto',
              contact: 'Contacto: (11) 7107-4633',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Villa del Parque',
              contact: 'Contacto: (11) 7107-4633',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Caballito',
              contact: 'Contacto: (11) 4564-6974',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Flores',
              contact: 'Contacto: (11) 4564-6974',
              precocidas: true,
              calientes: false
            },
            {
              title: 'Recoleta',
              contact: 'Contacto: (11) 3597-8293',
              precocidas: true,
              calientes: false
            }
          ]
        },
        {
          title: 'zona oeste',
          places: [
            {
              title: 'Bella Vista',
              contact: 'Contacto: (11) 3111-3377',
              precocidas: true,
              calientes: true
            }
          ]
        }
      ]
    }
  ]

  return (
    <Layout>
      <section className='bg-light-gray text-black items-start flex flex-col gap-6 lg:gap-y-20 mt-32'>
        <div className='w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-6 lg:gap-12'>
          <div className='lg:w-1/5 flex flex-col items-end gap-6 lg:gap-y-20 lg:pt-32 fade-in'>
            <nav className='w-full'>
              <ul className='font-secondary text-3xl lg:text-5xl lg:text-right flex flex-col lg:gap-y-3'>
                {data.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActive(index)}
                      className={`transition-colors ${active === index ? '' : 'text-black/30 hover:text-black'} `}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='w-full'>
              <div className='flex items-center lg:justify-end gap-x-2'>
                Precocidas: <Cold />
              </div>
              <div className='flex items-center lg:justify-end gap-x-2'>
                Calientes: <Fire />
              </div>
            </div>
          </div>
          <div className='lg:w-4/5 fade-in-delay'>
            <h2 className='font-bold uppercase mb-6'>dónde estamos</h2>
            <div className='flex flex-col gap-y-6'>
              {data[active].options.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col gap-y-3'
                >
                  <h3 className='text-3xl font-secondary'>{item.title}</h3>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3'>
                    {item.places.map((place, index) => (
                      <Item
                        key={index}
                        data={place}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='bg-black/80 text-white w-full'>
          <div className='flex justify-between items-center max-w-7xl mx-auto px-6 py-8'>
            <div>¿Querés formar parte? Contactanos y te daremos toda la información que necesitas!</div>
            <div>
              <Link
                href='/'
                className='bg-white border-2 transition-colors border-white text-black px-6 py-2 hover:text-white hover:bg-transparent'
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
