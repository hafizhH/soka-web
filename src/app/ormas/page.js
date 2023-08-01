import Client from './client'

export default async function Page() {
  const res = await fetch(process.env.NEXT_URI + '/api/fetch/' + process.env.ORMAS_ENTRY_ID, { method: 'GET', next: { revalidate: process.env.REVALIDATE_SECS }})
  const data = await res.json()

  return (
    <Client data={data} />
  )
}