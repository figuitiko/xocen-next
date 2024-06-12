import React from 'react'
import { Text } from '../ui/text'
import { alfaSlabOne } from '@/app/ui/fonts'
import PictureWrapper from '../ui/picture-wrapper'
import HrMarker from '../ui/hr-marker'
import HeadingRouting from './heading-routing'
import SectionWrapper from '../ui/section-wrapper'

const RoutesHero = () => {
  return (
    <SectionWrapper>
      <HeadingRouting
        image1="/images/routes-symbol-1.png"
        image2="/images/routes-symbol-2.png"
        title="Boda Maya"
        textTitleClassName="text-main-200 text-[96px]"
        content="Es una ceremonia que se realiza de forma tradicional, se usa los elementos importantes para una ceremonia como es el Balché bebida sagrada de los mayas, esta bebida solo es usada en los momentos sagrados en la vida de la cultura maya, es importante mencionar que es una ceremonia de unión espiritual y simbólica, por lo cual no se firma un documento legal, la representación de la boda maya se puede realizar en distintos puntos del entorno natural como pueden ser, playas, cenotes, senderos, entre otros lugares que podría ser especial a la pareja, la península de Yucatán es uno de los lugares muy aptos para realizar dicha actividad."
        textContentClassName="text-brand"
      />

      <HrMarker className="w-[10%] md:mx-auto lg:mx-0 " />
      <div className="flex gap-4 md:flex-col md:items-center lg:flex-row">
        <div className="flex-1 flex flex-col items-center">
          <Text
            as="h2"
            font={alfaSlabOne.className}
            className="text-[28px] leading-[48px] text-main-200"
          >
            Incluye:
          </Text>
          <ul className="flex flex-col gap-4">
            <li>
              <Text
                as="p"
                className="text-[24px] leading-[32px]  text-light-dark"
              >
                <Text
                  font={alfaSlabOne.className}
                  className=" text-main-200 font-bold"
                >
                  -
                </Text>
                El montaje del altar de manera tradicional
              </Text>
            </li>
            <li>
              <Text
                as="p"
                className="text-[24px] leading-[32px] text-light-dark"
              >
                <Text
                  font={alfaSlabOne.className}
                  className=" text-main-200 font-bold"
                >
                  -
                </Text>
                Bendición con el copal
              </Text>
            </li>
          </ul>

          <PictureWrapper
            src="/images/boda-ritual.webp"
            className="h-[459px] w-[426px]"
          />
        </div>
        <PictureWrapper
          src="/images/wedding.webp"
          className="h-[620px] md:w-[426px] lg:w-[291px]"
        />
        <div className="flex-1 flex md:flex-col">
          <div className="flex gap-4 md:flex-col md:items-center lg:flex-row">
            <PictureWrapper
              src="/images/boda-ritual.webp"
              className="md:w-[426px] lg:w-[257px] h-[273px] mt-8"
            />
            <div className="flex-1 flex flex-col items-center">
              <div className="flex w-full md:justify-center lg:justify-start">
                <HrMarker />
              </div>
              <Text
                as="p"
                font={alfaSlabOne.className}
                className="text-[24px] leading-[32px] text-main-200 md:text-center md:max-w-[50%] lg:max-w-full lg:text-left"
              >
                Con Xocen Birding Trail tienes la oportunidad de vivir esta
                experiencia en el mundo maya.
              </Text>
            </div>
          </div>
          <PictureWrapper
            src="/images/boda-ritual-2.webp"
            className="w-[430px] h-[273px] mt-8 mx-auto"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default RoutesHero
