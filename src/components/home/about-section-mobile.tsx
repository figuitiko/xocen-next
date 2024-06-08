import React from 'react'
import { Text } from '../ui/text'
import { ABOUT_CONTENT } from './about-section'
import { alfaSlabOne, rakkas } from '@/app/ui/fonts'
import Image from 'next/image'
import { ButtonMain } from '../ui/buttons'
export const ABOUT_CONTENT_MOBILE = {
  PARAGRAPH_1: 'Uniendo esfuerzos por los Pueblos Autóctonos de México',
  PARAGRAPH_2:
    'El 15% de las ganancias de nuestros tours se asignan a conservación y proyectos sociales.',
  PARAGRAPH_3:
    'Este año, se planea plantar más de 1,000 árboles nativos en Xocén  para combatir la deforestación y mitigar el cambio climático a nivel global.'
}

const AboutSectionMobile = () => {
  return (
    <section className="w-full flex flex-col md:hidden bg-main-200 items-center justify-center gap-8 py-12 px-4">
      <Text font={rakkas.className} className="text-[40px] leading-[48px]">
        {ABOUT_CONTENT.MAIN_HEADING}
      </Text>
      <picture>
        <Image
          src="/images/img-bird-2.png"
          alt="About Us"
          width={53}
          height={201}
          className="object-cover size-full"
        />
      </picture>
      <Text className="text-[25px] leading-[24px] text-center">
        {ABOUT_CONTENT.PARAGRAPH_1}
      </Text>
      <div className="flex flex-col gap-4">
        <picture className="rounded-[16px] overflow-hidden">
          <Image
            src="/images/tour-piramid-about.webp"
            alt="About Us"
            width={291}
            height={273}
            className="object-cover size-full"
          />
        </picture>
        <picture className="rounded-[16px] overflow-hidden">
          <Image
            src="/images/traditional-food-about.webp"
            alt="About Us"
            width={291}
            height={273}
            className="object-cover size-full"
          />
        </picture>
      </div>
      <Text className="text-[32px] leading-[41px] text-center ">
        {ABOUT_CONTENT_MOBILE.PARAGRAPH_1}
      </Text>
      <div className="flex gap-4">
        <div className="max-w-[60%] flex">
          <Text as="p" className="text-[25px] leading-[27px] block max-w-1/2">
            {ABOUT_CONTENT_MOBILE.PARAGRAPH_2}
          </Text>
        </div>
        <picture className="rounded-[16px] overflow-hidden">
          <Image
            src="/images/bird-about.webp"
            alt="About Us"
            width={200}
            height={201}
            className="object-cover size-full"
          />
        </picture>
      </div>
      <ButtonMain href="/about">
        <Text
          as="span"
          font={alfaSlabOne.className}
          className="text-white  text-base font-normal"
        >
          Saber más
        </Text>
      </ButtonMain>
      <Text className="text-[20px] leading-[32px] text-center">
        {ABOUT_CONTENT_MOBILE.PARAGRAPH_3}
      </Text>
    </section>
  )
}

export default AboutSectionMobile
