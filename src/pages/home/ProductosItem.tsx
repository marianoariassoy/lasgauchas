import { Link } from 'wouter'
import Image from '../../components/Image'

const ProductosItem = ({ data }) => {
  return (
    <article className='flex productos-item'>
      <div className='w-2/5'>
        <Image
          src={data.image}
          alt={data.title}
          color='white'
        />
      </div>
      <div className='px-16 py-28 w-3/5'>
        <div className='flex flex-col gap-y-16 max-w-3xl'>
          <h4>PRODUCTOS</h4>
          <div>
            <img src={data.icon} />
          </div>
          <div className='flex flex-col gap-y-3'>
            <h1 className='font-secondary text-6xl'>{data.title}</h1>
            <p>{data.descrption}</p>
          </div>
          <div className='flex justify-end'>
            <Link
              href='/'
              className='bg-white border-2 transition-colors border-white text-black px-6 py-2 hover:text-white hover:bg-transparent'
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
