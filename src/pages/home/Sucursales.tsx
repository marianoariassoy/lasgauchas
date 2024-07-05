import { Link } from 'wouter'
import Image from '../../components/Image'

const Sucursales = () => {
  return (
    <section id='sucursales'>
      <div className='flex productos-item'>
        <div className='w-2/5'>
          <Image
            src='/images/sucursales.jpg'
            alt='Imagen Sucursales'
            color='white'
          />
        </div>
        <div className='px-16 py-28 w-3/5'>
          <div className='flex flex-col gap-y-16 max-w-3xl'>
            <h4>SUCURSALES</h4>
            <div>
              <img src='./images/location.svg' />
            </div>
            <div className='flex flex-col gap-y-3'>
              <h1 className='font-secondary text-6xl'>visitanos</h1>
              <p>
                Actualmente tenemos dos locales en la provincia de Salta. Uno en Tres Cerritos que ofrece servicios de
                entrega a domicilio y para llevar, y otro en el barrio San Luis, en un entorno rodeado de naturaleza,
                donde los clientes pueden disfrutar de nuestros sabores junto con una excelente selección de vinos
                salteños para una experiencia de maridaje perfecta. En Buenos Aires nos encontramos ubicados en el
                corazón de Bella Vista y pròximamente con una nueva sucursal en CABA
              </p>
            </div>
            <div className='flex justify-end'>
              <Link
                to='/sucursales'
                className='bg-white border-2 transition-colors border-white text-black px-6 py-2 hover:text-white hover:bg-transparent'
              >
                Ver ubicaciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sucursales
