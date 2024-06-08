import { Text } from '@/components/ui/text'
import Image from 'next/image'
import { alfaSlabOne, poppins, rakkas } from '../ui/fonts'
import { ButtonMain } from '@/components/ui/buttons'

const AboutPage = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-[1fr_1fr_1fr_1fr_auto]  max-w-[1200px] w-full mx-auto bg-main-200 py-0  px-4 md:px-12 gap-4">
      <div className="col-start-1 md:col-start-1 col-end-6 md:col-end-3 row-start-1 row-end-3 flex flex-col items-center md:items-start gap-4">
        <picture className="hidden md:flex h-[287px] w-[303px] relative">
          <Image
            src="/images/logo-routes.png"
            alt="Routes"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain size-full"
          />
        </picture>
        <Text
          as="h1"
          font={rakkas.className}
          className="hidden md:block text-[64px] text-white leading-[61px]"
        >
          ACERCA DE NOSOTROS
        </Text>
        <Text
          as="h1"
          font={rakkas.className}
          className="block md:hidden  text-[36px] text-white leading-[28px] text-center mt-8"
        >
          NOSOTROS
        </Text>
        <picture className="flex md:hidden overflow-hidden rounded-b-full   w-[358px] h-[473px] max-h-[473px] relative">
          <Image
            src="/images/last-section-bg.webp"
            alt="About us"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover size-full"
          />
        </picture>

        <Text
          as="p"
          font={poppins.className}
          className="text-[24px] text-white leading-[24px]  md:leading-[30px]"
        >
          Somos una agencia ecoturística comunitaria originaria del estado de
          Yucatán, co México conformada por jóvenes de origen maya, ofrecemos
          servicios especializados como: recorridos de interpretación ambiental,
          observación de aves, turismo rural y turismo holístico. El diseño de
          las rutas y la calidad de nuestros servicios se ofrecen para todo
          aquel que busca alternativas de recreación a través del contacto con
          la naturaleza y pueblos autóctonos de la península de Yucatán, México.
        </Text>
        <ButtonMain href="/about">
          <Text
            as="span"
            font={poppins.className}
            className="text-white text-[16px] leading-[21px]"
          >
            Conoce nuestras rutas
          </Text>
        </ButtonMain>
      </div>
      <div className="col-start-1 md:col-start-3 col-end-6 md:col-end-6 row-start-3 md:row-start-1 row-end-4 md:row-end-2 flex gap-12">
        <picture className="md:hidden overflow-hidden rounded-3xl relative">
          <Image
            src="/images/team-xocen.webp"
            alt="About us"
            width={754}
            height={511}
            className="object-cover size-full"
          />
        </picture>
        <picture className="hidden md:flex overflow-hidden rounded-b-full   w-[358px] h-[473px] max-h-[473px] relative">
          <Image
            src="/images/last-section-bg.webp"
            alt="About us"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover size-full"
          />
        </picture>
        <picture className="hidden md:flex overflow-hidden rounded-b-full w-[358px] h-[473px] max-h-[473px] relative">
          <Image
            src="/images/about-guides.webp"
            alt="About us"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover size-full"
          />
        </picture>
      </div>
      <div className="row-start-5 md:row-start-3 row-end-6 md:row-end-5 col-start-1 col-end-6 md:col-end-4 flex flex-col gap-8 ">
        <picture className="hidden md:flex overflow-hidden rounded-3xl relative">
          <Image
            src="/images/team-xocen.webp"
            alt="About us"
            width={754}
            height={511}
            className="object-cover size-full"
          />
        </picture>
        <div className="flex md:hidden gap-8 justify-center w-full">
          <picture className="flex md:hidden overflow-hidden  relative rounded-full w-[184px] h-[316px]">
            <Image
              src="/images/xocen-happy.webp"
              alt="About us"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" object-cover size-full"
            />
          </picture>
          <picture className="flex md:hidden overflow-hidden rounded-full relative w-[184px] h-[316px]">
            <Image
              src="/images/young-team.webp"
              alt="About us"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" object-cover size-full"
            />
          </picture>
        </div>
        <Text
          font={poppins.className}
          as="p"
          className="text-[24px] text-white leading-[30px] text-center md:text-left"
        >
          Ofrecemos rutas turísticas personalizadas de Naturaleza y Cultura
          Maya, con guías certificado por la Secretaría de Turismo (SECTUR) en
          la modalidad de:
        </Text>
        <Text
          font={poppins.className}
          as="p"
          className="text-[24px] md:text-[24px] text-white leading-[30px] text-center md:text-left"
        >
          Turismo Orientado hacia{' '}
          <Text
            font={poppins.className}
            className="text-[24px]  leading-[30px]"
          >
            la Naturaleza NOM-09-TUR-2002 Y NOM-08-TUR-2002
          </Text>{' '}
          Turismo de carácter cultural;
        </Text>
        <Text
          font={poppins.className}
          as="p"
          className="text-[24px] text-white leading-[30px] text-center md:text-left"
        >
          Siendo la observación de aves e inmersión en la cultura Maya nuestras
          especialidades.
        </Text>
      </div>
      <div className="flex flex-col gap-8  col-start-1 md:col-start-4 col-end-6  row-start-4 md:row-start-2 row-end-5 md:row-end-5">
        <hr className="h-2 bg-white w-[20%]" />
        <div className="flex flex-col gap-4">
          <Text
            font={alfaSlabOne.className}
            as="h2"
            className="text-[32px] text-white leading-[32px] uppercase"
          >
            Misión
          </Text>
          <Text
            font={poppins.className}
            as="p"
            className="text-[24px] text-white leading-[30px]"
          >
            Consolidar la península de Yucatán como destino de observación de
            aves a través rutas turísticas de naturaleza y cultura Maya, sumando
            esfuerzos con proyectos ecoturísticos comunitarios y guías locales.
            Consolidar la península de Yucatán como destino de observación de
            aves a través rutas turísticas de naturaleza y cultura Maya, sumando
            esfuerzos con proyectos ecoturísticos comunitarios y guías locales.{' '}
          </Text>
        </div>
        <div className="flex flex-col gap-4">
          <Text
            font={alfaSlabOne.className}
            as="h2"
            className="text-[32px] text-white leading-[32px] uppercase text-right md:text-left"
          >
            VISIÓN
          </Text>
          <Text
            font={poppins.className}
            as="p"
            className="text-[24px] text-white leading-[30px] text-right md:text-left"
          >
            En 2026 ser una empresa consolidada con reconocimiento internacional
            y de primer nivel dedicada al eco-turismo y turismo comunitario, con
            certificación en el máximo reconocimiento que otorga la Secretaría
            de Turismo; que avala la adopción de las mejores prácticas y
            distinción de empresa turística modelo, del programa Moderniza
            México, Distintivo M (Ecoturismo).
          </Text>
        </div>
        <div className="flex flex-col gap-4">
          <Text
            font={alfaSlabOne.className}
            as="h2"
            className="text-[32px] text-white leading-[32px] uppercase"
          >
            VALORES
          </Text>
          <Text
            font={poppins.className}
            as="p"
            className="text-[24px] text-white leading-[30px]"
          >
            Trabajo en equipo, Servicio con calidez, Innovación, Respeto,
            Compromiso, Confianza, Flexibilidad y Honradez.
          </Text>
        </div>
      </div>
      <div className="col-start-1 col-end-6 row-start-6 md:row-start-5 row-end-7 md:row-end-6 flex gap-4 auto-rows-auto items-center md:items-start">
        <div className="flex md:hidden w-full justify-center">
          <picture className="flex overflow-hidden rounded-b-full   w-[358px] h-[473px] max-h-[473px] relative">
            <Image
              src="/images/about-guides.webp"
              alt="logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="size-full object-cover"
            />
          </picture>
        </div>
        <picture className="hidden md:flex overflow-hidden rounded-3xl flex-1 h-[260px]">
          <Image
            src="/images/guides.webp"
            alt="logo"
            width={412}
            height={260}
            className="size-full object-cover"
          />
        </picture>
        <picture className="hidden md:flex overflow-hidden rounded-3xl flex-1 h-[260px]">
          <Image
            src="/images/ritual-about.webp"
            alt="logo"
            width={412}
            height={260}
            className="size-full  object-cover"
          />
        </picture>
        <picture className="hidden md:flex overflow-hidden rounded-3xl flex-1 h-[260px]">
          <Image
            src="/images/xocen-happy.webp"
            alt="logo"
            width={412}
            height={260}
            className="size-full object-cover"
          />
        </picture>
      </div>
    </section>
  )
}

export default AboutPage
