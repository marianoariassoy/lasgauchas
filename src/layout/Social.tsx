import { social } from '../components/data'

const Social = () => {
  return (
    <div className='items-center gap-x-4 flex'>
      {social.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target='_blank'
          className='hover:opacity-70 transition-all'
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default Social
