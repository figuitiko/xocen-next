import { cn } from '@/lib/utils'

const HrMarker = ({ className }: { className?: string }) => {
  return (
    <hr className={cn('h-2 bg-main-200 border-none mb-4 w-[40%]', className)} />
  )
}

export default HrMarker
