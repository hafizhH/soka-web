'use client'

import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown"
import { Subpage, SubpageCarousel } from "../components/PageComponent"
import { useEffect, useState } from "react"

export default function Profil({ data }) {

  return (
    <div className='w-full flex flex-col'>
      {
        (data && data.fields.items.length > 0) ? data.fields.items.map((item, index) => {
          // const content = await richTextFromMarkdown(item.fields.content)

          if (item.sys.contentType.sys.id == 'subpage')
            return <Subpage title={item.fields.title} content={item.fields.content} imageUrl={item.fields.coverImage?.fields.file.url} dark={(index % 2 != 0)} />
          else if (item.sys.contentType.sys.id == 'carousel')
            return <SubpageCarousel title={item.fields.title} items={item.fields.items} dark={(index % 2 != 0)} />
        }) : ''
      }
    </div>
  )
}
