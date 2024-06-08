import Image from 'next/image'
import React from 'react'
import { Text } from '../ui/text'

type Props = {
  imgUrl: string
  title: string
  description: string
}

const CardRoutes = ({ imgUrl, title, description }: Props) => {
  return (
    <div className="flex  flex-1 bg-white rounded-full text-balance max-w-[394px] py-2">
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
        <Text className="text-[28px] text-brand leading-[31px]">{title}</Text>
        <Text className="text-[11px] text-brand leading-[21px]">
          {description}
        </Text>
      </div>
    </div>
  )
}

export default CardRoutes
