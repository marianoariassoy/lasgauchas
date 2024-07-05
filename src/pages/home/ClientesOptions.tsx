import { useState } from 'react'
import { Cold, Fire } from '../../components/icons'

const ClientesOptions = () => {
  const [active, setActive] = useState('salta')

  const menu = [
    {
      title: 'salta',
      path: 'salta'
    },
    {
      title: 'jujuy',
      path: 'jujuy'
    },
    {
      title: 'cordoba',
      path: 'cordoba'
    },
    {
      title: 'santa fe',
      path: 'santa-fe'
    },
    {
      title: 'buenos aires',
      path: 'buenos-aires'
    }
  ]

  return (
    <article className='bg-light-gray text-black py-20 fade-in flex flex-col gap-y-20'>
      <div className='grid grid-cols-3 gap-x-16'>
        <div></div>
        <div>
          <h2 className='font-bold uppercase'>dónde estamos</h2>
        </div>
        <div></div>
      </div>
      <div className='grid grid-cols-3 gap-x-16 items-center'>
        <div className='flex flex-col items-end gap-y-20'>
          <nav>
            <ul className='font-secondary text-5xl text-right flex flex-col gap-y-6'>
              {menu.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActive(item.path)}
                    className={`transition-colors ${active === item.path ? '' : 'text-black/30 hover:text-black'} `}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div className='flex items-center justify-end gap-x-2'>
              Precocidas: <Cold />
            </div>
            <div className='flex items-center justify-end gap-x-2'>
              Calientes: <Fire />
            </div>
          </div>
        </div>
        <div></div>

        <div></div>
      </div>
    </article>
  )
}

export default ClientesOptions
