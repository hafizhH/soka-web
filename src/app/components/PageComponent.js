import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRef } from "react"


export function Subpage({ id, title, subtitle, content, dark, contentRight, postUrl, imageUrl }) {
  return (
    <div className={`w-full h-[100vh] px-24 py-16 flex flex-col ${ dark ? 'bg-stone-600' : 'bg-stone-200' }`}>
      <div className={`${(dark) ? 'text-gray-200' : 'text-gray-600'} text-[40px] font-medium`}>{ title ?? '' }</div>
      <div className={`my-auto flex ${ contentRight ? 'flex-row-reverse' : 'flex-row' } justify-between`}>
        <div className='w-[45%] flex flex-col space-y-8'>
          { subtitle ? <div className={`${(dark) ? 'text-gray-300' : 'text-gray-600'} text-[3rem] font-medium`}>{ subtitle }</div> : '' }
          <div className={`mt-8 ${(dark) ? 'text-gray-300' : 'text-gray-600'}`}>{ content ?? '' }</div>
          { (postUrl) ? <Link href={postUrl} className='px-8 py-3 w-fit bg-green-600 rounded-full text-gray-100 font-medium'>Selengkapnya</Link> : '' }
        </div>
        {
          (imageUrl) ? <img src={imageUrl} className={`w-[45%] object-contain aspect-[4/3] rounded-lg`} /> : ''
        }
      </div>
    </div>
  )
}

export function SubpageCarousel({ id, title, items, dark }) {
  const containerRef = useRef(null)

  const slideClicked = (isLeft) => {
    if (!containerRef)
      return
    if (isLeft)
      containerRef.current.scrollLeft -= containerRef.current.childNodes[0].offsetWidth / containerRef.current.childNodes[0].childNodes.length
    else 
      containerRef.current.scrollLeft += containerRef.current.childNodes[0].offsetWidth / containerRef.current.childNodes[0].childNodes.length
  }

  return (
    <div className={`w-full h-[100vh] px-8 py-16 ${ dark ? 'bg-stone-600' : 'bg-stone-200' }`}>
      <div className={`${(dark) ? 'text-gray-200' : 'text-gray-600'} px-16 text-[40px] font-medium`}>{ title }</div>
      <div className='flex flex-row space-x-4'>
        { (items) ? <div onClick={() => slideClicked(true)} className='my-auto py-4 aspect-[1/1] w-16 bg-stone-300 text-gray-500 rounded-full text-center cursor-pointer select-none'><FontAwesomeIcon icon={faChevronLeft} /></div> : '' }
        <div ref={containerRef} className='mt-8 w-full overflow-hidden'>
          <div className='w-fit flex flex-row space-x-16'>
            {
              (items) ? items.map((item, index2) => {
                return (
                  <div className={`${ dark ? 'bg-stone-100 shadow-gray-700' : 'bg-stone-100 shadow-gray-300 border-2 border-gray-300' } w-[85vw] py-8 px-16 flex flex-row space-x-16 rounded-2xl shadow-xl`}>
                    <img src={ item.fields.coverImage?.fields.file.url ?? '#' } className={` w-[45%] object-contain aspect-[4/3] rounded-lg`} />
                    <div className={`${ dark ? 'text-gray-600' : 'text-gray-600' } flex-1 my-8 flex flex-col space-y-8`}>
                      <div className='font-medium text-3xl'>{ item.fields.title }</div>
                      <div className='mt-4'>{ item.fields.summary || item.fields.content }</div>
                      { (item.sys.contentType.sys.id == 'post') ? <Link href={ '/post/' + item.sys.id } className='px-8 py-3 w-fit bg-green-600 rounded-full text-gray-100 font-medium'>Selengkapnya</Link> : '' }
                    </div>
                  </div>
                ) 
              }) : ''
            }
          </div>
        </div>
        { (items) ? <div onClick={() => slideClicked(false)} className='my-auto py-4 aspect-[1/1] w-16 bg-stone-300 text-gray-500 rounded-full text-center cursor-pointer select-none'><FontAwesomeIcon icon={faChevronRight} /></div> : '' }
      </div>
    </div>
  )
}