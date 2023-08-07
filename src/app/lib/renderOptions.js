import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import Link from 'next/link'

export default {
  renderMark: {
    [MARKS.BOLD]: (text) => <span className='bold'>{text}</span>,
    [MARKS.ITALIC]: (text) => <span className='italic'>{text}</span>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className='list-disc'>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className='list-decimal'>{children}</ol>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => <img className='' alt='post-image' />,
    [INLINES.HYPERLINK]: (node, children) => <Link href={node.data.uri} className='text-green-500'>{children}</Link>
    // [BLOCKS.LIST_ITEM]: (node, children) => <li className='flex flex-row'>{children}</li>
  },
}