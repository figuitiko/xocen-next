import React from 'react'
import { Text } from '../ui/text'
import { alfaSlabOne, rakkas } from '@/app/ui/fonts'
import PictureWrapper from '../ui/picture-wrapper'
import HrMarker from '../ui/hr-marker'
import SectionWrapperMobile from '../ui/section-wrapper-mobil'

const RoutesHeroMobil = () => {
  return (
    <SectionWrapperMobile>
      <Text
        as="h1"
        font={rakkas.className}
        className="text-[40px] leading-[80px] text-main-200 text-center uppercase"
      >
        Boda Maya
      </Text>
      <PictureWrapper
        src="/images/boda-ritual-1.webp"
        className="w-[291px] h-[312px]"
      />
      <Text
        as="p"
        className="text-[20px] leading-[32px] text-light-dark text-center max-w-[291px]"
      >
        Es una ceremonia que se realiza de forma tradicional, se usa los
        elementos importantes para una ceremonia como es el Balché bebida
        sagrada de los mayas, esta bebida solo es usada en los momentos sagrados
        en a vida de la cultura maya, es importante mencionar que es una
        ceremonia de unión espiritual y simbólica, por lo cual no se firma un
        documento legal, la representación de la boda maya se puede realizar en
        distintos puntos del entorno natural como pueden ser, playas, cenotes,
        senderos, entre otros lugares que podría ser especial a la pareja, la
        península de Yucatán es uno de los lugares muy aptos para realizar dicha
        actividad.
      </Text>
      <HrMarker />
      <div className="max-w-[291px]">
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
            <Text as="p" className="text-[24px] leading-[32px] text-light-dark">
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
      </div>
    </SectionWrapperMobile>
  )
}

export default RoutesHeroMobil
