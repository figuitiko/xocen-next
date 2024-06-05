import { cn } from '@/lib/utils'
import { type FC } from 'react'

export const Skeleton: FC = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  )
}
