import Image from 'next/image'
import { Text } from '../ui/text'
import { alfaSlabOne } from '@/app/ui/fonts'
import GuideSocialIcon from './guide-social-icon'
type Props = {
  srcImg: string
  altImg: string
  guideName: string
  subTitle: string
  description: string
  socialArray?: Array<{
    srcImg: string
    altImg: string
    href: string
  }>
}
const CardGuides = ({
  srcImg,
  altImg,
  guideName,
  subTitle,
  description,
  socialArray
}: Props) => {
  return (
    <div className="flex flex-col gap-4 bg-white flex-1">
      <picture className="relative w-full lg:w-[310px] h-[242px] md:h-[400px] lg:h-[242px]">
        <Image
          src={srcImg}
          alt={altImg}
          fill
          className="object-cover size-full aspect-square"
        />
      </picture>
      <div className="flex flex-col gap-4 p-4 ">
        <Text
          font={alfaSlabOne.className}
          as="h4"
          className="text-[24px] leading-[32px] text-main-200 text-center"
        >
          {guideName}
        </Text>
        <Text className="text-[14px] leading-[24px] text-brand text-center">
          {subTitle}
        </Text>
        <Text
          as="p"
          className="text-[14px] leading-[24px] text-brand text-center h-auto lg:h-[400px] px-4"
        >
          {description}
        </Text>
      </div>
      <div className="p-8 flex gap-4 w-full justify-center">
        {socialArray?.map((social, index) => (
          <GuideSocialIcon
            key={index}
            srcImg={social.srcImg}
            altImg={social.altImg}
            href={social.href}
          />
        ))}
      </div>
    </div>
  )
}

export default CardGuides
