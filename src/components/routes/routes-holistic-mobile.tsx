import React from 'react'
import SectionWrapper from '../ui/section-wrapper'
import { Text } from '../ui/text'
import { rakkas } from '@/app/ui/fonts'
import PictureWrapper from '../ui/picture-wrapper'
import RecommendationsComponent from './recommendations-component'
import HrMarker from '../ui/hr-marker'

const RoutesHolistMobile = () => {
  return (
    <SectionWrapper className="flex md:hidden flex-col items-center">
      <Text
        font={rakkas.className}
        as="h2"
        className="text-main-200 uppercase text-[40px] leading-[36px] text-center"
      >
        TURISMO HOLÍSTICO
      </Text>
      <PictureWrapper
        src="/images/ritual-about.webp"
        className="w-[291px] h-[312px]"
      />
      <Text
        as="p"
        className="text-[20px] leading-[30px] text-center text-brand max-w-[291px]"
      >
        El turismo holístico es una experiencia que busca la conexión con la
        naturaleza, la cultura y la espiritualidad. En esta experiencia se
        realizan actividades que buscan el equilibrio entre el cuerpo, la mente
        y el espíritu. Se realizan actividades como yoga, meditación, temazcal,
        ceremonias mayas, entre otras. El turismo holístico busca la armonía con
        la naturaleza y la cultura local, ofreciendo una experiencia única y
        transformadora.
      </Text>
      <HrMarker />
      <RecommendationsComponent
        recommendations={[
          {
            title: 'Recomendaciones:',
            description:
              'Llevar ropa cómoda. Cámara fotográfica. Gorra o sombrero. Zapatos cómodos'
          },
          {
            title: 'Incluye:',
            description: 'Transporte Valladolid-Xocen- Valladolid Comida.'
          }
        ]}
        textClassName="text-main-200"
        paragraphsClassName="text-brand"
        className="max-w-[291px]"
      />
    </SectionWrapper>
  )
}

export default RoutesHolistMobile
