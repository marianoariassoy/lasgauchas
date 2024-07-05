import { useEffect } from 'react'
import Form from './Form'
import scroll from '../../utils/scroll'

const Contacto = () => {
  useEffect(() => {
    scroll()
  }, [])

  return (
    <section
      className='bg-light-gray text-black'
      id='contacto'
    >
      <div className='w-full max-w-3xl mx-auto py-28 flex flex-col gap-y-8'>
        <h1 className='font-secondary text-8xl'>contacto</h1>
        <div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contacto
