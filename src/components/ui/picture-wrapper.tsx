import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import Image from 'next/image'

export enum RoundedVariants {
  ROUNDED_TOP = 'roundedTop',
  ROUNDED_BOTTOM = 'roundedBottom',
  ROUNDED = 'rounded-full',
  ROUNDED_DEFAULT = 'rounded-3xl'
}

const PictureVariant = cva('relative flex overflow-hidden', {
  variants: {
    roundedVariants: {
      [RoundedVariants.ROUNDED_TOP]: 'rounded-t-full',
      [RoundedVariants.ROUNDED_BOTTOM]: 'rounded-b-full',
      [RoundedVariants.ROUNDED]: 'rounded-full',
      [RoundedVariants.ROUNDED_DEFAULT]: 'rounded-3xl'
    }
  },
  defaultVariants: {
    roundedVariants: RoundedVariants.ROUNDED_DEFAULT
  }
})

type Props = {
  className: string
  roundedVariants?: RoundedVariants
  src: string
}

const PictureWrapper = ({
  className,
  roundedVariants = RoundedVariants.ROUNDED_DEFAULT,
  src
}: Props) => {
  return (
    <picture className={cn(PictureVariant({ roundedVariants }), className)}>
      <Image
        src={src}
        alt="Routes"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover size-full"
      />
    </picture>
  )
}

export default PictureWrapper
