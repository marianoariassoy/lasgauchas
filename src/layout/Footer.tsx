import { Link } from 'wouter'
import { Logo } from '../components/icons'
import { menu, social } from '../components/data'

const Footer = ({ location }) => {
  return (
    <footer className='py-12 flex justify-between lg:items-center gap-x-3 px-6 lg:px-16'>
      <div className='flex flex-col gap-y-12'>
        <nav className='flex flex-col'>
          {menu.map((item, index) => (
            <Link
              key={index}
              href={location === '/' ? item.path : '/'}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <nav className='flex gap-x-3'>
          {social.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className='hover:text-white/50 transition-all'
            >
              {item.icon}
            </a>
          ))}
        </nav>
      </div>
      <div>
        <Logo />
      </div>
    </footer>
  )
}

export default Footer
