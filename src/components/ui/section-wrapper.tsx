import { cn } from '@/lib/utils'
import React from 'react'

const SectionWrapper = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <section
      className={cn(
        'hidden md:flex flex-col w-full max-w-[1200px] gap-8 py-12 px-8 ',
        className
      )}
    >
      {children}
    </section>
  )
}

export default SectionWrapper
