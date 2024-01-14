const Tags = ({tagName}: {tagName: string}) => {
  return (
    <div className='bg-neutral-700 px-3 py-1 text-sm rounded-full font-semibold'>
      {tagName}
    </div>
  )
}

export default Tags