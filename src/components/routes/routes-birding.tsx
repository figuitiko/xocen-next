import PictureWrapper from '../ui/picture-wrapper'
import RecommendationsComponent from './recomendations-component'
import HeadingRouting from './heading-routing'
import SectionWrapper from '../ui/section-wrapper'

const RoutesBirding = () => {
  return (
    <SectionWrapper className="bg-main-200">
      <HeadingRouting
        image1="/images/img-bird-2.png"
        image2="/images/img-bird-1.png"
        title="Xocen Birding"
        content="El recorrido en Xocén, un pueblo en el centro del mundo, cerca de Valladolid, Yucatán, ofrece una experiencia única. Guiados por lugareños, exploraremos senderos que conectan con comunidades mayas, permitiendo disfrutar de la diversidad de aves y la exuberante selva. Este tour busca destacar la importancia de las aves en el planeta, así como en la cultura local, ofreciendo una experiencia sorprendente y gratificante. Podremos ver aves como los semilleros, carpinteros, calandrias, pirangas, palomas, trepatroncos, etc."
      />
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <RecommendationsComponent
          className="w-[30%]"
          recommendations={[
            {
              title: 'Recomendaciones',
              description:
                'Amante de la naturaleza. Llevar ropa cómoda y Zapatos cómodos. Repelente biodegradable Cámara fotográfica. Gorra o sombrero'
            },
            {
              title: 'Incluye',
              description:
                'Transporte de Valladolid- Xocen-Valladolid Almuerzo en una de las comunidades. Comida'
            }
          ]}
        />
        <div className="flex-1 grid gap-2 md:grid-cols-1 lg:grid-cols-3 md:grid-rows-4 lg:grid-rows-2">
          <div className="col-start-1 col-end-2 row-start-1 md:row-end-2 lg:row-end-3">
            <PictureWrapper
              src="/images/halcon.webp"
              className="w-[249px] md:h-[200px] lg:h-[416px]"
            />
          </div>
          <div className="md:col-start-1 lg:col-start-2 md:col-end-2 lg:col-end-3 md:row-start-2 lg:row-start-1 md:row-end-3 lg:row-end-2">
            <PictureWrapper
              src="/images/red-chest.webp"
              className="w-[249px] h-[200px] "
            />
          </div>
          <div className="md:col-star-1 lg:col-start-3 md:col-end-2 lg:col-end-4 md:row-start-3 lg:row-start-1 md:row-end-4 lg:row-end-2">
            <PictureWrapper
              src="/images/carpeter-full.webp"
              className="w-[249px] h-[200px]"
            />
          </div>
          <div className="md:col-start-1 lg:col-start-2 md:col-end-2 lg:col-end-4 md:row-start-4 lg:row-start-2 md:row-end-5 lg:row-end-3">
            <PictureWrapper
              src="/images/guides.webp"
              className="md:w-[249px] lg:w-[509px] h-[200px] "
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default RoutesBirding
