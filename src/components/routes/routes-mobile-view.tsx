import React from 'react'
import { Text } from '../ui/text'
import { rakkas } from '@/app/ui/fonts'
import PictureWrapper from '../ui/picture-wrapper'
import HrMarker from '../ui/hr-marker'
import SectionWrapperMobile from '../ui/section-wrapper-mobil'
import RecommendationsComponent, {
  type RecommendationsProps
} from './recommendations-component'
import { cn } from '@/lib/utils'

type HeadingType = {
  textHeading: string
  headingClassName?: string
}
type ImgType = {
  imgSrc: string
  imgAlt: string
  imgClassName?: string
}
type ContentType = {
  content: string
  contentClassName?: string
}

type Props = {
  recommendationsProps?: RecommendationsProps
  className?: string
  heading: HeadingType
  img: ImgType
  content: ContentType
}

const RoutesMobileView = ({
  recommendationsProps,
  className,
  heading: { textHeading, headingClassName },
  img: { imgSrc, imgAlt, imgClassName },
  content: { content, contentClassName }
}: Props) => {
  return (
    <SectionWrapperMobile className={className}>
      <Text
        as="h2"
        font={rakkas.className}
        className={cn(
          'text-[32px] max-w-[291px] leading-[40px]  text-center uppercase',
          headingClassName
        )}
      >
        {textHeading}
      </Text>
      <PictureWrapper
        className={cn('w-[291px] h-[312px]', imgClassName)}
        src={imgSrc}
        alt={imgAlt}
      />
      <Text
        as="p"
        className={cn(
          'text-[20px] max-w-[291px] leading-[32px] text-center font-normal text-brand',
          contentClassName
        )}
      >
        {content}
      </Text>
      {recommendationsProps && (
        <>
          <HrMarker className="bg-main-100" />
          <RecommendationsComponent
            className={recommendationsProps.className}
            recommendations={recommendationsProps.recommendations}
            textClassName={recommendationsProps.textClassName}
            paragraphsClassName={recommendationsProps.paragraphsClassName}
          />
        </>
      )}
    </SectionWrapperMobile>
  )
}

export default RoutesMobileView
