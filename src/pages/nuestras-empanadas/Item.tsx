const Item = ({ data }) => {
  return (
    <article className='flex items-start flex-col lg:flex-row productos-item'>
      <div className='w-full lg:w-2/5 lg:px-12 flex items-center justify-center '>
        <img
          src={data.image}
          alt={data.title}
          className='w-full'
        />
      </div>
      <div className='lg:w-3/5 px-6 lg:px-16 py-12 lg:py-28'>
        <div className='flex flex-col gap-y-12 max-w-3xl'>
          <div className='flex flex-col gap-y-6'>
            <h4>VARIEDADES</h4>
            <h1 className='font-secondary text-5xl lg:text-6xl'>{data.title}</h1>
          </div>
          <div>
            <p>{data.text}</p>
          </div>
          <div>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Item
