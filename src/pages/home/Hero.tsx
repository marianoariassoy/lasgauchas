import Image from '../../components/Image'
import { Logo } from '../../components/icons'

const Hero = () => {
  return (
    <section id='home'>
      <div className='absolute w-full h-full flex items-center justify-center text-6xl z-10'>
        <Logo />
      </div>
      <Image
        src='./images/hero.jpg'
        alt='hero'
        color='white'
      />
    </section>
  )
}

export default Hero
