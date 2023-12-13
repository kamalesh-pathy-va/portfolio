import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import Tags from './Tags';

interface TableData {
  serialNo: number;
  title: string;
  tag: string[];
  itemURL: string;
  problemURL?: string;
}

const TableItem = ({serialNo, tag, title, itemURL, problemURL}: TableData) => {
  return (
    <div className='grid grid-cols-[5%_auto_35%] md:grid-cols-[5%_auto_30%_25%] lg:grid-cols-[5%_auto_35%_15%] gap-4 font-bold py-2 hover:bg-neutral-700/60 rounded-md'>
      <div className='flex items-center justify-end'>{serialNo}</div>
      <div className='flex flex-col justify-center overflow-hidden'>
        <span className='truncate'>{title}</span>
        <span className='text-xs text-neutral-500 truncate'>{problemURL}</span>
      </div>
      <div className='hidden md:flex items-center justify-end gap-2'>{tag.map((eachTag, index) => <Tags tagName={eachTag} key={index} />)}</div>
      <div className='flex items-center justify-center'>
        <Link href={`/challenges/${itemURL}`} className='group w-3/4 mx-1 bg-neutral-300 text-neutral-800 p-3 rounded-md font-bold text-sm'>
          <span className='flex items-center justify-center gap-2 translate-x-4 group-hover:translate-x-0 transition-transform'>
            <span>View</span>
            <span className='text-xl invisible group-hover:visible transition-[visibility]'><BiRightArrowAlt /></span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default TableItem