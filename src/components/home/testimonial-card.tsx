import Image from 'next/image'
import React from 'react'
import { Text } from '../ui/text'
import { poppins } from '@/app/ui/fonts'

type Props = {
  imgUrl: string
  title: string
  subTitle: string
  description: string
}

const TestimonialCard = ({ imgUrl, title, subTitle, description }: Props) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="flex p-8 flex-col bg-white rounded-3xl gap-4">
        <div className="flex gap-8">
          <picture className="rounded-full overflow-hidden max-w-[68px]">
            <Image
              src={imgUrl}
              alt="Routes"
              width={68}
              height={68}
              className="size-full  aspect-square object-cover"
            />
          </picture>
          <div>
            <Text
              as="h3"
              font={poppins.className}
              className="text-[24px] text-brand-text leading-[36px]"
            >
              {title}
            </Text>
            <Text
              as="h4"
              className="text-[16px] text-light-dark leading-[36px]"
            >
              {subTitle}
            </Text>
          </div>
        </div>
        <div>
          <Text
            as="p"
            font={poppins.className}
            className="text-[11px] text-black leading-[16px] font-normal"
          >
            {description}
          </Text>
        </div>
      </div>
      <div className="flex gap-1 w-full justify-end">
        <picture className="bg-white p-2 rounded-3xl ">
          <Image
            src="/images/rating.svg"
            alt="star"
            width={24}
            height={24}
            className="size-auto aspect-auto"
          />
        </picture>
      </div>
    </div>
  )
}

export default TestimonialCard
