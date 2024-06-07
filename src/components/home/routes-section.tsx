import Image from 'next/image'
import { Text } from '../ui/text'
import { alfaSlabOne, rakkas, roboto } from '@/app/ui/fonts'
import { ButtonMain } from '../buttons'
import CardRoutes from './card-routes'

const RoutesSection = () => {
  return (
    <section className="flex flex-col py-12 max-w-[1200px] w-full">
      <div className="flex w-full">
        <div className="md:flex-1 flex flex-col p-8 pr-0">
          <picture className="hidden md:flex">
            <Image
              src="/images/logo-routes.png"
              alt="logo"
              width={341}
              height={34}
              className="object-cover size-auto"
            />
          </picture>
          <picture className="flex md:hidden">
            <Image
              src="/images/logo-routes.png"
              alt="logo"
              width={153}
              height={34}
              className="object-cover size-auto"
            />
          </picture>
          <div className="flex flex-col gap-4">
            <Text
              as="h2"
              font={rakkas.className}
              className="w-[50%] md:w-full text-[50px] md:text-[112px] text-main-100 leading-[72px] md:leading-[148px] uppercase"
            >
              Rutas
            </Text>
            <Text
              as="p"
              font={roboto.className}
              className="text-[16px] md:text-[24px] text-brand-text leading-[21px] md:leading-[36px] font-normal w-[80%] "
            >
              El diseño de las rutas y la calidad de nuestros servicios se
              ofrecen para todo aquel que busca alternativas de recreación a
              través del contacto con la naturaleza y pueblos autóctonos de la
              península de Yucatán, México.
            </Text>
            <ButtonMain href="/routes">
              {
                <Text
                  as="span"
                  font={alfaSlabOne.className}
                  className="text-white  text-sm md:text-base font-normal truncate"
                >
                  Ver rutas
                </Text>
              }
            </ButtonMain>
          </div>
        </div>
        <div className="md:flex-1 relative">
          <picture className=" hidden md:flex -z-30 absolute right-0 -top-[380px] w-[800px] ">
            <Image
              src="/images/hero-routes.webp"
              alt="About Us"
              width={1000}
              height={1800}
              className="object-cover size-full"
            />
          </picture>
          <picture className="flex max-[370px]:hidden  md:hidden min-w-[187px]">
            <Image
              src="/images/hero-routes-mobile.webp"
              alt="About Us"
              width={400}
              height={667}
              className="object-cover size-full"
            />
          </picture>
        </div>
      </div>
      <div className=" hidden md:flex mt-32 gap-2 flex-wrap">
        <CardRoutes
          title="Taller gastronómico regional"
          description="Realización del Piib, buscar leña y la preparación de la comida con los ingredientes regionales."
          imgUrl="/images/card-3.webp"
        />
        <CardRoutes
          title="Xocen Birding"
          description="Disfrutar y observar la diversidad de aves existentes, así como la imponente, mágica y frondosa selva."
          imgUrl="/images/card-1.webp"
        />
        <CardRoutes
          title="Turismo Holístico"
          description="Medicina y limpia espiritual con masajes."
          imgUrl="/images/card-2.webp"
        />
      </div>
    </section>
  )
}

export default RoutesSection
