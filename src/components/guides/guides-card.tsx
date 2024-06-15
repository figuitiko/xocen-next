import Image from 'next/image'
import { Text } from '../ui/text'
import { alfaSlabOne } from '@/app/ui/fonts'
type Props = {
  srcImg: string
  altImg: string
  guideName: string
  subTitle: string
  description: string
}
const CardGuides = ({
  srcImg,
  altImg,
  guideName,
  subTitle,
  description
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <picture className="relative w-[310px] h-[242px]">
        <Image
          src={srcImg}
          alt={altImg}
          fill
          className="object-cover size-full aspect-square"
        />
      </picture>
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
        className="text-[14px] leading-[24px] text-brand text-center h-[359px]"
      >
        {description}
      </Text>
      <div>
        <button className="bg-main-200 text-white py-2 px-4 rounded-full">
          Ver más
        </button>
      </div>
    </div>
  )
}

export default CardGuides
