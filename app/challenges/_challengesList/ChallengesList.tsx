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

  return (
    <div className="flex flex-col gap-2 bg-neutral-800 h-full p-2 rounded-md">
      <div className="flex gap-2 text-sm font-semibold p-2 bg-neutral-900/70 rounded-md">
        <FilterChips name='All' setValue={setFilter} filter={filter} />
        <FilterChips name='DSA' setValue={setFilter} filter={filter} />
        <FilterChips name='UI/UX' setValue={setFilter} filter={filter} />
      </div>
      <div className="overflow-y-auto hide-scrollbar p-2 bg-neutral-900/70 rounded-md">
        {
          dataLoading ? <div className='flex justify-center items-center text-5xl mt-4 font-bold'><span className="animate-spin"><CgSpinner /></span></div> :
            filter === 'All' ? data?.sort(compareString).map(item => <ChallengeItem key={item.id} title={item.title} problemID={item.id} />) :
              filter === 'UI/UX' ? data?.sort(compareString).filter(item => item.tag.includes('UI/UX')).map(item => <ChallengeItem key={item.id} title={item.title} problemID={item.id} />) :
              data?.filter(item => !item.tag.includes('UI/UX')).sort(compareString).map(item => <ChallengeItem key={item.id} title={item.title} problemID={item.id} />)
        }
      </div>
    </div>
  )
}

export default ChallengesList