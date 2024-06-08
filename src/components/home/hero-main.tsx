import { Text } from '@/components/ui/text'

import Image from 'next/image'
import { ButtonMain } from '@/components/buttons'
import { alfaSlabOne, rakkas } from '@/app/ui/fonts'

export const HOME_CONTENT = {
  HERO_HEADER_1_TEXT: 'ecoturismo',
  HERO_HEADER_2_TEXT: 'MAYA',
  HERO_HEADER_3_TEXT: 'Jóvenes locales lideran experiencias únicas en Yucatán',
  HERO_PARAGRAPH_TEXT:
    'Ofrecemos servicios especializados como:  recorridos de interpretación ambiental, observación de aves, turismo rural y turismo holístico.',
  HERO_PARAGRAPH_TEXT_2: 'Desarrollo Sostenible Comercio Justo',
  HERO_PARAGRAPH_TEXT_3:
    'Guías jóvenes certificados por la Secretaría de Turismo (SECTUR) en la modalidad de Turismo Orientado hacia la Naturaleza NOM-09-TUR-2002 Y NOM-08-TUR-2002'
}

const HeroMain = () => {
  return (
    <>
      <section className=" hidden md:flex w-full gap-12 max-w-[1200px]">
        <div className="flex flex-col flex-1 gap-4 my-4">
          <Text
            as="h1"
            font={rakkas.className}
            className="text-[60px] text-main-100 leading-[76px] uppercase  font-normal"
          >
            {HOME_CONTENT.HERO_HEADER_1_TEXT}
          </Text>
          <div className="flex gap-8 items-center">
            <Text
              font={rakkas.className}
              className="text-[96px] text-main-100 leading-[76px] font-normal uppercase flex gap-4"
            >
              {HOME_CONTENT.HERO_HEADER_2_TEXT}
            </Text>
            <picture>
              <Image
                src="/images/icon-main.svg"
                alt="hero"
                width={82}
                height={79}
                className="fill-main-100 h-auto w-auto min-w-[82px] min-h-[79px]"
              />
            </picture>
          </div>
          <Text
            as="p"
            className="text-[54px] text-brand-text leading-[68px] font-normal"
          >
            {HOME_CONTENT.HERO_HEADER_3_TEXT}
          </Text>
          <Text
            as="p"
            className="text-[24px] text-brand-text leading-[30px] font-normal"
          >
            {HOME_CONTENT.HERO_PARAGRAPH_TEXT}
          </Text>
          <ButtonMain href="/contact">
            <Text
              as="span"
              font={alfaSlabOne.className}
              className="text-white text-base font-normal"
            >
              Contáctanos
            </Text>
          </ButtonMain>
          <div className="flex gap-4 h-[399px]">
            <picture className="w-[193px] h-[326px] overflow-hidden rounded-t-full rounded-b-full self-end">
              <Image
                src="/images/couple.webp"
                alt="logo"
                width={193}
                height={396}
                className="h-full w-full object-cover"
              />
            </picture>
            <picture className="w-[193px] h-[326px] overflow-hidden rounded-t-full rounded-b-full">
              <Image
                src="/images/wedding.webp"
                alt="logo"
                width={193}
                height={396}
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center my-4 gap-4">
          <picture>
            <Image
              src="/images/logo-hero.png"
              alt="hero"
              width={222}
              height={61}
              className="h-auto w-auto object-cover"
            />
          </picture>
          <picture className="flex-1 size-full -mb-8 -z-20 rounded-t-full overflow-hidden">
            <Image
              src="/images/carpenter.webp"
              alt="carpenter"
              width={500}
              height={500}
              className="size-full object-cover "
            />
          </picture>
        </div>
        <div className="flex-1 flex flex-col items-center my-4 gap-4">
          <div className="flex gap-4 h-[399px]">
            <div className="flex flex-col">
              <picture className="w-[193px] h-[326px] overflow-hidden rounded-t-full rounded-b-full">
                <Image
                  src="/images/guides.webp"
                  alt="logo"
                  width={193}
                  height={396}
                  className="h-full w-full object-cover"
                />
              </picture>
              <picture className="mt-auto">
                <Image
                  src="/images/icon-main.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="size-auto object-cover"
                />
              </picture>
            </div>
            <picture className="w-[193px] h-[326px] overflow-hidden rounded-t-full rounded-b-full self-end">
              <Image
                src="/images/food.webp"
                alt="logo"
                width={193}
                height={396}
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 flex-1 w-full ">
            <div className=" col-start-1 col-end-3  row-start-1 size-fit self-center">
              <Text
                as="h2"
                className="text-[48px] text-brand-text leading-[60px] uppercase  font-normal "
              >
                {HOME_CONTENT.HERO_PARAGRAPH_TEXT_2}
              </Text>
            </div>
            <div className="col-start-1 row-start-2">
              <Text
                as="p"
                className="text-[24px] text-brand-text leading-[30px]  font-normal"
              >
                {HOME_CONTENT.HERO_PARAGRAPH_TEXT_3}
              </Text>
            </div>
            <div className="col-start-2 row-start-2 self-center justify-self-center">
              <picture className="mt-auto">
                <Image
                  src="/images/icon-main.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="size-auto object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroMain
