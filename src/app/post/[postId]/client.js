'use client'

import { useEffect, useState } from "react"
import renderOptions from "@/app/lib/renderOptions"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function Post({ post, recommendations }) {

  return (
    <div className='w-full px-[10%] max-md:px-8 pt-8 pb-16 flex flex-row max-lg:flex-col space-x-16 max-lg:space-x-0 max-lg:space-y-12 bg-gray-200'>
      <div className='w-[65%] max-lg:w-full flex flex-col space-y-12 max-md:space-y-8'>
        <div className='flex flex-col'>
          <div className='text-4xl max-lg:text-3xl max-md:text-2xl font-semibold text-gray-600 leading-snug'>{ (post) ? post.fields.title : '' }</div>
          <div className='mt-4 text-gray-500 text-sm'>{ (post) ? new Date(post.sys.createdAt).toLocaleDateString('id-ID') : '' }</div>
          <div className='mt-6 max-md:mt-4 flex flex-row space-x-3'>
            <img src={(post) ? post.fields.author.fields.profilePicture?.fields?.file?.url ?? '/blankprofile.png' : '/blankprofile.png'} alt='profile' className='w-12 h-12 rounded-full bg-gray-300 border border-gray-400' />
            <div className='my-auto text-gray-500 max-md:text-sm'>{ (post) ? post.fields.author.fields.name : '' }</div>
          </div>
          <img src={(post) ? post.fields.coverImage.fields.file.url : '#'} alt={(post) ? post.fields.coverImage.fields.title : 'Cover Image'} className='mt-6 w-full aspect-[5/3] object-cover bg-gray-400' />
        </div>
        <div className='leading-relaxed space-y-4 text-gray-600 text-justify'>
          {
            (post) ? documentToReactComponents(post.fields.content, renderOptions) : ''
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
      <div className='mt-8 max-md:mt-4 w-[30%] max-lg:w-full flex flex-col space-y-6'>
        <div className='text-2xl text-gray-600 font-semibold'>Artikel Lainnya</div>
        <div className='w-full flex flex-col space-y-4'>
          {
            (recommendations) ? recommendations.map((item, index) => {
              return (
                <a href={'/post/' + item.sys.id} key={index} className='cursor-pointer'>
                  <div key={index} className='py-2 flex flex-row space-x-4'>
                    <div className='my-auto flex-1 flex flex-col'>
                      <div className='text-sm text-gray-700 font-medium'>{ item.fields.title }</div>
                      <div className='mt-3 text-gray-500 text-xs'>{ new Date(item.sys.createdAt).toLocaleDateString('id-ID') }</div>
                    </div>
                    <img src={item.fields.coverImage.fields.file.url || '#'} alt={item.fields.coverImage.fields.title || 'Cover Image'} className='w-32 aspect-[4/3] object-cover bg-gray-300' />
                  </div>
                </a>
              )
            }) : ''
          }
        </div>
      </div>
    </div>
  )
}