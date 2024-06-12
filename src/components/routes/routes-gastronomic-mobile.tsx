import { rakkas } from '@/app/ui/fonts'
import SectionWrapperMobile from '../ui/section-wrapper-mobil'
import { Text } from '../ui/text'
import PictureWrapper from '../ui/picture-wrapper'
import HrMarker from '../ui/hr-marker'
import RecommendationsComponent from './recommendations-component'

const RoutesGastronomicMobile = () => {
  return (
    <SectionWrapperMobile className="bg-main-200">
      <Text
        as="h2"
        font={rakkas.className}
        className="text-[32px] max-w-[291px] leading-[40px]  text-center uppercase"
      >
        Taller gastronÓmico regional
      </Text>
      <PictureWrapper
        className="w-[291px] h-[312px]"
        src="/images/gastronomic-2.webp"
        alt="Gastronomic"
      />
      <Text
        as="p"
        className="text-[20px] max-w-[291px] leading-[32px] text-center font-normal"
      >
        El recorrido en Xocén, un pueblo en el centro del mundo, cerca de
        Valladolid, Yucatán, ofrece una experiencia única. Guiados por
        lugareños, exploraremos senderos que conectan con comunidades mayas,
        permitiendo disfrutar de la diversidad de aves y la exuberante selva.
        Este tour busca destacar la importancia de las aves en el planeta, así
        como en la cultura local, ofreciendo una experiencia sorprendente y
        gratificante. Podremos ver aves como los semilleros, carpinteros,
        calandrias, pirangas, palomas, trepatroncos, etc.
      </Text>
      <HrMarker className="bg-main-100" />
      <RecommendationsComponent
        className="max-w-[291px] "
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
    </SectionWrapperMobile>
  )
}

export default RoutesGastronomicMobile
