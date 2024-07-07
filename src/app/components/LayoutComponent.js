'use client'

import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
faConfig.autoAddCss = false;

export function Navbar() {
  const [isShowing, setIsShowing] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
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
      <div className='block max-md:hidden'>
        <div className='w-full h-[45px] bg-green-700'>
          <div className='ml-40 max-lg:ml-28 mr-auto w-fit flex flex-row space-x-6 max-lg:space-x-3 text-sm'>
            <Link href='/' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Beranda</div></Link>
            <Link href='/profil' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Profil Dusun</div></Link>
            <Link href='/artikel' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Artikel</div></Link>
            <Link href='/ormas' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Organisasi Masyarakat</div></Link>
            <Link href='/potensi' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Potensi & UMKM</div></Link>
            <Link href='/kontak' className='py-3 px-2'><div className='text-gray-50 tracking-wide'>Kontak</div></Link>
          </div>
        </div>
        <div className='fixed z-50 top-0 left-0 right-0 h-[55px] bg-green-700' style={{ display: (isShowing ? 'block': 'none') }}>
          <div className='ml-8 max-lg:ml-4 mr-auto w-fit flex flex-row space-x-6 max-lg:space-x-3 text-sm'>
            <Link href='/' className='mr-8 max-lg:mr-2 my-auto flex flex-row space-x-2'>
              <img src='/logo.png' className='w-8 h-8' alt='logo' />
              <div className='my-auto text-gray-50'>Soka</div>
            </Link>
            <Link href='/' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Beranda</div></Link>
            <Link href='/profil' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Profil Dusun</div></Link>
            <Link href='/artikel' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Artikel</div></Link>
            <Link href='/ormas' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Organisasi Masyarakat</div></Link>
            <Link href='/potensi' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Potensi & UMKM</div></Link>
            <Link href='/kontak' className='py-4 px-2'><div className='text-gray-50 tracking-wide'>Kontak</div></Link>
          </div>
        </div>
      </div>
      <div className='hidden max-md:block'>
        <div className='w-full h-[50px] px-2 bg-green-700 flex flex-row justify-end'>
          <button onClick={() => setIsOpen(true)} className='my-auto px-3 py-2 text-xl text-gray-200'><FontAwesomeIcon icon={faBars} /></button>
        </div>
        <div className='fixed z-50 top-0 left-0 right-0 h-[55px] bg-green-700' style={{ display: (isShowing ? 'block': 'none') }}>
          <div className='w-full h-full px-2 flex flex-row justify-between'>
            <Link href='/' className='ml-2 my-auto flex flex-row space-x-2'>
              <img src='/logo.png' className='w-8 h-8' alt='logo' />
              <div className='my-auto text-gray-50'>Soka</div>
            </Link>
            <button onClick={() => setIsOpen(true)} className='my-auto px-3 py-2 text-xl text-gray-200'><FontAwesomeIcon icon={faBars} /></button>
          </div>
        </div>
        <div className='fixed z-50 top-0 bottom-0 right-0 left-0' style={{ display: (isOpen ? 'block': 'none') }}>        
          <div className='w-full h-full flex flex-row'>
            <div onClick={() => setIsOpen(false)} className='w-[20%] bg-transparent'></div>
            <div className='w-[80%] flex flex-col space-y-4 bg-stone-700'>
              {/* <div className='text-sm text-gray-100 tracking-wider'>NAVIGASI</div> */}
              <div className='w-full h-[50px] flex flex-row'>
                <button onClick={() => setIsOpen(false)} className='my-auto px-4 py-2 text-gray-200'><FontAwesomeIcon icon={faChevronLeft} /></button>
              </div>
              <div className='px-6 flex flex-col space-y-6 text-gray-300'>
                <Link onClick={() => setIsOpen(false)} href='/'><div>Beranda</div></Link>
                <Link onClick={() => setIsOpen(false)} href='/profil'><div>Profil Dusun</div></Link>
                <Link onClick={() => setIsOpen(false)} href='/artikel'><div>Artikel</div></Link>
                <Link onClick={() => setIsOpen(false)} href='/ormas'><div>Organisasi Masyarakat</div></Link>
                <Link onClick={() => setIsOpen(false)} href='/potensi'><div>Potensi & UMKM</div></Link>
                <Link onClick={() => setIsOpen(false)} href='/kontak'><div>Kontak</div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function Header() {
  return (
    <div className='w-full h-[12vh] max-lg:h-[8vh] max-md:h-[10vh] flex flex-col'>
      <Link href='/' className='w-full flex-1 px-8 py-auto flex flex-row bg-stone-100'>
        <div className='ml-32 max-lg:ml-20 max-md:ml-0 my-auto'>
          <img src='/logo.png' className='h-16 w-16 max-md:h-12 max-md:w-12' alt='logo' />
        </div>
        <div className='my-auto ml-4 flex flex-col'>
          <div className='text-xl max-md:text-base font-semibold text-gray-600'>Dusun Soka</div>
          <div className='text-xs text-gray-600'>Kalurahan Seloharjo, Kapanewon Pundong</div>
          <div className='text-xs text-gray-600'>Kabupaten Bantul, DI Yogyakarta</div>
        </div>
      </Link>
    </div>
  )
}

export function Footer() {
  return (
    <>
      <div className='block max-md:hidden w-full px-16 py-8 relative z-50 flex flex-col space-y-8 bg-stone-800'>
        <div className='flex-1 mt-4 flex flex-row justify-around'>
          <div className='flex flex-col space-y-8'>
            <div className='flex flex-col space-y-4'>
              <Link href='/' className='flex flex-row space-x-4'>
                <img src='/logo.png' className='h-12 w-12' alt='logo' />
                <div className='my-auto text-gray-100'>Dusun Soka</div>
              </Link>
              <div className='flex flex-col space-y-1 text-gray-300 text-sm font-light'>
                <div className=''>Kalurahan Seloharjo, Kapanewon Pundong</div>
                <div className=''>Kabupaten Bantul, DI Yogyakarta</div>
                <div className=''>55771</div>
              </div>
            </div>
            <div className='mt-8 flex flex-col space-y-2'>
              <div className='text-xs text-gray-300'>Didukung oleh :</div>
              <div className='flex flex-row space-x-2'>
                <img src='/kknugm.png' className='h-12 w-12' alt='logo-kknugm' />
                <img src='/kknpundong.png' className='h-12 w-12' alt='logo-kknpundong' />
              </div>
              <div className='my-auto text-xs font-light text-gray-300'>KKN-PPM UGM Pundong 2023</div>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='text-sm text-gray-100 tracking-wider'>NAVIGASI</div>
            <div className='flex flex-col space-y-2 text-sm text-gray-300 font-light'>
              <Link className="hover:underline" href='/'><div>Beranda</div></Link>
              <Link className="hover:underline" href='/profil'><div>Profil Dusun</div></Link>
              <Link className="hover:underline" href='/artikel'><div>Artikel</div></Link>
              <Link className="hover:underline" href='/ormas'><div>Organisasi Masyarakat</div></Link>
              <Link className="hover:underline" href='/potensi'><div>Potensi & UMKM</div></Link>
              <Link className="hover:underline" href='/kontak'><div>Kontak</div></Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='mx-auto text-gray-300 text-sm font-light'>KKN-PPM UGM Pundong &copy; 2023</div>
        </div>
      </div>
      <div className='hidden max-md:block w-full px-8 py-8 relative z-50 flex flex-col space-y-8 bg-stone-700'>
        <div className='flex flex-col space-y-12'>
          <div className='flex flex-col space-y-4'>
            <Link href='/' className='flex flex-row space-x-4'>
              <img src='/logo.png' className='h-12 w-12' alt='logo' />
              <div className='my-auto text-gray-100'>Dusun Soka</div>
            </Link>
            <div className='flex flex-col space-y-1 text-gray-300 text-sm font-light'>
              <div className=''>Kalurahan Seloharjo, Kapanewon Pundong</div>
              <div className=''>Kabupaten Bantul, DI Yogyakarta</div>
              <div className=''>55771</div>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='text-gray-100 tracking-wider'>NAVIGASI</div>
            <div className='flex flex-col space-y-2 text-sm text-gray-300 font-light'>
              <Link className="hover:underline" href='/'><div>Beranda</div></Link>
              <Link className="hover:underline" href='/profil'><div>Profil Dusun</div></Link>
              <Link className="hover:underline" href='/artikel'><div>Artikel</div></Link>
              <Link className="hover:underline" href='/ormas'><div>Organisasi Masyarakat</div></Link>
              <Link className="hover:underline" href='/potensi'><div>Potensi & UMKM</div></Link>
              <Link className="hover:underline" href='/kontak'><div>Kontak</div></Link>
            </div>
          </div>
          <div className='mt-8 mx-auto flex flex-col space-y-2'>
            <div className='mx-auto text-xs text-gray-300'>Didukung oleh :</div>
            <div className='mx-auto flex flex-row space-x-2'>
              <img src='/kknugm.png' className='h-12 w-12' alt='logo-kknugm'/>
              <img src='/kknpundong.png' className='h-12 w-12' alt='logo-kknpundong' />
            </div>
            <div className='my-auto mx-auto text-xs font-light text-gray-300'>KKN-PPM UGM Pundong 2023</div>
          </div>
          <div className='flex flex-col'>
            <div className='mx-auto text-gray-300 text-sm font-light'>&copy; KKN-PPM UGM Pundong 2023</div>
          </div>
        </div>
      </div>
    </>
  )
}