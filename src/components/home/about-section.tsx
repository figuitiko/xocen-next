import Image from 'next/image'
import React from 'react'
import { Text } from '../ui/text'
import { rakkas } from '@/app/ui/fonts'
import { ButtonMain } from '../ui/buttons'

export const ABOUT_CONTENT = {
  MAIN_HEADING: 'Sobre Nosotros',
  PARAGRAPH_1:
    'Somos una agencia ecoturística comunitaria en Yucatán, México, liderada por jóvenes mayas, ofreciendo recorridos de interpretación ambiental, observación de aves, turismo rural y holístico. ',
  PARAGRAPH_2:
    'El 15% de las ganancias de nuestros tours se asignan a conservación y proyectos sociales.',
  PARAGRAPH_3:
    ' Este año, se planea plantar más de 1,000 árboles nativos en Xocén  para combatir la deforestación y mitigar el cambio climático a nivel global.',
  PARAGRAPH_4: 'Uniendo Esfuerzos por los Pueblos Autóctonos de México'
}

const AboutSection = () => {
  return (
    <section className="hidden md:flex flex-col items-center justify-center w-full h-full bg-main-200 py-12">
      <div className="flex flex-col w-full max-w-[1200px] gap-8  justify-center">
        <div className="flex items-center w-full justify-between">
          <picture>
            <Image
              src="/images/img-bird-2.png"
              alt="About Us"
              width={223}
              height={201}
            />
          </picture>
          <Text
            font={rakkas.className}
            className="text-center text-[72px] leading-[63px] uppercase"
          >
            {ABOUT_CONTENT.MAIN_HEADING}
          </Text>
          <picture>
            <Image
              src="/images/img-bird-1.png"
              alt="About Us"
              width={223}
              height={201}
            />
          </picture>
        </div>
        <div className="flex justify-center w-full">
          <Text className="text-center text-[24px] leading-[30px]  font-normal max-w-[80%]">
            {ABOUT_CONTENT.PARAGRAPH_1}
          </Text>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-8 min-w-[424px]">
            <Text className="text-[24px] leading-[30px]">
              {ABOUT_CONTENT.PARAGRAPH_2}
            </Text>
            <Text className="text-[24px] leading-[30px]">
              {ABOUT_CONTENT.PARAGRAPH_3}
            </Text>
            <ButtonMain href="/about"> Saber más</ButtonMain>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-8">
            <picture className="row-start-1 row-end-3 col-start-1 rounded-[16px] overflow-hidden">
              <Image
                src="/images/bird-about.webp"
                alt="About Us"
                width={291}
                height={582}
                className="object-cover size-full"
              />
            </picture>
            <picture className="rounded-[16px] overflow-hidden">
              <Image
                src="/images/tour-piramid-about.webp"
                alt="About Us"
                width={257}
                height={273}
                className="size-full object-cover"
              />
            </picture>
            <picture className=" col-start-2 row-start-2 rounded-[16px] overflow-hidden">
              <Image
                src="/images/traditional-food-about.webp"
                alt="About Us"
                width={257}
                height={273}
                className="size-full object-cover"
              />
            </picture>
            <picture className="rounded-[16px] overflow-hidden">
              <Image
                src="/images/ritual-about.webp"
                alt="About Us"
                width={257}
                height={273}
                className="size-full object-cover"
              />
            </picture>
            <Text className="text-[24px] leading-[30px]">
              {ABOUT_CONTENT.PARAGRAPH_4}
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
