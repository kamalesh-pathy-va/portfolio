'use client';

import { Dispatch, SetStateAction } from 'react'

const FilterChips = (props: { name: string; setValue: Dispatch<SetStateAction<string>>; filter: string; }) => {
  return (
    <div
      className={`flex items-center justify-center px-3 py-1 rounded-full cursor-pointer ${props.filter===props.name ? 'bg-neutral-500/70' : 'bg-neutral-700/70 hover:bg-neutral-600/80'}`}
      onClick={() => props.setValue(props.name)}>
      {props.name}
    </div>
  )
}

export default FilterChips