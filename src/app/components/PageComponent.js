import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRef } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import renderOptions from "@/app/lib/renderOptions";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
faConfig.autoAddCss = false;

export function Subpage({ id, title, subtitle, content, dark, contentRight, postUrl, imageUrl }) {

  return (
    <div className={`w-full min-h-[100vh] portrait:max-lg:min-h-[50vh] portrait:max-md:min-h-[100vh] px-24 max-lg:px-16 max-md:px-8 py-16 max-lg:py-12 max-md:py-8 flex flex-col space-y-8 ${ dark ? 'bg-stone-600' : 'bg-stone-200' }`}>
      <div className={`${(dark) ? 'text-gray-200' : 'text-gray-600'} text-[40px] max-lg:text-3xl max-md:text-2xl font-medium`}>{ title ?? '' }</div>
      <div className={`my-auto flex ${ contentRight ? 'flex-row' : 'flex-row-reverse' } max-md:flex-col justify-between`}>
        {
          (imageUrl) ? <img src={imageUrl} alt='cover-image' className={`w-[45%] portrait:max-lg:w-[60%] portrait:max-md:w-full object-contain aspect-[4/3] rounded-lg overflow-hidden`} /> : ''
        }
        <div className='w-[45%] max-lg:w-[50%] max-md:w-full flex flex-col space-y-8'>
          { subtitle ? <div className={`${(dark) ? 'text-gray-300' : 'text-gray-600'} text-[3rem] font-medium`}>{ subtitle }</div> : '' }
          {/* <div className={`mt-8 ${(dark) ? 'text-gray-300' : 'text-gray-600'} max-lg:text-sm`}>{ content ?? '' }</div> */}
          <div className={`mt-8 ${(dark) ? 'text-gray-300' : 'text-gray-600'} max-lg:text-sm text-justify leading-relaxed space-y-4`}>
          {
            (content) ? documentToReactComponents(content, renderOptions) : ''
          }
          </div>
          { (postUrl) ? <Link href={postUrl} className='px-8 py-3 w-fit bg-green-600 rounded-full text-gray-100 font-medium'>Selengkapnya</Link> : '' }
        </div>
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
      containerRef.current.scrollLeft -= (containerRef.current.childNodes[0].offsetWidth / containerRef.current.childNodes[0].childNodes.length) - 0
    else 
      containerRef.current.scrollLeft += (containerRef.current.childNodes[0].offsetWidth / containerRef.current.childNodes[0].childNodes.length) - 0
  }

  return (
    <div className={`w-full min-h-[100vh] portrait:max-lg:min-h-[50vh] portrait:max-md:min-h-[100vh] px-8 max-md:px-4 py-16 max-lg:py-12 max-md:py-8 ${ dark ? 'bg-stone-600' : 'bg-stone-200' }`}>
      <div className={`${(dark) ? 'text-gray-200' : 'text-gray-600'} px-16 max-lg:px-8 text-[40px] max-lg:text-3xl max-md:text-2xl font-medium`}>{ title }</div>
      <div className='relative flex flex-row space-x-4'>
        { (items) ? <div onClick={() => slideClicked(true)} className='absolute top-[50%] left-4 my-auto py-4 max-md:py-3 aspect-[1/1] w-16 h-16 max-md:w-12 max-md:h-12 bg-stone-500 bg-opacity-50 text-white text-opacity-100 rounded-full text-center cursor-pointer select-none'><FontAwesomeIcon icon={faChevronLeft} /></div> : '' }
        <div ref={containerRef} className='mt-8 w-full overflow-hidden'>
          <div className='w-fit flex flex-row space-x-16 pr-16'>
            {
              (items) ? items.map((item, index2) => {
                return (
                  <div className={`${ dark ? 'bg-stone-100 shadow-gray-700' : 'bg-stone-100 shadow-gray-300 border-2 border-gray-300' } w-[85vw] py-8 px-16 max-lg:px-8 flex flex-row portrait:max-lg:flex-col space-x-16 portrait:max-lg:space-x-0 rounded-2xl shadow-xl`}>
                    <img src={ item.fields.coverImage?.fields?.file?.url ?? '#' } onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734' }} alt='cover-image' className={`w-[45%] py-4 portrait:max-lg:w-[60%] portrait:max-lg:mx-auto portrait:max-md:w-full object-contain aspect-[4/3] rounded-lg overflow-hidden`} />
                    <div className={`${ dark ? 'text-gray-600' : 'text-gray-600' } flex-1 mt-8 max-lg:mt-4 flex flex-col space-y-8 max-lg:space-y-4`}>
                      <div className='text-gray-600 font-semibold text-3xl max-lg:text-2xl max-md:text-lg'>{ item.fields.title }</div>
                      <div className='mt-4 max-lg:text-sm text-justify'>{ item.fields.summary || item.fields.content }</div>
                      { (item.sys.contentType.sys.id == 'post') ? <Link href={ '/post/' + item.sys.id } className='ml-auto px-8 py-3 w-fit bg-green-600 rounded-full text-gray-100 font-medium'>Selengkapnya</Link> : '' }
                    </div>
                  </div>
                ) 
              }) : ''
            }
          </div>
        </div>
        { (items) ? <div onClick={() => slideClicked(false)} className='absolute top-[50%] right-4 my-auto py-4 max-md:py-3 aspect-[1/1] w-16 h-16 max-md:w-12 max-md:h-12 bg-stone-500 bg-opacity-50 text-white text-opacity-100 rounded-full text-center cursor-pointer select-none'><FontAwesomeIcon icon={faChevronRight} /></div> : '' }
      </div>
    </div>
  )
}