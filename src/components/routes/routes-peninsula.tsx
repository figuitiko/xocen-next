import PictureWrapper from '../ui/picture-wrapper'
import SectionWrapper from '../ui/section-wrapper'
import { Text } from '../ui/text'
import HeadingRouting from './heading-routing'

const RoutesPeninsula = () => {
  return (
    <SectionWrapper className="bg-main-200">
      <HeadingRouting
        title=" Expedición en la península (birding)"
        content="La expedición al sur de la península de Yucatán es una gran oportunidad para conocer la gran diversidad de aves de la selva más representativa, conservada y con vestigios de los primeros asentamientos mayas prehispánicos de México.
Esta expedición incluye visita en los sitios de mayor interés para la observación de aves al sur de la península de Yucatán, esta región posee especies, casi de manera exclusiva, y otros que son más fáciles de encontrar en ese sitio que en cualquier otro lugar de la península."
        image1="/images/img-bird-2.png"
        image2="/images/img-bird-1.png"
      />
      <div className="flex gap-4 md:flex-col lg:flex-row">
        <div>
          <Text as="p">
            En esta expedición se visitarán puntos altamente recomendado para la
            observación de aves Iniciaremos esta expedición en Laguna azul,
            ubicada al norte del municipio de Felipe Carrillo Puerto. Este es un
            proyecto de ecoturismo administrado por gente de la comunidad de
            Señor, que ofrecen recorridos en los senderos establecidos y visitas
            en sus bellas lagunas y cenotes. En este lugar se pueden avistar
            especies endémicas y especies representativas de lagunas, pastizales
            y remanentes de selva mediana sub perennifolia.
          </Text>
        </div>
        <div className="flex-1 flex gap-4  ">
          <PictureWrapper
            src="/images/carpeter-full.webp"
            alt="Peninsula"
            className="w-[280px] h-[629px]"
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <PictureWrapper
                src="/images/chipe-sulero.webp"
                alt="Peninsula"
                className="w-[224px] h-[319px]"
              />
              <PictureWrapper
                src="/images/telocote-sapo.webp"
                alt="Peninsula"
                className="w-[224px] h-[319px]"
              />
            </div>
            <PictureWrapper
              src="/images/maya-home.webp"
              alt="Peninsula"
              className="w-[457px] h-[252px]"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default RoutesPeninsula
