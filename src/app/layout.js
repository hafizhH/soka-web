import { Navbar, Footer, Header } from './components/LayoutComponent'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beranda | Website Resmi Dusun Soka',
  description: 'Website Resmi Dusun Soka, Seloharjo, Pundong, Bantul, DI Yogyakarta',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="4m8aHrkySp8kWStPO6LnAARIVAjbjTtYc1Yh-YePPbw" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} min-h-screen w-full overflow-x-hidden`}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
