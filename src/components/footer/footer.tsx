import React from 'react'
import { Text } from '../ui/text'
import { ButtonMain } from '../buttons'
import { abel, alfaSlabOne } from '@/app/ui/fonts'
import FooterNavbar from './footer-navbar'
export const FOOTER_CONTENT = {
  TEXT_SECTION: 'VEN Y',
  TEXT_HEADING: 'Vive tu futura experiencia con nosotros',
  BTN_TEXT: 'Contáctanos',
  TEXT_SUBHEADING:
    'Somos una empresa consolidada con reconocimiento internacional y de primer nivel dedicada al eco-turismo y turismo comunitario, con certificación en el máximo reconocimiento que otorga la Secretaría de Turismo',
  TEXT_FOOTER: 'Xocen Birding Trail.'
}

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex w-full flex-col gap-4 bg-main-200  items-center justify-center px-4 py-12 md:p-12">
      <div className="flex items-center  justify-center flex-col max-w-[1200px] gap-4 border-b-2 border-b-light-brand pb-8">
        <Text
          as="h4"
          className="text-[24px] md:text-[32px] font-normal  uppercase text-center"
          font={abel.className}
        >
          {FOOTER_CONTENT.TEXT_SECTION}
        </Text>
        <Text
          as="h3"
          className="text-[32px] md:text-[50px]  font-medium text-white tracking-normal leading-[42px] md:leading-[68.45px] text-center"
          font={alfaSlabOne.className}
        >
          {FOOTER_CONTENT.TEXT_HEADING}
        </Text>
        <Text
          as="p"
          className="text-[20px] font-normal text-white text-center max-w-[80%]"
          font={abel.className}
        >
          {FOOTER_CONTENT.TEXT_SUBHEADING}
        </Text>
        <ButtonMain href="/contact">
          {
            <Text
              as="span"
              font={alfaSlabOne.className}
              className="text-white  text-base font-normal"
            >
              {FOOTER_CONTENT.BTN_TEXT}
            </Text>
          }
        </ButtonMain>
        <Text
          as="p"
          className="text-white text-xs text-center font-normal"
          font={abel.className}
        >
          © {currentYear} {FOOTER_CONTENT.TEXT_FOOTER}
        </Text>
      </div>
      <FooterNavbar />
    </footer>
  )
}

export default Footer
