'use client'

import { useEffect, useState } from "react"
import renderOptions from "@/app/lib/renderOptions"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useParams } from 'next/navigation'

export default function Post({ post }) {
  // const params = useParams()

  // useEffect(() => {
  //   fetch('/api/fetch/' + params.postId, { method: 'GET', next: { revalidate: process.env.REVALIDATE_SECS } }).then(async (res) => {
  //     const postData = await res.json()
  //     setPost(postData)
  //   })
  // }, [])

  return (
    <div className='w-full px-[10%] pt-8 pb-16 flex flex-row max-lg:flex-col space-x-16 max-lg:space-x-0 max-lg:space-y-12 bg-gray-200'>
      <div className='w-[65%] max-lg:w-full flex flex-col space-y-12'>
        <div className='flex flex-col'>
          <div className='text-4xl max-lg:text-3xl max-md:text-2xl font-semibold text-gray-600 leading-snug'>{ (post) ? post.fields.title : '' }</div>
          <div className='mt-4 text-gray-500 text-sm'>{ (post) ? new Date(post.sys.createdAt).toLocaleDateString('id-ID') : '' }</div>
          <div className='mt-6 flex flex-row space-x-3'>
            <img src='#' className='w-10 h-10 rounded-full bg-gray-400' />
            <div className='my-auto text-gray-500'>{ (post) ? post.fields.author.fields.name : '' }</div>
          </div>
          <img src={(post) ? post.fields.coverImage.fields.file.url : '#'} alt={((post)) ? post.fields.coverImage.fields.title : 'Cover Image'} className='mt-6 w-full aspect-[5/3] object-cover bg-gray-400' />
        </div>
        <div className='leading-relaxed space-y-4'>
          {
            ((post)) ? documentToReactComponents(post.fields.content, renderOptions) : ''
          }
        </div>
        {/* <div className='mt-8'>
          <div className='text-gray-600 text-2xl font-semibold'>Komentar</div>
          <div className='mt-8 flex flex-col'>
            <div className='flex flex-col space-y-8 space-x-16'>
              <div className='flex flex-row space-x-4'>
                <div>
                  <img src='#' className='w-10 h-10 rounded-full bg-gray-400' />
                </div>
                <div className='w-fit flex flex-col'>
                  <div className='my-1 flex flex-row space-x-4'>
                    <div className='text-sm text-gray-500'>Anonim 1</div>
                    <div className='text-sm text-gray-400'>5h</div>
                  </div>
                  <div className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum, leo iaculis tincidunt lacinia, magna sem pulvinar est, id pretium magna lorem sit amet neque.</div>
                  <div className='mt-2 text-sm text-green-600'>Reply</div>
                </div>
              </div>
              <div className='flex flex-col space-y-4'>
                
              </div>
            </div>
            <div className='flex flex-col space-y-8 space-x-12'>
              <div className='flex flex-row space-x-4'>
                <div>
                  <img src='#' className='w-10 h-10 rounded-full bg-gray-400' />
                </div>
                <div className='w-fit flex flex-col'>
                  <div className='my-1 flex flex-row space-x-4'>
                    <div className='text-sm text-gray-500'>Anonim 1</div>
                    <div className='text-sm text-gray-400'>5h</div>
                  </div>
                  <div className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum, leo iaculis tincidunt lacinia, magna sem pulvinar est, id pretium magna lorem sit amet neque.</div>
                  <div className='mt-2 text-sm text-green-600'>Reply</div>
                </div>
              </div>
              <div className='flex flex-col space-y-8'>
                <div className='flex flex-row space-x-4'>
                  <div>
                    <img src='#' className='w-10 h-10 rounded-full bg-gray-400' />
                  </div>
                  <div className='w-fit flex flex-col'>
                    <div className='my-1 flex flex-row space-x-4'>
                      <div className='text-sm text-gray-500'>Anonim 2</div>
                      <div className='text-sm text-gray-400'>5h</div>
                    </div>
                    <div className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum, leo iaculis tincidunt lacinia, magna sem pulvinar est, id pretium magna lorem sit amet neque.</div>
                    <div className='mt-2 text-sm text-green-600'>Reply</div>
                  </div>
                </div>
                <div className='flex flex-row space-x-4'>
                  <div>
                    <img src='#' className='w-10 h-10 rounded-full bg-gray-400' />
                  </div>
                  <div className='w-fit flex flex-col'>
                    <div className='my-1 flex flex-row space-x-4'>
                      <div className='text-sm text-gray-500'>Anonim 2</div>
                      <div className='text-sm text-gray-400'>5h</div>
                    </div>
                    <div className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum, leo iaculis tincidunt lacinia, magna sem pulvinar est, id pretium magna lorem sit amet neque.</div>
                    <div className='mt-2 text-sm text-green-600'>Reply</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className='mt-8 w-[30%] max-lg:w-full flex flex-col space-y-6'>
        <div className='text-2xl text-gray-600 font-semibold'>Artikel Lainnya</div>
        <div className='w-full flex flex-col space-y-2'>
          <div className='py-2 flex flex-row space-x-4'>
            <div className='my-auto flex flex-col'>
              <div className='text-sm text-gray-700 font-medium'>Lorem Ipsum Dolor Sit Amet Consectetur</div>
              <div className='mt-3 text-gray-500 text-xs'>Kamis, 13/07/2023</div>
            </div>
            <img src='#' className='w-32 aspect-[4/3] bg-gray-300' />
          </div>
          <div className='py-2 flex flex-row space-x-4'>
            <div className='my-auto flex flex-col'>
              <div className='text-sm text-gray-700 font-medium'>Lorem Ipsum Dolor Sit Amet Consectetur</div>
              <div className='mt-3 text-gray-500 text-xs'>Kamis, 13/07/2023</div>
            </div>
            <img src='#' className='w-32 aspect-[4/3] bg-gray-300' />
          </div>
        </div>
      </div>
    </div>
  )
}