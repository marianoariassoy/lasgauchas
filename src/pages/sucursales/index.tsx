import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useState } from 'react'

const Index = () => {
  const [active, setActive] = useState('salta')

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

  const menu = [
    {
      title: 'salta',
      path: 'salta'
    },
    {
      title: 'buenos aires',
      path: 'buenos-aires'
    }
  ]

  return (
    <Layout>
      <section className='bg-light-gray px-6 text-black fade-in flex flex-col gap-y-20 mt-32'>
        <div className='grid grod-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-16 items-center'>
          <div>
            <nav>
              <ul className='font-secondary text-3xl lg:text-5xl mb-6 lg:text-right flex flex-col lg:gap-y-3'>
                {menu.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`transition-colors ${active === item.path ? '' : 'text-black/30 hover:text-black'} `}
                      onClick={() => setActive(item.path)}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h2 className='font-bold mb-6 lg:mb-12'>SUCURSALES</h2>
            <img
              src={active === 'salta' ? '/images/salta.jpg' : '/images/buenos-aires.jpg'}
              alt='Imagen ciudad de salta'
              className='w-full block'
            />
          </div>

          {active === 'salta' ? (
            <div className='flex flex-col gap-y-6'>
              <div>
                <h3 className='font-secondary text-xl lg:text-3xl'>salta capital</h3>
                <p className='text-sm lg:text-base'>
                  Los Eucaliptus 246, B° Tres Cerritos <br />
                  Contacto: (387) 594-4702
                </p>
              </div>
              <div>
                <h3 className='font-secondary text-xl lg:text-3xl'>san luis</h3>
                <p className='text-sm lg:text-base'>
                  Paseo gastronómico “El Prado”, San Luis <br />
                  Contacto: (387) 632-3720
                </p>
              </div>
            </div>
          ) : (
            <div className='flex flex-col gap-y-6'>
              <div>
                <h3 className='font-secondary text-xl lg:text-3xl'>bella vista</h3>
                <p className='text-sm lg:text-base'>
                  “Paseo Norte”, Dr. Pedro A. Pardo 1609, Bella Vista <br />
                  Contacto: (011) 3111-3377
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
