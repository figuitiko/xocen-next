import React from 'react'
import Image from 'next/image'
import { Text } from '../ui/text'
import { rakkas } from '@/app/ui/fonts'
import { cn } from '@/lib/utils'
type Props = {
  image1?: string
  image2?: string
  title: string
  content: string
  className?: string
  textTitleClassName?: string
  textContentClassName?: string
}

const HeadingRouting = ({
  image1,
  image2,
  content,
  title,
  className,
  textTitleClassName,
  textContentClassName
}: Props) => {
  return (
    <div className={cn('flex items-center w-full justify-between', className)}>
      {image1 && (
        <picture>
          <Image src={image1} alt="About Us" width={223} height={201} />
        </picture>
      )}
      <div className="flex-1 flex flex-col items-center gap-8">
        <Text
          font={rakkas.className}
          className={cn(
            'text-center text-[72px] leading-[63px] uppercase',
            textTitleClassName
          )}
        >
          {title}
        </Text>
        <Text
          className={cn(
            'text-center text-[24px] leading-[30px] font-normal',
            textContentClassName
          )}
        >
          {content}
        </Text>
      </div>
      {image2 && (
        <picture>
          <Image src={image2} alt="About Us" width={223} height={201} />
        </picture>
      )}
    </div>
  )
}

export default HeadingRouting
