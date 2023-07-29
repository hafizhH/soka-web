'use client'

import { useEffect, useState } from "react";
import { Subpage, SubpageCarousel } from "./components/PageComponent";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Root() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/fetch/' + process.env.BERANDA_ENTRY_ID, { method: 'GET', next: { revalidate: process.env.REVALIDATE_SECS } }).then(async (res) => {
      const pageData = await res.json()
      setData(pageData)
    })
  }, [])

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full h-[85vh] bg-stone-400' style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.15), rgba(0,0,0,0.05), rgba(0,0,0,0)), url(bg.jpg)', backgroundSize: '175%', backgroundPositionY: '45%' }}>
        <div className='pl-32 pr-16 pt-24 w-[45%] h-full' style={{ backdropFilter: 'blur(2px)' }}>
          <div className='h-fit flex flex-col'>
            <div className='w-full text-[64px] font-semibold text-gray-100 text-wrap leading-tight'>Sugeng Rawuh Wonten Soka</div>
            <div className='mt-4 ml-1 w-full text-lg text-gray-100 leading-snug'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed aliquet urna. Curabitur sed aliquam arcu, vitae posuere mauris. Donec erat mi, aliquam.</div>
            <div className='mt-8 flex flex-row'>
              <Link href='/profil' className='px-6 py-4 border-2 border-transparent rounded-full bg-green-700 text-gray-100 font-semibold'>Tentang Soka&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link>
              <a href='https://goo.gl/maps/dAFrcQQ1JkSRXt2F8' className='ml-6 px-6 py-4 rounded-full bg-[#66666699] border-2 border-gray-100 text-gray-100 font-semibold cursor-pointer'>Kunjungi Soka&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faMapLocationDot} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[100vh] px-24 py-16 bg-gray-100'>
        <div className='text-3xl text-gray-600 font-semibold'>Berita Pilihan</div>
        <div className='mt-8 flex flex-row space-x-12'>
          { 
            (data) ? data.fields.items[1].fields.items.slice(0, 4).map((post, index) => {
              return (
                <a href={'/post/' + post.sys.id} key={index} className='cursor-pointer'>
                  <div key={index} className='w-[20vw] flex flex-col bg-gray-100 shadow-xl shadow-gray-300 overflow-clip'>
                    <img src={ post.fields.coverImage?.fields?.file?.url ?? '#'} className='w-full aspect-[4/3] object-cover bg-stone-300' />
                    <div className='h-64 mb-2 px-6 py-4 flex flex-col space-y-2'>
                      <div className='font-semibold text-gray-600 leading-snug text-ellipsis'>{ post.fields.title.slice(0, 50) }</div>
                      <div className='text-sm text-gray-500 tracking-wide'>{ new Date(post.sys.createdAt).toLocaleDateString('id-ID') }</div>
                      <div className='flex-1 text-sm text-gray-600 leading-snug text-ellipsis'>{ post.fields.summary.slice(0, 200) }</div>
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
  )
}
