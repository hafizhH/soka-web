'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export function Navbar() {
  const [isShowing, setIsShowing] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navbarVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY <= 85.0) {
        setIsShowing(false)
      } else if (window.scrollY > 85.0) {
        setIsShowing(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', navbarVisibility)
      return () => {
        window.removeEventListener('scroll', navbarVisibility)
      }
    }
  }, [lastScrollY])
  
  return (
    <>
      <div className='w-full h-[45px] bg-green-700'>
        <div className='ml-40 mr-auto w-fit flex flex-row space-x-6 text-sm'>
          <Link href='/' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Beranda</div></Link>
          <Link href='/profil' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Profil Dusun</div></Link>
          <Link href='/berita' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Berita</div></Link>
          <Link href='/ormas' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Organisasi Masyarakat</div></Link>
          <Link href='/potensi' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Potensi & UMKM</div></Link>
          {/* <Link href='/layanan' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Layanan Publik</div></Link> */}
          <Link href='/kontak' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Kontak</div></Link>
        </div>
      </div>
      <div className='fixed z-50 top-0 left-0 right-0 h-[55px] bg-green-700' style={{ display: (isShowing ? 'block': 'none') }}>
        <div className='ml-8 mr-auto w-fit flex flex-row space-x-6 text-sm'>
          <div className='mr-8 my-auto flex flex-row space-x-2'>
            <img src='#' className='w-8 h-8 bg-gray-200' />
            <div className='my-auto text-gray-50'>Soka</div>
          </div>
          <Link href='/' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Beranda</div></Link>
          <Link href='/profil' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Profil Dusun</div></Link>
          <Link href='/berita' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Berita</div></Link>
          <Link href='/ormas' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Organisasi Masyarakat</div></Link>
          <Link href='/potensi' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Potensi & UMKM</div></Link>
          {/* <Link href='/layanan' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Layanan Publik</div></Link> */}
          <Link href='/kontak' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Kontak</div></Link>
        </div>
      </div>
    </>
  )
}

export function Header() {
  return (
    <div className='w-full h-[12vh] flex flex-col'>
      <div className='w-full flex-1 px-8 py-auto flex flex-row bg-stone-200'>
        <div className='ml-32 my-auto'>
          <img src='#' className='h-16 w-16 bg-gray-400' />
        </div>
        <div className='my-auto ml-4 flex flex-col'>
          <div className='text-xl font-medium text-gray-800'>Dusun Soka</div>
          <div className='text-xs text-gray-600'>Kalurahan Seloharjo, Kapanewon Pundong</div>
          <div className='text-xs text-gray-600'>Kabupaten Bantul, DI Yogyakarta</div>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <div className='w-full px-16 py-8 relative z-50 flex flex-col space-y-8 bg-stone-700'>
      <div className='flex-1 mt-4 flex flex-row justify-around'>
        <div className='flex flex-col space-y-8'>
          <div className='flex flex-col space-y-4'>
            <div className='flex flex-row space-x-4'>
              <img src='#' className='h-12 w-12 bg-gray-400' />
              <div className='my-auto text-gray-100'>Dusun Soka</div>
            </div>
            <div className='flex flex-col space-y-1 text-gray-300 text-sm font-light'>
              <div className=''>Kalurahan Seloharjo, Kapanewon Pundong</div>
              <div className=''>Kabupaten Bantul, DI Yogyakarta</div>
              <div className=''>55771</div>
            </div>
          </div>
          <div className='mt-8 flex flex-col space-y-2'>
            <div className='text-xs text-gray-300'>Didukung oleh :</div>
            <div className='flex flex-row space-x-2'>
              <img src='/kknugm.png' className='h-12 w-12' />
              <img src='/kknpundong.png' className='h-12 w-12' />
            </div>
            <div className='my-auto text-xs font-light text-gray-300'>KKN-PPM UGM Pundong 2023</div>
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <div className='text-sm text-gray-100 tracking-wider'>NAVIGASI</div>
          <div className='flex flex-col space-y-2 text-sm text-gray-300 font-light'>
            <Link href='/'><div>Beranda</div></Link>
            <Link href='/profil'><div>Profil Dusun</div></Link>
            <Link href='/berita'><div>Berita</div></Link>
            <Link href='/ormas'><div>Organisasi Masyarakat</div></Link>
            <Link href='#'><div>Potensi & UMKM</div></Link>
            {/* <Link href='#'><div>Layanan Publik</div></Link> */}
            <Link href='#'><div>Kontak</div></Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='mx-auto text-gray-300 text-sm font-light'>KKN-PPM UGM Pundong &copy; 2023</div>
      </div>
    </div>
  )
}