import { Navbar, Footer, Header } from './components/LayoutComponent'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beranda | Soka Web',
  description: 'Website Resmi Dusun Soka, Seloharjo, Pundong, Bantul, DI Yogyakarta',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full overflow-x-hidden`}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
