import { alfaSlabOne } from '@/app/ui/fonts'
import { Text } from '../ui/text'
import { cn } from '@/lib/utils'

type RecommendationItem = {
  title: string
  description: string
}
type Props = {
  recommendations: RecommendationItem[]
  className?: string
}

const RecommendationsComponent = ({ recommendations, className }: Props) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {recommendations.map(({ title, description }) => (
        <div key={title}>
          <Text
            font={alfaSlabOne.className}
            as="h2"
            className="text-[24px] md:text-[28px] leading-[32px] "
          >
            {title}
          </Text>
          <Text as="p" className="text-[20px] md:text-[24px] leading-[30px]">
            {description}
          </Text>
        </div>
      ))}
    </div>
  )
}

export default RecommendationsComponent
