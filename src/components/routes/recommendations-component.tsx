import { alfaSlabOne } from '@/app/ui/fonts'
import { Text } from '../ui/text'
import { cn } from '@/lib/utils'

type RecommendationItem = {
  title: string
  description: string
}
export type RecommendationsProps = {
  recommendations: RecommendationItem[]
  className?: string
  textClassName?: string
  paragraphsClassName?: string
}

const RecommendationsComponent = ({
  recommendations,
  className,
  textClassName,
  paragraphsClassName
}: RecommendationsProps) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {recommendations.map(({ title, description }) => (
        <div key={title}>
          <Text
            font={alfaSlabOne.className}
            as="h2"
            className={cn(
              'text-[24px] md:text-[28px] leading-[32px]',
              textClassName
            )}
          >
            {title}
          </Text>
          <Text
            as="p"
            className={cn(
              'text-[20px] md:text-[24px] leading-[30px]',
              paragraphsClassName
            )}
          >
            {description}
          </Text>
        </div>
      ))}
    </div>
  )
}

export default RecommendationsComponent
