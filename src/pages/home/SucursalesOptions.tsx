import { useState } from 'react'

const SucursalesUbicaciones = () => {
  const [active, setActive] = useState('salta')

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
    <article className='bg-light-gray text-black py-28 fade-in flex flex-col gap-y-20'>
      <div className='grid grid-cols-3 gap-x-16'>
        <div></div>
        <div>
          <h2 className='font-bold'>SUCURSALES</h2>
        </div>
        <div></div>
      </div>
      <div className='grid grid-cols-3 gap-x-16 items-center'>
        <div>
          <nav>
            <ul className='font-secondary text-5xl text-right flex flex-col gap-y-6'>
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
          <img
            src={active === 'salta' ? '/images/salta.jpg' : '/images/buenos-aires.jpg'}
            alt='Imagen ciudad de salta'
            className='w-full block'
          />
        </div>

        {active === 'salta' ? (
          <div className='flex flex-col gap-y-6'>
            <div>
              <h3 className='font-secondary text-3xl'>salta capital</h3>
              <p>
                Los Eucaliptus 246, B° Tres Cerritos <br />
                Contacto: (387) 594-4702
              </p>
            </div>
            <div>
              <h3 className='font-secondary text-3xl'>san luis</h3>
              <p>
                Paseo gastronómico “El Prado”, San Luis <br />
                Contacto: (387) 632-3720
              </p>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-y-6'>
            <div>
              <h3 className='font-secondary text-3xl'>bella vista</h3>
              <p>
                “Paseo Norte”, Dr. Pedro A. Pardo 1609, Bella Vista <br />
                Contacto: (011) 3111-3377
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default SucursalesUbicaciones
