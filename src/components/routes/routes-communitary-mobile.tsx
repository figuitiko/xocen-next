import React from 'react'
import RoutesMobileView from './routes-mobile-view'

const RoutesCommunitaryMobile = () => {
  return (
    <RoutesMobileView
      heading={{
        textHeading: 'turismo comunitario',
        headingClassName: 'text-main-200'
      }}
      img={{
        imgSrc: '/images/communitary.webp',
        imgAlt: 'Comunitario'
      }}
      content={{
        content:
          'El turismo comunitario es una forma de turismo que se realiza en comunidades rurales, en donde los visitantes pueden convivir con los habitantes de la comunidad, conocer sus costumbres, tradiciones, cultura y forma de vida. Este tipo de turismo permite a los visitantes conocer la realidad de las comunidades rurales, y contribuir al desarrollo económico y social de las mismas. Además, el turismo comunitario promueve la conservación del medio ambiente y la preservación de la cultura local.'
      }}
      recommendationsProps={{
        recommendations: [
          {
            title: 'Recomendaciones',
            description:
              'Llevar ropa cómoda y Zapatos cómodos. Repelente biodegradable. Cámara. Gorra o sombrero.'
          },
          {
            title: 'Incluye',
            description: 'Transporte Valladolid- Xocen-Valladolid Comida.'
          }
        ],
        className: 'max-w-[291px] text-brand',
        textClassName: 'text-main-200',
        paragraphsClassName: 'text-brand'
      }}
    />
  )
}

export default RoutesCommunitaryMobile
