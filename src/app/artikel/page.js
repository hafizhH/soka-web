import Client from './client'

export default async function Page() {
  const res = await fetch(process.env.NEXT_URI + '/api/fetch/posts', { method: 'GET', next: { revalidate: process.env.REVALIDATE_SECS }})
  const { posts, highlight } = await res.json()

  return (
    <Client posts={posts} highlight={highlight} />
  )
}