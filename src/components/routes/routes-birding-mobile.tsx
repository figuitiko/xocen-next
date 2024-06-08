import React from 'react'
import { Text } from '../ui/text'
import { rakkas } from '@/app/ui/fonts'
import PictureWrapper from '../ui/picture-wrapper'
import RecommendationsComponent from './recomendations-component'

const RoutesBirdingMobile = () => {
  return (
    <section className="flex md:hidden flex-col bg-main-200 w-full gap-8 items-center px-4">
      <Text
        font={rakkas.className}
        as="h3"
        className="text-[36px] leading-[80px] uppercase"
      >
        Xocen Birding
      </Text>
      <PictureWrapper
        src="/images/red-chest.webp"
        className="w-[291px] h-[312px]"
      />
      <Text as="p" className="text-[20px] leading-[30px] text-center">
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
    </section>
  )
}

export default RoutesBirdingMobile
