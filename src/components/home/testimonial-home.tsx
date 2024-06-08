import React from 'react'
import { Text } from '../ui/text'
import { rakkas } from '@/app/ui/fonts'
import TestimonialCard from './testimonial-card'

const TESTIMONIAL_CARDS = [
  {
    imgUrl: '/images/avatar-test.webp',
    title: 'Sophie Tremblay',
    subTitle: 'Cliente Turismo Holístico',
    description:
      'Visitar el observatorio de pájaros en Xocen fue una experiencia maravillosa. Los guías eran expertos y apasionados por la avifauna local. Pudimos observar especies únicas en su hábitat natural. La organización del tour fue impecable y el paisaje espectacular. Recomiendo esta actividad a todos los amantes de la naturaleza. Sin duda, volveremos pronto para disfrutar de más avistamientos y aprender más sobre estas aves.'
  },
  {
    imgUrl: '/images/testimonial-1.webp',
    title: 'Liam McDonald',
    subTitle: 'Cliente Turismo Holístico',
    description:
      'El tour de observación de pájaros en Xocen superó todas mis expectativas. Desde el primer momento, la atención y el conocimiento del personal fueron excepcionales. Logramos ver una gran variedad de especies que nunca antes había visto. El entorno es simplemente hermoso y la experiencia es enriquecedora. Es un destino ideal para quienes buscan conectar con la naturaleza. Definitivamente, una actividad imperdible en Yucatán.'
  },
  {
    imgUrl: '/images/testimonial-2.webp',
    title: 'Aisha Singh',
    subTitle: 'Cliente Turismo Holístico',
    description:
      'Nuestro viaje a Xocen para observar pájaros fue increíble. El guía nos llevó a los mejores lugares para avistar especies exóticas. La biodiversidad de la zona es impresionante y el paisaje es perfecto para relajarse. Además, aprendimos mucho sobre las aves locales y su comportamiento. Todo estuvo muy bien organizado y se nota el compromiso con la conservación del medio ambiente. Sin duda, una experiencia inolvidable.'
  }
]

const TestimonialHome = () => {
  return (
    <div className="flex flex-col py-12 max-w-[1200px] w-full gap-4">
      <div className="flex w-full  justify-center">
        <Text
          as="h2"
          font={rakkas.className}
          className="text-main-100 text-[48px]  mx:text-[64px] leading-[42px] md:leading-[64px] uppercase"
        >
          TESTIMONIOS
        </Text>
      </div>
      <div className="flex flex-col md:flex-row gap-4 px-4 md:px-none">
        {TESTIMONIAL_CARDS.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            imgUrl={testimonial.imgUrl}
            title={testimonial.title}
            subTitle={testimonial.subTitle}
            description={testimonial.description}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialHome
