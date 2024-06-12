import React from 'react'
import RoutesMobileView from './routes-mobile-view'

const RoutesPeninsulaMobile = () => {
  return (
    <RoutesMobileView
      className="bg-main-200"
      heading={{
        textHeading: ' Expedición en la península (birding)'
      }}
      img={{
        imgSrc: '/images/parrot.webp',
        imgAlt: 'Comunitario'
      }}
      content={{
        content:
          'La expedición al sur de la península de Yucatán es una gran oportunidad para conocer la gran diversidad de aves de la selva más representativa, conservada y con vestigios de los primeros asentamientos mayas prehispánicos de México.Esta expedición incluye visita en los sitios de mayor interés para la observación de aves al sur de la península de Yucatán, esta región posee especies, casi de manera exclusiva, y otros que son más fáciles de encontrar en ese sitio que en cualquier otro lugar de la península.',
        contentClassName: 'text-white'
      }}
    />
  )
}

export default RoutesPeninsulaMobile
