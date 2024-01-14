"use client";

import { trpc } from "@/app/_trpc/client";
import useOctokit from "@/hooks/useOctokit";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Page = ({ params }: { params: { challengeID: string } }) => {
  const { data, isLoading } = trpc.challenges.getChallengeByID.useQuery({ challengeID: params.challengeID });
  const { code } = useOctokit(data?.file ? data.file : "README.md")

  let lang = "python"
  if (data?.tag.includes('Python')) 
    lang = 'python'
  else if (data?.tag.includes('C++'))
    lang = 'cpp'

  return (
    <div className='bg-neutral-900 min-h-[calc(100vh-101px)] p-4'>
      {isLoading ? <div className='flex justify-center items-center text-5xl mt-4 font-bold'><span className="animate-spin"><CgSpinner /></span></div> :
        <>
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{data?.title}</h1>
              <pre className="hidden md:block text-xs bg-neutral-700/50 text-neutral-400 px-1 italic">{data?.file}</pre>
            </div>
            {data?.problemURL &&
              <Link href={data?.problemURL ? `https://${data.problemURL}` : '#'} className="text-sm text-neutral-400 flex items-center gap-2 hover:text-green-500 transition-colors" target="_blank">
                <span className="truncate">Problem: {data.problemURL}</span>
                <BiLinkExternal />
              </Link>
            }
          </div>
          <SyntaxHighlighter language={lang} style={atomOneDarkReasonable} wrapLongLines showLineNumbers
            customStyle={{
              borderRadius: "0.4rem",
              fontSize: "clamp(0.8rem, 2vw, 1rem)",
          }}>
            {code ? code : "Loading from GitHub..."}
          </SyntaxHighlighter>
        </>
      }
    </div>
  )
}

export default Page