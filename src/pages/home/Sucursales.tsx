import { useState } from 'react'
import SucursalesMain from './SucursalesMain'
import SucursalesOptions from './SucursalesOptions'

const Sucursales = () => {
  const [active, setActive] = useState('sucursales-main')

  return (
    <section id='sucursales'>
      {active === 'sucursales-main' ? <SucursalesMain setActive={setActive} /> : <SucursalesOptions />}
    </section>
  )
}

export default Sucursales
