import { menu } from '../components/data'
import { useLocation } from 'wouter'

const Nav = () => {
  const [location] = useLocation()

  return (
    <nav>
      <ul className='flex gap-x-10'>
        {menu.map((item, index) => (
          <li key={index}>
            <a
              href={location === '/' ? item.path : '/'}
              className='scroll main-nav'
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
