import React from 'react'
import { Text } from '../ui/text'
import { rakkas } from '@/app/ui/fonts'
import PictureWrapper from '../ui/picture-wrapper'
import RecommendationsComponent from './recommendations-component'
import SectionWrapperMobile from '../ui/section-wrapper-mobil'

const RoutesBirdingMobile = () => {
  return (
    <SectionWrapperMobile className="bg-main-200">
      <Text
        font={rakkas.className}
        as="h3"
        className="text-[36px] leading-[80px] uppercase max-w-[291px] text-center"
      >
        Xocen Birding
      </Text>
      <PictureWrapper
        src="/images/red-chest.webp"
        className="w-[291px] h-[312px]"
      />
      <Text
        as="p"
        className="text-[20px] leading-[30px] text-center max-w-[291px]"
      >
        El recorrido en Xocén, un pueblo en el centro del mundo, cerca de
        Valladolid, Yucatán, ofrece una experiencia única. Guiados por
        lugareños, exploraremos senderos que conectan con comunidades mayas,
        permitiendo disfrutar de la diversidad de aves y la exuberante selva.
        Este tour busca destacar la importancia de las aves en el planeta, así
        como en la cultura local, ofreciendo una experiencia sorprendente y
        gratificante. Podremos ver aves como los semilleros, carpinteros,
        calandrias, pirangas, palomas, trepatroncos, etc.
      </Text>

      <RecommendationsComponent
        className="max-w-[291px]"
        recommendations={[
          {
            title: 'Recomendaciones',
            description:
              'Amante de la naturaleza. Llevar ropa cómoda y Zapatos cómodos. Repelente biodegradable Cámara fotográfica. Gorra o sombrero'
          },
          {
            title: 'Incluye',
            description:
              'Transporte de Valladolid- Xocen-Valladolid Almuerzo en una de las comunidades. Comida'
          }
        ]}
      />
    </SectionWrapperMobile>
  )
}

export default RoutesBirdingMobile
