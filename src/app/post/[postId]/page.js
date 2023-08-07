import Client from './client'

export default async function Page({ params }) {
  const res = await fetch(process.env.NEXT_URI + '/api/fetch/posts/' + params.postId, { method: 'GET', next: { revalidate: process.env.REVALIDATE_SECS }})
  const { post, recommendations } = await res.json()

  return (
    <Client post={post} recommendations={recommendations} />
  )
}