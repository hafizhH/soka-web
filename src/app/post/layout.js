import { Footer, Header, Navbar } from '../components/LayoutComponent'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Post | Website Resmi Dusun Soka',
  description: 'Website Resmi Dusun Soka, Seloharjo, Pundong, Bantul, DI Yogyakarta',
}

export default function PostLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}