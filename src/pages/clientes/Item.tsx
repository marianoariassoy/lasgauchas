import { Cold, Fire, Pin } from '../../components/icons'

const Item = ({ data }) => {
  return (
    <article className='flex items-start gap-x-3'>
      <div>
        <Pin />
      </div>
      <div className='flex flex-col flex-grow -mt-1 pr-3'>
        <span>{data.title}</span>
        <span>{data.contact}</span>
      </div>
      <div className='flex items-center gap-x-2'>
        {data.precocidas && <Cold />}
        {data.calientes && <Fire />}
      </div>
    </article>
  )
}

export default Item
