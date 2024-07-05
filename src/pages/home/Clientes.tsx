import { Link } from 'wouter'

const Clientes = () => {
  return (
    <section
      className='bg-light-gray text-black pt-12 px-6 lg:px-20'
      id='clientes'
    >
      <div
        className='grid grid-cols-2 gap-x-12 mx-auto max-w-6xl items-center'
        id='clientes-main'
      >
        <div className='flex flex-col gap-y-28  '>
          <h1 className='font-secondary text-8xl'>
            <span className='block'>donde</span>
            <span>estamos</span>
          </h1>
          <div className='flex flex-col items-start gap-y-6'>
            <div className='max-w-3xl'>
              Contamos con una amplia cartera de clientes en el país que nos acompañan y confían en nosotros; y en la
              calidad de nuestros productos. Algunos de ellos con más de 4 años de trayectoria.
            </div>
            <Link
              to='/clientes'
              className='bg-black text-white border-2 transition-colors border-black px-6 py-2
         hover:text-black hover:bg-transparent'
            >
              Ver clientes
            </Link>
          </div>
        </div>
        <div>
          <img
            src='/images/mapa.svg'
            alt='Mapa de clientes'
            className='w-full'
          />
        </div>
      </div>
    </section>
  )
}

export default Clientes
