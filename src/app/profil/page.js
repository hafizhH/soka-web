import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown'
import Client from './client'

export default async function Page() {
  const res = await fetch(process.env.NEXT_URI + '/api/fetch/' + process.env.PROFIL_ENTRY_ID, { method: 'GET', next: { revalidate: process.env.REVALIDATE_SECS }})
  const data = await res.json()
  data.fields.items.forEach(async (item, index) => {
    if (item.sys.contentType.sys.id == 'subpage')
      data.fields.items[index].fields.content = await richTextFromMarkdown(item.fields.content)
  })
  // console.log(data.fields.items[1].fields.content)

  return (
    <Client data={data} />
  )
}