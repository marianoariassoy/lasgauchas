import { menu } from '../components/data'
import { Link } from 'wouter'

const Menu = ({ location }) => {
  const closeMenu = () => {
    const menu = document.getElementById('menu')
    const bars = document.getElementById('nav-menu')
    bars?.classList.toggle('active')
    menu?.classList.toggle('hidden')
  }

  return (
    <nav
      className='absolute w-full h-screen backdrop-blur-lg hidden bg-black/70 left-0 top-0 -z-10'
      onClick={closeMenu}
      id='menu'
    >
      <ul className='flex flex-col items-center justify-center gap-3 text-xl h-full'>
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              href={location === '/' ? item.path : '/'}
              className='scroll'
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
