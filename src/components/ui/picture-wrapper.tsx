import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import Image from 'next/image'

export enum RoundedVariants {
  ROUNDED_TOP = 'roundedTop',
  ROUNDED_BOTTOM = 'roundedBottom',
  ROUNDED = 'rounded-full',
  ROUNDED_DEFAULT = 'rounded-3xl',
  SQUARE = 'rounded-none'
}

const PictureVariant = cva('relative flex overflow-hidden', {
  variants: {
    roundedVariants: {
      [RoundedVariants.ROUNDED_TOP]: 'rounded-t-full',
      [RoundedVariants.ROUNDED_BOTTOM]: 'rounded-b-full',
      [RoundedVariants.ROUNDED]: 'rounded-full',
      [RoundedVariants.ROUNDED_DEFAULT]: 'rounded-3xl',
      [RoundedVariants.SQUARE]: 'rounded-none'
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
  alt?: string
}

const PictureWrapper = ({
  className,
  roundedVariants = RoundedVariants.ROUNDED_DEFAULT,
  src,
  alt = 'Routes'
}: Props) => {
  return (
    <picture className={cn(PictureVariant({ roundedVariants }), className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover size-full"
      />
    </picture>
  )
}

export default PictureWrapper
