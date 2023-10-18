import React, { ReactNode } from 'react'


interface techItem {
  Icon: ReactNode;
  name: string;
  rating: string;
  level: string;
}

const TechItem = (props: techItem) => {

  let progressWidth;

  if (props.rating === "1") {
    progressWidth = "group-hover:w-1/5";
  } else if (props.rating === "2") {
    progressWidth = "group-hover:w-2/5";
  } else if (props.rating === "3") {
    progressWidth = "group-hover:w-3/5";
  } else if (props.rating === "4") {
    progressWidth = "group-hover:w-4/5";
  } else {
    progressWidth = "group-hover:w-full"
  }
    
  return (
    <div className='group bg-neutral-700/50 max-w-[18rem] rounded-md aspect-video p-3 xl:p-4 flex flex-col justify-center items-center gap-2 md:hover:justify-start md:hover:items-start'>
      <div className='flex flex-col gap-3 md:group-hover:flex-row items-center'>
        <div className='text-5xl md:group-hover:text-2xl'>{props.Icon}</div>
        <span className='font-bold md:group-hover:text-lg'>{props.name}</span>
      </div>

      <div className='hidden md:group-hover:flex flex-col w-full gap-1 xl:gap-2'>
        <span>
          I would rate myself a <span className="font-bold">{props.rating}</span>/5
        </span>

        <div className='w-full h-2 bg-neutral-600/70 rounded-full'>
          <div className={`w-0 ${progressWidth} h-full bg-neutral-200 rounded-full transition-[width]`} />
        </div>

        <span className='hidden group-hover:block w-fit bg-neutral-600/70 px-2 py-1 rounded-md text-sm font-bold mt-1'>{props.level}</span>
      </div>

    </div>
  )
}

export default TechItem