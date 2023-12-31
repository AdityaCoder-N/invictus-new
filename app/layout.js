import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const grotesk = localFont({
  src: [
    {
      path: '../public/fonts/cabinet-grotesk/CabinetGrotesk-Thin.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/cabinet-grotesk/CabinetGrotesk-Regular.otf',
      weight: '500'
    },
    {
      path: '../public/fonts/cabinet-grotesk/CabinetGrotesk-Medium.otf',
      weight: '600'
    },
    {
      path: '../public/fonts/cabinet-grotesk/CabinetGrotesk-Bold.otf',
      weight: '700'
    },
    {
      path: '../public/fonts/cabinet-grotesk/CabinetGrotesk-Extrabold.otf',
      weight: '800'
    },
    
  ],
  variable: '--font-grotesk'
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable}`} >
      <body className='w-full flex flex-col justify-center items-center ' >{children}</body>
    </html>
  )
}
