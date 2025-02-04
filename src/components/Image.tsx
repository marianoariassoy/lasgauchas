import { useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

interface Props {
  src: string
  alt: string
  color: string
}

const ImageComponent = ({ src, alt, color }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='h-full w-full flex justify-center items-center bg-primary'>
      <BeatLoader color={color} />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className='fade-in-delay h-full w-full object-cover object-center'
    />
  )
}

export default ImageComponent
