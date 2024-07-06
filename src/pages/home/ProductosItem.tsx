import { Link } from 'wouter'
import Image from '../../components/Image'

const ProductosItem = ({ data }) => {
  return (
    <article className='flex items-start flex-col-reverse lg:flex-row productos-item'>
      <div className='lg:w-2/5 aspect-square lg:aspect-[5/7]'>
        <Image
          src={data.image}
          alt={data.title}
          color='white'
        />
      </div>
      <div className='lg:w-3/5 px-6 lg:px-16 py-12 lg:py-28'>
        <div className='flex flex-col gap-y-8 lg:gap-y-16 max-w-3xl'>
          <h4>PRODUCTOS</h4>
          <div>
            <img
              src={data.icon}
              className='w-20 lg:w-auto'
            />
          </div>
          <div className='flex flex-col gap-y-3'>
            <h1 className='font-secondary text-4xl lg:text-6xl'>{data.title}</h1>
            <p>{data.descrption}</p>
          </div>
          <div className='flex lg:justify-end'>
            <Link
              to={data.url}
              className='bg-white border-2 transition-colors border-white text-black px-6 py-2 hover:text-white hover:bg-transparent text-sm lg:text-base'
            >
              Ver variedades
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductosItem
