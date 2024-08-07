'use client'

import { useEffect, useState } from "react";
import { Subpage, SubpageCarousel } from "./components/PageComponent";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
faConfig.autoAddCss = false;

export default function Root({ data }) {

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full h-[85vh] max-lg:h-[50vh] bg-stone-400' style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.15), rgba(0,0,0,0.05), rgba(0,0,0,0)), url(bg.jpg)', backgroundSize: '175%', backgroundPositionY: '45%' }}>
        <div className='w-[50%] max-lg:w-[60%] max-md:w-full h-full pl-32 pr-16 max-lg:pl-16 max-md:px-6 max-lg:pr-4 max-md:pt-12 flex flex-col justify-center' style={{ backdropFilter: 'blur(2px)' }}>
          <div className='h-fit flex flex-col'>
            <h1 className='w-full text-[64px] max-lg:text-[48px] max-md:text-[40px] font-semibold text-gray-100 text-wrap leading-tight'>{ (data) ? data.fields.items[0].fields.title : '' }</h1>
            <div className='mt-4 ml-1 w-full text-base max-md:text-sm text-gray-100 leading-snug'>{ (data) ? data.fields.items[0].fields.content : '' }</div>
            <div className='mt-8 flex flex-row space-x-6 max-lg:space-x-4 max-md:w-full max-md:justify-around'>
              <Link href='/profil' className='w-fit h-fit px-6 max-md:px-4 py-4 max-md:py-3 border-2 border-transparent rounded-full bg-green-700 text-gray-100 font-semibold max-md:font-medium max-md:text-sm whitespace-nowrap'>Tentang Soka&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link>
              <a target='_blank' href='https://goo.gl/maps/dAFrcQQ1JkSRXt2F8' rel='noreferrer noopener' className='w-fit h-fit px-6 max-md:px-4 py-4 max-md:py-3 rounded-full border-2 border-stone-300 bg-stone-700 text-gray-100 font-semibold max-md:font-medium max-md:text-sm cursor-pointer whitespace-nowrap'>Kunjungi Soka&nbsp;&nbsp;<FontAwesomeIcon icon={faMapLocationDot} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full min-h-[100vh] max-lg:min-h-[60vh] max-md:min-h-[80vh] px-24 max-lg:px-16 max-md:px-8 py-16 max-lg:py-8 bg-stone-100'>
        <div className='text-4xl max-md:text-2xl text-gray-600 font-semibold'>Artikel Pilihan</div>
        <div className='mt-8 w-full overflow-x-auto'>
          <div className='w-fit px-2 pt-2 pb-6 flex flex-row space-x-12'>
          { 
            (data) ? data.fields.items[1].fields.items.map((post, index) => {
              return (
                <a href={'/post/' + post.fields.slug} key={index} className='cursor-pointer'>
                  <div key={index} className='w-[20vw] max-lg:w-[40vw] max-md:w-[80vw] flex flex-col bg-stone-100 shadow-xl shadow-gray-300 overflow-clip'>
                    <img src={ post.fields.coverImage?.fields?.file?.url ?? '#'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734' }} alt='cover-image' className='w-full aspect-[4/3] object-cover bg-stone-300' />
                    <div className='h-64 max-lg:h-fit mb-2 px-6 py-4 flex flex-col space-y-2'>
                      <div className='font-semibold text-gray-600 leading-snug text-ellipsis'>{ post.fields.title.slice(0, 50) }</div>
                      <div className='text-sm text-gray-500 tracking-wide'>{ new Date(post.sys.createdAt).toLocaleDateString('id-ID') }</div>
                      <div className='max-lg:hidden flex-1 text-sm text-gray-600 leading-snug text-ellipsis'>{ (post.fields.summary.length > 100) ? post.fields.summary.slice(0, 100) + '...' : post.fields.summary }</div>
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
    </div>
  )
}