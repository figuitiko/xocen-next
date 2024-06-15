import SectionWrapper from '@/components/ui/section-wrapper'
import { Text } from '@/components/ui/text'
import { rakkas } from '../ui/fonts'
import CardGuides from '@/components/guides/guides-card'
import Image from 'next/image'

const GUIDES = [
  {
    srcImg: '/images/guide-1.webp',
    altImg: 'Victoria de la Cruz Estrella',
    guideName: 'Victoria de la Cruz Estrella',
    subTitle: 'Guía Certiificada',
    description:
      'Nacida en Tizimín, Yucatán, se ha destacado como conservacionista y guía de naturaleza. Posee certificaciones como Guía de Naturaleza Acreditada por la NOM-09-TUR-2002 y Técnico en Monitoreo Comunitario de Aves (NABCI-CONABIO), así como en guías culturales y artesanales  con la acreditación NOM-08-TUR-2002 . Es licenciada en Desarrollo Turístico y actualmente dirige la Red Comunitaria de Artesanos de Naturaleza.',
    socialArray: [
      {
        srcImg: '/images/fb-guide.svg',
        altImg: 'Facebook',
        href: 'https://www.facebook.com/victoria.delacruzestrella'
      },
      {
        srcImg: '/images/ig-guide.svg',
        altImg: 'Instagram',
        href: 'https://www.instagram.com/victoriadelacruzestrella/'
      },
      {
        srcImg: '/images/tw-guide.svg',
        altImg: 'Twitter',
        href: 'https://twitter.com/victoriadelacru'
      }
    ]
  },

  {
    srcImg: '/images/guide-2.webp',
    altImg: 'Miguel Angel Nahuat Tun',
    guideName: 'Miguel Angel Nahuat Tun',
    subTitle: 'Guía Certiificado',
    description:
      'Nació en la comunidad de Xocén, Valladolid en el estado de Yucatán en el año del 2014 recibe su certificado como guia de turista Especializado  de la Nom-09-Tur-2002  en la Modalidad Turismo Orientado hacia la Naturaleza y de ahí nace el amor a la cultura, la realización de recorridos rurales y de naturaleza con enfoques turísticos trabajo en el proyecto de Reginalizacion Turistica de Mexico y como subdirector de Turismo en la ciudad de Valladolid Yucatan, Egresado de la Universidad de Oriente en la Licenciatura en Desarrollo Turístico, actualmente forma parte de la Xocen Birding Trail.',
    socialArray: [
      {
        srcImg: '/images/fb-guide.svg',
        altImg: 'Facebook',
        href: 'https://www.facebook.com/victoria.delacruzestrella'
      },
      {
        srcImg: '/images/ig-guide.svg',
        altImg: 'Instagram',
        href: 'https://www.instagram.com/victoriadelacruzestrella/'
      },
      {
        srcImg: '/images/tw-guide.svg',
        altImg: 'Twitter',
        href: 'https://twitter.com/victoriadelacru'
      }
    ]
  },
  {
    srcImg: '/images/guide-3.webp',
    altImg: 'Ángel Fernando Castillo Cime',
    guideName: 'Ángel Fernando Castillo Cime',
    subTitle: 'Guía Certiificado',
    description:
      'Guía con  un profundo entendimiento de las aves en la Península de Yucatán, su vista y oído son fantásticos para detectar e identificar aves, tiene conocimiento sobre la historia natural de la región y comprende los rangos de las aves.Sus conexiones familiares con los pueblos locales   de las Ruinas de Chichén Itzá le permiten compartir personal e íntimamente su cultura lejos de los sitios comerciales que a menudo visitan otros tours. Es cálido, humilde y paciente.',
    socialArray: [
      {
        srcImg: '/images/fb-guide.svg',
        altImg: 'Facebook',
        href: 'https://www.facebook.com/victoria.delacruzestrella'
      },
      {
        srcImg: '/images/ig-guide.svg',
        altImg: 'Instagram',
        href: 'https://www.instagram.com/victoriadelacruzestrella/'
      },
      {
        srcImg: '/images/tw-guide.svg',
        altImg: 'Twitter',
        href: 'https://twitter.com/victoriadelacru'
      }
    ]
  },
  {
    srcImg: '/images/guide-4.webp',
    altImg: 'José Domiliano May Dzib',
    guideName: 'José Domiliano May Dzib',
    subTitle: 'Guía Espiritual',
    description:
      'A fungió como Sacristán en la Iglesia de Nuestra Señora de la Asunción y rezador. Además, comenzó a practicar el lado espiritual y a propiciar ceremonias mayas, incluidas las bodas mayas.Asimismo, posee conocimientos ancestrales sobre historias y leyendas de la comunidad de Xocén, como la historia de la Santa Cruz y el del cenote sagrado, entre otras leyendas de la comunidad.',
    socialArray: [
      {
        srcImg: '/images/fb-guide.svg',
        altImg: 'Facebook',
        href: 'https://www.facebook.com/victoria.delacruzestrella'
      },
      {
        srcImg: '/images/ig-guide.svg',
        altImg: 'Instagram',
        href: 'https://www.instagram.com/victoriadelacruzestrella/'
      },
      {
        srcImg: '/images/tw-guide.svg',
        altImg: 'Twitter',
        href: 'https://twitter.com/victoriadelacru'
      }
    ]
  }
]

const GuidePage = () => {
  return (
    <>
      <SectionWrapper className="flex">
        <div className="w-full flex items-center flex-col text-[48px]">
          <Text
            as="h1"
            font={rakkas.className}
            className="text-main-100 text-[48px] leading-[48px] uppercase"
          >
            Nuestros
          </Text>
          <Text
            as="h2"
            font={rakkas.className}
            className="text-main-100 text-[70px] leading-[57px] uppercase"
          >
            Guias
          </Text>
        </div>
        <div className="flex gap-4 w-full justify-center flex-col lg:flex-row ">
          {GUIDES.map((guide, index) => (
            <CardGuides key={index} {...guide} />
          ))}
        </div>
      </SectionWrapper>
      <section className="flex w-full h-[400px] md:h-screen">
        <picture className="relative size-full">
          <Image
            src="/images/bird-guides.webp"
            alt="Guía Certificado"
            fill
            className="object-cover  size-full"
          />
        </picture>
      </section>
    </>
  )
}

export default GuidePage
