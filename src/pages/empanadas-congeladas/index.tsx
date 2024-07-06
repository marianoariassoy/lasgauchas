import Layout from '../../layout/Layout'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Forward, Back } from '../../components/icons'
import Item from './Item'
import { useEffect } from 'react'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sliderProperties = {
    autoplay: false,
    transitionDuration: 300,
    indicators: false,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    prevArrow: (
      <button className='ml-6 lg:ml-12 hover:ml-10 transition-all'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='mr-6 lg:mr-12 hover:mr-10 transition-all'>
        <Forward />
      </button>
    )
  }

  const data = [
    ['/images/caja1.png', '/images/caja2.png', '/images/caja3.png', '/images/caja4.png', '/images/caja5.png'],
    ['/images/caja6.png', '/images/caja7.png', '/images/caja8.png', '/images/caja9.png', '/images/caja10.png']
  ]

  return (
    <Layout>
      <section className='w-screen'>
        <Slide {...sliderProperties}>
          {data.map((item, index) => (
            <Item
              key={index}
              data={item}
            />
          ))}
        </Slide>
      </section>
    </Layout>
  )
}

export default Index
