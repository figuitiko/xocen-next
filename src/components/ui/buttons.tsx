'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export type BasicButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}
export type LinkButtonProps = {
  children: React.ReactNode
  href: string
  className?: string
}

export type ButtonProps = BasicButtonProps | LinkButtonProps

export const ButtonMain = (props: ButtonProps) => {
  const { children, className } = props
  const classValue = cn(
    'bg-main text-white p-4 rounded-full bg-main-100 px-12 py-3 text-lg font-medium drop-shadow-md hover:underlines max-w-fit',
    className
  )
  if ('href' in props) {
    const { href } = props
    return (
      <Link href={href ?? '#'} className={classValue}>
        {children}
      </Link>
    )
  }
  return (
    <button className={classValue} onClick={() => props?.onClick && null}>
      {children}
    </button>
  )
}
