import { alfaSlabOne, rakkas } from '@/app/ui/fonts'
import { Text } from '../ui/text'
import Image from 'next/image'
import { ButtonMain } from '../buttons'
export const HERO_MAIN_CONTENT = {
  HERO_MAIN_HEADING: 'EcoTurismo Maya',
  HERO_PARAGRAPH_TEXT_2: 'Lorem ipsum dolor sit amet',
  HERO_PARAGRAPH_TEXT_2_MOBILE:
    'Jóvenes locales lideran experiencias únicas en Yucatán',
  HERO_PARAGRAPH_TEXT_3_MOBILE:
    'Ofrecemos servicios especializados como:  recorridos de interpretación ambiental, observación de aves, turismo rural y turismo holístico.',
  HERO_PARAGRAPH_TEXT_3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis nec ultricies.',
  HERO_PARAGRAPH_TEXT_4:
    'Guías jóvenes certificados por la Secretaría de Turismo (SECTUR) en la modalidad de Turismo Orientado hacia la Naturaleza NOM-09-TUR-2002 Y NOM-08-TUR-2002'
}

const HeroMainMobile = () => {
  return (
    <section className="flex md:hidden flex-col">
      <div className="flex items-center justify-center py-16">
        <Text
          as="h1"
          font={rakkas.className}
          className="text-[40px]  leading-[60px] uppercase  font-normal  text-center text-main-100"
        >
          {HERO_MAIN_CONTENT.HERO_MAIN_HEADING}
        </Text>
      </div>
      <div className="h-[156px] bg-mobile-hero bg-cover" />
      <div className="flex flex-col p-2">
        <div className="flex p-2 flex-wrap  justify-center">
          <picture>
            <Image
              src="/images/icon-main.svg"
              alt="hero"
              height={79}
              width={82}
              className="h-auto w-auto object-contain"
            />
          </picture>
          <div>
            <Text
              as="p"
              className="flex-1 text-center text-main-200 text-[24px]  leading-[20px] mt-4 text-balance"
            >
              {HERO_MAIN_CONTENT.HERO_PARAGRAPH_TEXT_2_MOBILE}
            </Text>
          </div>
        </div>
        <Text
          as="p"
          className="text-center  text-brand-text text-[20px]  leading-[20px] mt-4"
        >
          {HERO_MAIN_CONTENT.HERO_PARAGRAPH_TEXT_3_MOBILE}
        </Text>
      </div>

      <div className="flex w-full items-center justify-center py-12">
        <ButtonMain>
          <Text font={alfaSlabOne.className} className="text-white">
            Conoce más
          </Text>
        </ButtonMain>
      </div>
      <div className="flex w-full py-4 gap-4 justify-center flex-wrap">
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
      <div className="flex flex-col w-full justify-center  p-8">
        <Text
          as="p"
          className="text-center text-brand-text text-[40px]  leading-[50px] mt-4"
        >
          {HERO_MAIN_CONTENT.HERO_PARAGRAPH_TEXT_3}
        </Text>
        <picture className="flex w-full items-center justify-center">
          <Image
            src="/images/icon-main.svg"
            alt="hero"
            height={79}
            width={82}
            className="h-auto w-auto object-contain"
          />
        </picture>
        <Text className="text-center text-brand-text text-[24px]  leading-[30px] mt-4">
          {HERO_MAIN_CONTENT.HERO_PARAGRAPH_TEXT_4}
        </Text>
      </div>
    </section>
  )
}

export default HeroMainMobile
