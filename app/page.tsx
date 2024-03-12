const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
]

const wait = (duration: number) => {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default function Home() {
  return (
    <main></main>
  )
}
