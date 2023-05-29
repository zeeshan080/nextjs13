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
      <body >{children}</body>
    </html>
  )
}
