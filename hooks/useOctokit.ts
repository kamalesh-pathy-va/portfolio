import { useState, useEffect } from 'react';
import { octokit } from '../utils/octokit';

export default function useOctokit(path: string) {
  const [code, setCode] = useState("");

  useEffect(() => {
    async function onLoad() {
      const data = await octokit.request(
        'GET /repos/{owner}/{repo}/contents/{path}', {
          owner: 'kamalesh-pathy-va',
          repo: 'coding-questions',
          path
      })
      const content = (data.data as { content?: string }).content;
      setCode(atob(content!))
    }
    onLoad()
  }, [path])

  return { code }
};