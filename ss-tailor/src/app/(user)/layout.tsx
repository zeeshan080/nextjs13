import { barlow } from '../assets/font/font'
import Footer from './components/footer'
import Navbar from './components/navbar'
import '@/app/globals.css'

export const metadata = {
  title: 'SS Tailor',
  description: 'A web application for a tailor shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.className} bg-gray-100`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
