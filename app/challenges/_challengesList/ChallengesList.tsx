'use client';

import { useState } from "react";
import FilterChips from "./FilterChips";
import { trpc } from "@/app/_trpc/client";
import { CgSpinner } from 'react-icons/cg'
import ChallengeItem from "./ChallengeItem";

interface ChallengeDataType {
  id: string;
  title: string;
  problemURL: string | null;
  file: string | null;
  tag: string[];
}

const ChallengesList = () => {
  const [filter, setFilter] = useState('All')
  const { data, isLoading: dataLoading } = trpc.challenges.getAllChallenges.useQuery()

  const compareString = (a: ChallengeDataType, b: ChallengeDataType) => {
    return a.title.localeCompare(b.title)
  }

  const [showList, setShowList] = useState(false);

  return (
    <>
      <button onClick={() => setShowList(prev => !prev)}
        className="flex md:hidden justify-center w-full bg-neutral-900 font-semibold p-2 transition mb-2 rounded-md">
        {showList? "Hide" : "Show"} challenge list
      </button>
      <div className={`md:flex flex-col gap-2 bg-neutral-900 h-full p-2 rounded-md ${showList? "flex": "hidden"}`}>
        <div className="flex gap-2 text-sm font-semibold p-2 bg-neutral-800/70 rounded-md">
          <FilterChips name='All' setValue={setFilter} filter={filter} />
          <FilterChips name='DSA' setValue={setFilter} filter={filter} />
        </div>
        <div className="overflow-y-scroll hide-scrollbar p-2 bg-neutral-800/70 rounded-md">
          {
            dataLoading ? <div className='flex justify-center items-center text-5xl mt-4 font-bold'><span className="animate-spin"><CgSpinner /></span></div> :
              filter === 'All' ? data?.sort(compareString).map(item => <ChallengeItem key={item.id} title={item.title} problemID={item.id} toggle={setShowList} />) :
                filter === 'UI/UX' ? null :
                data?.filter(item => !item.tag.includes('UI/UX')).sort(compareString).map(item => <ChallengeItem key={item.id} title={item.title} problemID={item.id} toggle={setShowList} />)
          }
        </div>
      </div>
    </>
  )
}

export default ChallengesList