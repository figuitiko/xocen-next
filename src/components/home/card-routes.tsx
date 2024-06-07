import Image from 'next/image'
import React from 'react'
import { Text } from '../ui/text'
import { abel } from '@/app/ui/fonts'
type Props = {
  imgUrl: string
  title: string
  description: string
}

const CardRoutes = ({ imgUrl, title, description }: Props) => {
  return (
    <div className="flex  flex-1 bg-white rounded-full text-balance max-w-[394px]">
      <picture className="min-w-[152px] max-w-[152px] rounded-full overflow-hidden">
        <Image
          src={imgUrl}
          alt="Routes"
          width={152}
          height={273}
          className="size-full object-cover"
        />
      </picture>
      <div className="flex flex-col text-wrap pl-4 pr-8 justify-center">
        <Text
          font={abel.className}
          className="text-[32px] text-brand-text leading-[48px]"
        >
          {title}
        </Text>
        <Text
          font={abel.className}
          className="text-[14px] text-brand-text leading-[21px]"
        >
          {description}
        </Text>
      </div>
    </div>
  )
}

export default CardRoutes
