'use client'

import { useParams } from "next/navigation"
import { Subpage, SubpageCarousel } from "../components/PageComponent"
import { useEffect, useState } from "react"

export default function Potensi() {
  const [data, setData] = useState(null)
  const params = useParams()

  useEffect(() => {
    fetch('/api/fetch/' + process.env.POTENSI_ENTRY_ID, { method: 'GET', next: { revalidate: process.env.REVALIDATE_SECS } }).then(async (res) => {
      const pageData = await res.json()
      setData(pageData)
    })
  }, [])

  return (
    <div className='w-full flex flex-col'>
      {
        (data && data.fields.items.length > 0) ? data.fields.items.map((item, index) => {
          if (item.sys.contentType.sys.id == 'subpage')
            return <Subpage title={item.fields.title} content={item.fields.content} imageUrl={item.fields.coverImage?.fields.file.url} dark={(index % 2 != 0)} />
          else if (item.sys.contentType.sys.id == 'carousel')
            return <SubpageCarousel title={item.fields.title} items={item.fields.items} dark={(index % 2 != 0)} />
        }) : ''
      }
    </div>
  )
}
