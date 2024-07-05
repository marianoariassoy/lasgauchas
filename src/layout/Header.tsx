import { useEffect } from 'react'
import { Link } from 'wouter'
import { Logo } from '../components/icons'
import Social from './Social'
import Nav from './Nav'

const Header = ({ location }: { location: string }) => {
  useEffect(() => {
    const logo = document.getElementById('logo')
    const header = document.getElementById('header')
    window.onscroll = () => {
      if (window.scrollY > 100) {
        logo?.classList.add('text-xs')
        header?.classList.add('bg-black/70')
      } else {
        logo?.classList.remove('text-xs')
        header?.classList.remove('bg-black/70')
      }
    }
  })
  return (
    <header
      className='fixed w-full top-0 bg-black backdrop-blur-lg  z-50 flex justify-between px-6 lg:px-16 py-6 transsition-all'
      id='header'
    >
      <div>
        <Link
          href={location === '/' ? '#home' : '/'}
          className='scroll hover:scale-110 block transition-all'
          id='logo'
        >
          <Logo />
        </Link>
      </div>
      <div className='flex items-center gap-x-16'>
        <Nav location={location} />
        <Social />
      </div>
    </header>
  )
}

export default Header
