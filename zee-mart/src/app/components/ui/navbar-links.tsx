import Link from 'next/link'
import React from 'react'

type Props = {
    href: string,
    title: string
}

export default function NavbarLinks({href,title}: Props) {
  return (
    <li>
    <Link
      href={href}
      className="w-full inline-block px-3 py-1 text-sm"
    >
      {title}
    </Link>
  </li>
  )
}