import React from 'react'
import SectionWrapper from '../ui/section-wrapper'
import HeadingRouting from './heading-routing'
import RecommendationsComponent from './recommendations-component'
import PictureWrapper from '../ui/picture-wrapper'

const RoutesGastronomic = () => {
  return (
    <SectionWrapper className="bg-main-200">
      <HeadingRouting
        image1="/images/bird-1.png"
        image2="/images/bird-2.png"
        title="Taller gastronÓmico regional"
        content="El taller gastronómico es uno de las actividades mas solicitada a nuestra empresa, el objetivo de este paquete es involucrar al visitante en la preparación de la comida, las actividades principales es la realización del Piib, buscar leña y la preparación de la comida con los ingredientes regionales, damos como opción la preparación del Pollo piib, La cochinita Piib, el chachakhua (tamal en piib) y la elaboración del chocolate de manera tradicional."
      />
      <div className="flex">
        <RecommendationsComponent
          className="max-w-[30%] "
          recommendations={[
            {
              title: 'Recomendaciones',
              description:
                'Llevar ropa cómoda y Zapatos cómodos.Repelente biodegradable. Cámara. Gorra o sombrero.'
            },
            {
              title: 'Incluye',
              description: 'Transporte Valladolid- Xocen-Valladolid Comida.'
            }
          ]}
        />
        <div className="flex-1 flex gap-4 md:flex-col lg:flex-row ">
          <PictureWrapper
            className="w-[291px] h-[582px]"
            src="/images/gastronomic-1.webp"
            alt="Gastronomic"
          />
          <div className="flex flex-col justify-end gap-4">
            <PictureWrapper
              className="w-[457px] h-[252px]"
              src="/images/gastronomic-2.webp"
              alt="Gastronomic"
            />
            <PictureWrapper
              className="w-[457px] h-[252px]"
              src="/images/gastronomic-3.webp"
              alt="Gastronomic"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default RoutesGastronomic
