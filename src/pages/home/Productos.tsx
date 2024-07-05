import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import ProductosItem from './ProductosItem'
import { Forward, Back } from '../../components/icons'

const Productos = () => {
  const sliderProperties = {
    autoplay: false,
    transitionDuration: 500,
    indicators: true,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    prevArrow: (
      <button className='ml-12 hover:ml-10 transition-all'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='mr-12 hover:mr-10 transition-all'>
        <Forward />
      </button>
    )
  }

  const data = [
    {
      title: 'nuestras empanadas',
      descrption:
        'En nuestra planta elaboradora combinamos técnicas ancestrales que conservan la esencia de la empanada tradicional, junto con procesos innovadores modernistas que aseguran la inocuidad de nuestros productos y una calidad  superior. Reafirmando así cada día nuestro compromiso con la gastronomía de brindar a nuestros consumidores un producto no solo delicioso sino también nutritivo. Transformando cada comida familiar con Las Gauchas, en una experiencia única',
      url: '/nuestras-empanadas',
      image: '/images/nuestras-empanadas.jpg',
      icon: '/images/nuestras-empanadas.svg'
    },
    {
      title: 'empanadas congeladas',
      descrption:
        'Nuestras empanadas precocidas pasan por un proceso de cocción en hornos a altas temperaturas, que cocinan por completo la masa dándoles el dorado clásico de una verdadera empanada salteña. Esto hace posible también  la regeneración en hornos convencionales de casa sin que pierdan el jugo que las caracteriza',
      url: '/empanadas-congeladas',
      image: '/images/empanadas-congeladas.jpg',
      icon: '/images/empanadas-congeladas.svg'
    }
  ]

  return (
    <section
      id='productos'
      className='w-screen h-full'
    >
      <Slide {...sliderProperties}>
        {data.map((item, index) => (
          <ProductosItem
            key={index}
            data={item}
          />
        ))}
      </Slide>
    </section>
  )
}

export default Productos
