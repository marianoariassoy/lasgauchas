import { menu } from '../components/data'
import { Link } from 'wouter'

const Nav = ({ location }) => {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex gap-x-10'>
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              href={location === '/' ? item.path : '/'}
              className='scroll main-nav'
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
