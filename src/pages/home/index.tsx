import Layout from '../../layout/Layout'
import Clientes from './Clientes'
import Contacto from './Contacto'
import Hero from './Hero'
import Nosotros from './Nosotros'
import Productos from './Productos'
import Sucursales from './Sucursales'

const index = () => {
  return (
    <Layout>
      <Hero />
      <Nosotros />
      <Productos />
      <Clientes />
      <Sucursales />
      <Contacto />
    </Layout>
  )
}

export default index
