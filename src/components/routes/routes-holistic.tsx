import React from 'react'
import HeadingRouting from './heading-routing'
import SectionWrapper from '../ui/section-wrapper'
import RecommendationsComponent from './recommendations-component'
import PictureWrapper from '../ui/picture-wrapper'

const RoutesHolist = () => {
  return (
    <SectionWrapper className="hidden md:flex">
      <HeadingRouting
        title={'TURISMO HOLÍSTICO'}
        textTitleClassName="text-main-200"
        content={
          'El Recorrido se realizara en la comunidad de Xocén ubicado a 10 minutos de la ciudad de Valladolid, estaremos visitando una familia de curanderos que explicará su experiencia en la medicina tradicional, como actividad   ellos darán tratamientos (masajes) del Tipte ( en maya) o ciro, en la cultura maya es el centro de nuestro ser. Realizaran limpia espiritual antes de los masajes.'
        }
        textContentClassName="text-brand text-left"
        image2="/images/dog-3.png"
      />
      <div className="flex gap-2 md:flex-col lg:flex-row ">
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
          textClassName="text-main-200 md:text-center lg:text-left"
          paragraphsClassName="text-brand md:text-center lg:text-left"
          className="md:max-w-full lg:max-w-[25%] md:items-center lg:items-start"
        />
        <div className="flex gap-4 md:flex-col md:items-center lg:items-start lg:flex-row">
          <div className="flex-1">
            <PictureWrapper
              src="/images/ritual-about.webp"
              className="w-[251px] h-[582px]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-8 justify-end  h-full">
            <PictureWrapper
              src="/images/ritual-holist.webp"
              className="w-[400px] h-[252px]"
            />
            <PictureWrapper
              src="/images/massage-1.webp"
              className="w-[400px] h-[252px]"
            />
          </div>
          <div className="flex-1 flex items-center h-full">
            <PictureWrapper
              src="/images/massage-2.webp"
              className="w-[200px] h-[319px]"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default RoutesHolist
