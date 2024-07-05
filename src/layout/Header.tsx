import { Logo } from '../components/icons'
import Social from './Social'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='sticky top-0 bg-black/70 backdrop-blur-lg z-50 flex justify-between px-6 lg:px-16 py-6'>
      <div>
        <a
          href='#home'
          className='scroll hover:scale-110 transition-transform block'
        >
          <Logo />
        </a>
      </div>
      <div className='flex items-center gap-x-16'>
        <Nav />
        <Social />
      </div>
    </header>
  )
}

export default Header
