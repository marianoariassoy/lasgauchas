import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import { dataContact } from '../../components/data'

const Form = () => {
  const lan = 'es'

  type Inputs = {
    name: string
    city: string
    email: string
    location: string
    phone: string
    country: string
    message: string
  }

  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)

    axios.post(' ', { ...data }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const Error = () => {
    return <div className='text-sm font-medium mt-3 text-black/50'>{dataContact[lan].required}</div>
  }

  return (
    <>
      {error ? (
        <span className='text-2xl font-bold'>{dataContact[lan].error}</span>
      ) : sended ? (
        <span className='text-3xl font-bold'>{dataContact[lan].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 gap-4 text-sm lg:text-base'>
            <div>
              <input
                className='w-full border-2 border-black h-14 px-4 bg-light-gray placeholder-current  focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].name}
                {...register('name', { required: true })}
              />
              {errors.name && <Error />}
            </div>
            <div>
              <input
                className='w-full border-2 border-black h-14 px-4 bg-light-gray placeholder-current  focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].city}
                {...register('city')}
              />
            </div>
            <div>
              <input
                className='w-full border-2 border-black h-14 px-4 bg-light-gray placeholder-current  focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].email}
                {...register('email', { required: true })}
              />
              {errors.email && <Error />}
            </div>
            <div>
              <input
                className='w-full border-2 border-black h-14 px-4 bg-light-gray placeholder-current  focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].location}
                {...register('location')}
              />
            </div>
            <div>
              <input
                className='w-full border-2 border-black h-14 px-4 bg-light-gray placeholder-current  focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].phone}
                {...register('phone', { required: true })}
              />
              {errors.phone && <Error />}
            </div>
            <div>
              <input
                className='w-full border-2 border-black h-14 px-4 bg-light-gray placeholder-current  focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].country}
                {...register('country')}
              />
            </div>
          </div>
          <textarea
            className='w-full border-2 border-black bg-light-gray placeholder-current focus:outline-none focus:border-gray-400 h-52 p-4 mt-4'
            placeholder={dataContact[lan].message}
            {...register('message')}
          />
          <div className='mt-4'>
            {sending ? (
              <BeatLoader />
            ) : (
              <button
                type='submit'
                className='bg-black text-white px-12 py-3 hover:text-black border-2 border-black hover:bg-transparent transition-colors'
              >
                {dataContact[lan].send}
              </button>
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default Form
