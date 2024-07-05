import { useState } from 'react'
import ClientesMain from './ClientesMain'
import ClientesOptions from './ClientesOptions'

const Clientes = () => {
  const [active, setActive] = useState('clientes-main')

  return (
    <section
      className='bg-light-gray text-black pt-12 px-6 lg:px-20'
      id='clientes'
    >
      {active === 'clientes-main' ? <ClientesMain setActive={setActive} /> : <ClientesOptions />}
    </section>
  )
}

export default Clientes
