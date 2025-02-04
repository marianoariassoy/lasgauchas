import Image from '../../components/Image'

const Nosotros = () => {
  return (
    <section
      className='bg-light-gray text-black relative'
      id='quienes-somos'
    >
      <div className='absolute top-0 w-full h-80 lg:h-1/2 bg-black'></div>
      <div className='w-full max-w-6xl mx-auto px-6 pt-20 pb-6 lg:py-20 relative flex flex-col gap-y-3 lg:gap-y-6'>
        <div className='absolute top-32 lg:top-1/3 z-10'>
          <h1 className='font-secondary text-5xl lg:text-8xl text-white'>quienes somos</h1>
        </div>
        <div className='flex justify-end'>
          <div className='w-10/12'>
            <Image
              src='./images/nosotros.jpg'
              alt='nosotros'
              color='white'
            />
          </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12'>
          <div className='flex flex-none justify-center items-center'>
            <div className='w-1/2 lg:w-auto'>
              <Image
                src='./images/nosotros-2.png'
                alt='nosotros'
                color='black'
              />
            </div>
          </div>
          <div className='text-balance flex-grow pt-6 text-sm lg:text-base'>
            Fundada en 2014 como "Los Blanco", Las Gauchas comenzó como una pequeña tienda de empanadas ubicada en el
            barrio de Tres Cerritos en Salta. Inspirados en un antiguo negocio familiar y preservando las tradiciones
            culinarias de nuestra cultura, empezamos a crear recetas que reflejan nuestra identidad.
            <br />
            <br />
            En los últimos años, nuestra ambición nos ha llevado más allá de Salta para explorar nuevos mercados, con el
            objetivo de llevar nuestras queridas empanadas salteñas a diferentes rincones del país. Mirando hacia el
            futuro, imaginamos un horizonte más amplio donde nuestro plato emblemático sea reconocido a nivel mundial.
            <br />
            <br />
            Hoy en día, hemos avanzado significativamente, expandiéndonos a cinco provincias con puntos de venta y
            distribuidores independientes que ofrecen nuestro producto congelado cuidadosamente envasado, manteniendo la
            calidad que merece nuestro plato insignia. Con cada bocado, compartimos un pedazo de nuestra tierra,
            capturando los sabores y colores del Valle Calchaquí.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
