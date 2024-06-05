'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type FC } from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export const NavLink: FC<NavLinkProps> = ({ href, children, ...rest }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link
      className={
        isActive ? 'underline decoration-white underline-offset-8' : ''
      }
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
