import Cajas from './Cajas'

const Item = ({ data }) => {
  return (
    <article className='px-6 lg:px-12 w-screen congeladas-item pt-52 pb-32'>
      <div className='max-w-5xl mx-auto flex flex-wrap gap-12 lg:gap-20 items-center justify-center'>
        {data.map((item, index) => (
          <Cajas
            key={index}
            data={item}
          />
        ))}
      </div>
    </article>
  )
}

export default Item
