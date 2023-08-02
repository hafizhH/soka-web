'use client'

import { useEffect, useState } from "react"

export default function Berita({ posts, highlight }) {
  const [page, setPage] = useState(0)
  const [maxPost, setMaxPost] = useState(10)

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full pt-8 max-lg:pt-4 bg-stone-200'>
        <div className='w-full min-h-[100vh] max-lg:min-h-[50vh] max-md:min-h-[65vh] px-24 max-lg:px-16 max-md:px-8 py-16 max-lg:py-4'>
          <div className='text-4xl max-md:text-2xl text-gray-600 font-semibold'>Artikel Terkini</div>
          <div className='mt-8 w-full overflow-x-auto'>
            <div className='w-fit px-2 pt-2 pb-6 flex flex-row space-x-12'>
            { 
              (posts) ? posts.slice(0, 4).map((post, index) => {
                return (
                  <a href={'/post/' + post.sys.id} key={index} className='cursor-pointer'>
                    <div key={index} className='w-[20vw] max-lg:w-[40vw] max-md:w-[80vw] flex flex-col bg-gray-100 shadow-xl shadow-gray-300 overflow-clip'>
                      <img src={ post.fields.coverImage?.fields?.file?.url ?? '#'} className='w-full aspect-[4/3] object-cover bg-stone-300' />
                      <div className='h-64 max-lg:h-fit mb-2 px-6 py-4 flex flex-col space-y-2'>
                        <div className='font-semibold text-gray-600 leading-snug text-ellipsis'>{ post.fields.title.slice(0, 50) }</div>
                        <div className='text-sm text-gray-500 tracking-wide'>{ new Date(post.sys.createdAt).toLocaleDateString('id-ID') }</div>
                        <div className='max-lg:hidden flex-1 text-sm text-gray-600 leading-snug text-ellipsis'>{ post.fields.summary.slice(0, 200) }</div>
                        <div className='ml-auto text-green-600 text-sm font-medium'>Selengkapnya</div>
                      </div>
                    </div>
                  </a>
                )
              }) : ''
            }
            </div>
          </div>
        </div>
        <div className='mt-4 px-24 max-lg:px-16 max-md:px-8 pt-12 max-md:pt-8 pb-16 -z-50 w-full flex flex-col space-y-8 bg-gray-100 shadow-xl shadow-gray-400'>
          <div className='w-full flex flex-row max-lg:flex-col-reverse space-x-16 max-lg:space-x-0 max-lg:space-y-16 max-lg:space-y-reverse max-md:space-y-12 max-md:space-y-reverse'>
            <div className='flex-1 flex flex-col'>
              <div className='text-3xl max-md:text-xl text-gray-600 font-semibold'>Artikel Lainnya</div>
              <div className='mt-4 mx-auto w-full flex flex-col space-y-6'>
                {
                  (posts) ? posts.slice(4).slice(page*maxPost, (page+1)*maxPost).map((post, index) => {
                    return (
                      <a href={'/post/' + post.sys.id} key={index} className='cursor-pointer'> 
                        <div className='py-2 flex flex-row space-x-4'>
                          <div className='my-auto flex-1 flex flex-col'>
                            <div className='text-base text-gray-600 max-md:text-sm font-medium'>{ post.fields.title.slice(0, 50) }</div>
                            <div className='mt-3 text-gray-500 text-sm max-md:text-xs'>{ new Date(post.sys.createdAt).toLocaleDateString('id-ID') }</div>
                          </div>
                          <img src={ post.fields.coverImage?.fields?.file?.url ?? '#'} className='w-56 max-lg:w-48 max-md:w-32 aspect-[4/3] object-cover bg-stone-300' />
                        </div>
                      </a>
                    )
                  }) : ''
                }
              </div>
              <div className='pt-4 w-full'>
                { (posts) ? 
                  <div className='mx-auto w-fit flex flex-row divide-x divide-gray-400/[.5] border border-gray-300 rounded-md shadow-lg text-gray-500 font-medium'>
                    <div className={`${page == 0 ? 'hidden' : ''} px-4 py-2`}>{'<'}</div>
                    <div className={`${page <= 2 ? 'hidden' : ''} px-4 py-2`}>1</div>
                    <div className={`${page <= 3 ? 'hidden' : ''} px-4 py-2`}>...</div>
                    <div className={`${page <= 2 ? 'hidden' : ''} px-4 py-2`}>{ page-1 }</div>
                    <div className={`${page <= 1 ? 'hidden' : ''} px-4 py-2`}>{ page }</div>
                    <div className='px-4 py-2 bg-green-600 text-gray-50'>{ page+1 }</div>
                    <div className={`${Math.ceil((posts.length-4)/maxPost)-page <= 1 ? 'hidden' : ''} px-4 py-2`}>{ page+2 }</div>
                    <div className={`${Math.ceil((posts.length-4)/maxPost)-page <= 2 ? 'hidden' : ''} px-4 py-2`}>{ page+3 }</div>
                    <div className={`${Math.ceil((posts.length-4)/maxPost)-page <= 3 ? 'hidden' : ''} px-4 py-2`}>...</div>
                    <div className={`${Math.ceil((posts.length-4)/maxPost)-page <= 2 ? 'hidden' : ''} px-4 py-2`}>{ Math.ceil((posts.length-4)/maxPost)  }</div>
                    <div className={`${Math.ceil((posts.length-4)/maxPost)-(page+1) == 0 ? 'hidden' : ''} px-4 py-2`}>{'>'}</div>
                  </div> : ''
                }
              </div>
            </div>
            <div className='w-[25%] max-lg:w-full flex flex-col space-y-4'>
              <div className='text-2xl max-lg:text-3xl max-md:text-xl text-gray-600 font-semibold'>Artikel Pilihan</div>
              <div className='mx-auto w-full flex flex-col space-y-4'>
                { 
                  (highlight) ? highlight.map((post, index) => {
                    return (
                      <a href={'/post/' + post.sys.id} key={index} className='cursor-pointer'>
                        <div key={index} className='py-2 flex flex-row space-x-4'>
                          <div className='my-auto flex-1 flex flex-col'>
                            <div className='text-sm max-lg:text-base max-md:text-sm text-gray-600 font-medium'>{ post.fields.title.slice(0, 50) }</div>
                            <div className='mt-3 text-xs max-lg:text-sm max-md:text-xs text-gray-500'>{ new Date(post.sys.createdAt).toLocaleDateString('id-ID') }</div>
                          </div>
                          <img src={ post.fields.coverImage?.fields?.file?.url ?? '#'} className='w-32 max-lg:w-48 max-md:w-32 aspect-[4/3] object-cover bg-stone-300' />
                        </div>
                      </a>
                    )
                  }) : ''
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
