import { cn } from '@/lib/utils'
import React from 'react'

const SectionWrapperMobile = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <section
      className={cn(
        'flex flex-col md:hidden gap-4 py-12 w-full  justify-center items-center',
        className
      )}
    >
      {children}
    </section>
  )
}

export default SectionWrapperMobile
