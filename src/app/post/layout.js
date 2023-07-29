import { Footer, Header, Navbar } from '../components/LayoutComponent'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Berita | Soka Web',
  description: 'Website Resmi Dusun Soka, Seloharjo, Pundong, Bantul, DI Yogyakarta',
}

export default function BeritaLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}