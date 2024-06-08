import { cn } from '@/lib/utils'

const HrMarker = ({ classPercent = 'w-[40%]' }: { classPercent?: string }) => {
  return <hr className={cn('h-2 bg-main-200 border-none mb-4', classPercent)} />
}

export default HrMarker
