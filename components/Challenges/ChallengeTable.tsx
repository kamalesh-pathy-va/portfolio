'use client';
import { trpc } from '@/app/_trpc/client'
import TableItem from './TableItem'
import { CgSpinner } from 'react-icons/cg'

const ChallengeTable = () => {
  const { data: tableData, isLoading: tableLoading } = trpc.challenges.get5Challenges.useQuery();
  return (
    <div className='w-full'>
      <div className='grid grid-cols-[5%_auto_35%] md:grid-cols-[5%_auto_30%_25%] lg:grid-cols-[5%_auto_35%_15%] py-2 border-b-2 border-b-neutral-400 gap-4'>
        <div className='text-right'>
          #
        </div>
        <div className='text-left'>
          Title
        </div>
        <div className='text-right hidden md:block'>
          Tags
        </div>
        <div></div>
      </div>
      { tableLoading? <div className='w-full flex justify-center text-5xl mt-4 font-bold animate-spin'><CgSpinner /></div>:
        tableData?.map((item, key) => <TableItem title={item.title} itemURL={item.id} tag={item.tag} key={key} serialNo={key+1} problemURL={item.problemURL?item.problemURL:''} />) 
      }
    </div>
  )
}

export default ChallengeTable