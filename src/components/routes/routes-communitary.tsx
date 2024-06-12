import React from 'react'
import SectionWrapper from '../ui/section-wrapper'
import HeadingRouting from './heading-routing'
import RecommendationsComponent from './recommendations-component'
import PictureWrapper from '../ui/picture-wrapper'
import HrMarker from '../ui/hr-marker'
import { Text } from '../ui/text'
import { alfaSlabOne } from '@/app/ui/fonts'

const RoutesCommunitary = () => {
  return (
    <SectionWrapper>
      <HeadingRouting
        title="TURISMO COMUNITARIO"
        textTitleClassName="text-main-200"
        content="El visitante conocerá la esencia autentica de nuestros pueblos mayas, en este tour podrás disfrutar y sentirte parte de las familias de nuestras comunidades.
Donde observarás y conocerás la elaboración de artesanías como son bordados, hilado del algodón, tallado de madera entre otros. Haremos un recorrido en el sendero de Xocen para conocer plantas medicinales y el solar tradicional yucateco. Disfrutaremos de un delicioso platillo típico en la comunidad."
        textContentClassName="text-brand"
        image1="/images/routes-symbol-1.png"
        image2="/images/routes-symbol-2.png"
      />
      <HrMarker className="w-[15%]" />
      <div className="flex md:flex-col lg:flex-row  gap-4">
        <div className="flex-1 flex flex-col gap-4">
          <RecommendationsComponent
            textClassName="text-main-200"
            paragraphsClassName="text-brand"
            recommendations={[
              {
                title: 'Recomendaciones',
                description:
                  'Llevar ropa cómoda y Zapatos cómodos. Repelente biodegradable. Cámara. Gorra o sombrero.'
              },
              {
                title: 'Incluye',
                description: 'Transporte Valladolid- Xocen-Valladolid Comida.'
              }
            ]}
          />
          <PictureWrapper
            src="/images/communitary.webp"
            alt="Comunitario"
            className="w-[457px] h-[252px]"
          />
        </div>
        <div>
          <PictureWrapper
            src="/images/xocen-happy.webp"
            alt="Comunitario"
            className="w-[291px] h-[500px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex gap-4">
            <PictureWrapper
              src="/images/communitary-1.webp"
              alt="Comunitario"
              className="w-[200px] h-[273px] "
            />
            <div className="flex flex-col flex-1">
              <HrMarker />
              <Text
                as="h4"
                font={alfaSlabOne.className}
                className="text-[24px] leading-[32px] text-main-200"
              >
                Ven y disfruta de la hospitalidad y alegría de nuestros amables
                anfitriones.
              </Text>
            </div>
          </div>
          <PictureWrapper
            src="/images/communitary-2.webp"
            alt="Comunitario"
            className="w-[357px] h-[200px]"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default RoutesCommunitary
