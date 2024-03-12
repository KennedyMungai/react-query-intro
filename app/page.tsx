'use client'
import { useQuery } from "@tanstack/react-query"

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
]

const wait = (duration: number) => {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default function Home() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...POSTS])
  })

  const { data, isLoading, isError, error } = postsQuery

  if (isLoading) {
    return <p className="bg-slate-200 min-w-screen animate-pulse text-red-600 font-bold text-6xl">Loading...</p>
  }

  if (isError) {
    return <pre className="bg-slate-200 min-w-screen animate-pulse text-red-600 font-bold text-6xl">{ JSON.stringify(error)}</pre>
  }

  return (
    <main></main>
  )
}
