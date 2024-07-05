const ClientesMain = ({ setActive }) => {
  return (
    <article
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
          <button
            className='bg-black text-white border-2 transition-colors border-black px-6 py-2
         hover:text-black hover:bg-transparent'
            onClick={() => setActive('clientes-options')}
          >
            Ver clientes
          </button>
        </div>
      </div>
      <div>
        <img
          src='/images/mapa.svg'
          alt='Mapa de clientes'
          className='w-full'
        />
      </div>
    </article>
  )
}

export default ClientesMain
