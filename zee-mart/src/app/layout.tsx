import Footer from './components/ui/footer'
import MainNavbar from './components/ui/main-navbar'
import './globals.css'

export const metadata = {
  title: 'ZeeMart',
  description: 'a brand new ecommerce website for clothes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-200' >
        <MainNavbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
