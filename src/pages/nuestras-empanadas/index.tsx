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
    indicators: true,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    prevArrow: (
      <button className='ml-12 top-12 left-auto right-20 flex justify-end hover:ml-10 transition-all lg:right-auto lg:top-auto'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='mr-6 top-12 lg:mr-12 hover:mr-10 transition-all lg:top-auto'>
        <Forward />
      </button>
    )
  }

  const data = [
    {
      title: 'carne',
      descriptioon:
        'La empanada de Carne, un emblema nacional, con carne cortada a cuchillo, papa y todos los sabores de las especias de nuestros valles calchaquíes.',
      text: `La empanada de Carne, un emblema nacional, con carne cortada a cuchillo, papa y todos los sabores de las especias de nuestros valles calchaquíes.',
      text: 'Ingredientes: harina, agua, carne, cebolla, cebolla de verdeo, papa, grasa vacuna refinada, sal, pimientón, ají molido, comino. 

INFORMACIÓN  NUTRICIONAL:  Valor energético 320 Kcal = 1338 KJ (16%VD*). Carbohidratos 29 g (10%VD*). Azúcares totales  0,5 g. Azúcares añadidos 0g. Proteínas 11 g (16%VD*). Grasas totales 13 g (17%VD*). Grasas saturadas 8,5 g (39%VD*). Grasas trans 0 g.  Fibra alimentariua 1,4 g (6%VD*). Sodio 245 mg (10%VD*).

*Valores Diarios en base a una dieta de 2000 Kcal u 8400 KJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.`,
      image: '/images/carne.png'
    },
    {
      title: 'pollo',
      description:
        'Para este clásico salteño, la empanada de Pollo, utilizamos sólo pechuga junto con otros ingredientes nobles. Déjate sorprender con su sabor.',
      text: `Ingredientes: harina, agua, pollo, cebolla, papa, margarina, sal, pimientón, ají molido.

INFORMACIÓN  NUTRICIONAL: Valor energético 266 Kcal = 1112 KJ (15%VD*). Carbohidratos 29 g (10%VD*). Azúcares totales  0,6 g. Azúcares añadidos 0g. Proteínas 11 g (16%VD*). Grasas totales 11,6 g (21%VD*). Grasas saturadas 6,3 g (29%VD*). Grasas trans 0 g.  Fibra alimentariua 1,6 g (6%VD*). Sodio 312 mg (13%VD*).

*Valores Diarios en base a una dieta de 2000 Kcal u 8400 KJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.`,
      image: '/images/pollo.png'
    },
    {
      title: 'espinaca',
      description:
        'En nuestra empanada de Espinaca creamos una perfecta combinación de sabores y texturas, haciéndola una verdadera delicia que sorprende hasta a los más pequeños.',
      text: `Ingredientes: harina, agua, espinaca, morrón, queso, puerro, margarina, manteca, leche, sal. Fecha de lote/vencimiento: ver empaque. 

INFORMACIÓN  NUTRICIONAL: Valor energético 200 Kcal = 836 KJ (10%VD*). Carbohidratos 25,7 g (9%VD*). Azúcares totales  1,2  g. Azúcares añadidos 0g. Proteínas 6,7 g (9%VD*). Grasas totales 7,8 g (14%VD*). Grasas saturadas  4,8 (22%VD*). Grasas trans 0g.  Fibra alimentariua 1,9 g(8%VD*). Sodio 247 mg (10%VD*).

*Valores Diarios en base a una dieta de 2000 Kcal u 8400 KJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.`,
      image: '/images/espinaca.png'
    },
    {
      title: 'queso',
      description:
        'Para nuestra empanada de Queso sólo agregamos cebolla, trocitos de papa y algunos condimentos que la hacen simplemente irresistible.',
      text: `Ingredientes: harina, agua, queso, cebolla, papa, margarina, sal, pimientón, ají molido. 

INFORMACIÓN  NUTRICIONAL:  Valor energético 303 Kcal = 1266 KJ (15%VD*). Carbohidratos 25 g (8%VD*). Azúcares totales  0,7 g. Azúcares añadidos 0g. Proteínas 9,3 g (12%VD*). Grasas totales 15,6 g(28%VD*). Grasas saturadas 6,4 g (29%VD*). Grasas trans 0 g.  Fibra alimentariua 1,3 g (5%VD*). Sodio 400 mg (17%VD*). 

*Valores Diarios en base a una dieta de 2000 Kcal u 8400 KJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.`,
      image: '/images/queso.png'
    },
    {
      title: 'choclo',
      description:
        'Inspirados en la clásica Humita en chala del norte argentino, fusionamos los sabores tradicionales de la misma en una deliciosa empanada de Choclo.',
      text: `Ingredientes: harina, agua, choclo amarillo, cebolla, margarina, sal, morrón, puerro, queso. 

INFORMACIÓN  NUTRICIONAL: Valor energético 245 Kcal = 1338 KJ (12%VD*). Carbohidratos 35,7 g (8%VD*). Azúcares totales  2,4 g. Azúcares añadidos 0g. Proteínas 6,6 g (9%VD*). Grasas totales 8,1 g (15%VD*). Grasas saturadas 4,7 g (21%VD*). Grasas trans 0 g.  Fibra alimentariua 2,2 g (9%VD*). Sodio 298 mg (12%VD*).

*Valores Diarios en base a una dieta de 2000 Kcal u 8400 KJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.`,
      image: '/images/choclo.png'
    }
  ]

  return (
    <Layout>
      <section className='w-screen mt-32'>
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
