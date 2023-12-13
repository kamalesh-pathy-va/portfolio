"use client";

import { trpc } from "@/app/_trpc/client";
import useOctokit from "@/hooks/useOctokit";

const Page = ({ params }: { params: { challengeID: string } }) => {
  const { data, isLoading } = trpc.challenges.getChallengeByID.useQuery({ challengeID: params.challengeID });
  const { code } = useOctokit(data?.file ? data.file : "README.md")

  return (
    <div className='bg-neutral-800 min-h-[calc(100vh-101px)]'>
      {isLoading ? "loading..." :
        <>
          <div>{data?.file}</div>
          <pre><code>{code? code : "Loading..."}</code></pre>
        </>
      }
    </div>
  )
}

export default Page