import { menu } from '../components/data'
import { Link } from 'wouter'
import { Down } from '../components/icons'

const Nav = ({ location }) => {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex gap-x-10'>
        {menu.map((item, index) => (
          <li
            key={index}
            className={`${item.categories ? 'showsubmenu' : ''}`}
          >
            <Link
              href={location === '/' ? item.path : '/'}
              className={`flex items-center gap-x-2 ${item.categories ? 'hover:opacity-70' : 'scroll main-nav'}`}
            >
              <span>{item.title}</span>
              {item.categories && <Down />}
            </Link>
            {item.categories && (
              <ul className='absolute hidden bg-black border border-gray-600 px-4 flex-col [&>li:last-child]:border-0 submenu'>
                {item.categories.map((category, index) => (
                  <li
                    key={index}
                    className='border-b text-white border-gray-600 py-2 hover:text-white/70 transition-colors'
                  >
                    <Link href={category.url}>{category.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
