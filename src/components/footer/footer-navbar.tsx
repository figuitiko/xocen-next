import Image from 'next/image'
import { Text } from '../ui/text'

import { NavLink } from '../ui/nav-links'
import Link from 'next/link'

export const FOOTER_NAVBAR_CONTENT = {
  logo: '/images/footer-logo.png',
  links: [
    { href: '/about', text: 'Nosotros' },
    { href: '/routes', text: 'Rutas' },
    { href: '/guides', text: 'Guias' }
  ]
}

const FooterNavbar = () => {
  return (
    <div className="flex gap-8 flex-col md:flex-row justify-between w-full max-w-[1200px] items-center px-4">
      <Link href="/">
        <picture>
          <Image
            src={FOOTER_NAVBAR_CONTENT.logo}
            alt="logo"
            width={200}
            height={200}
          />
        </picture>
      </Link>
      <nav>
        <ul className="flex gap-12 w-full  items-center    flex-col md:flex-row">
          {FOOTER_NAVBAR_CONTENT.links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>
                <Text className="text-sm uppercase">{link.text}</Text>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-2 justify-center md:justify-start">
        <a
          href="https://www.facebook.com/XOCENBIRDINGTRAIL"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <Image
              src="/images/fb-circle.svg"
              alt="facebook"
              width={40}
              height={40}
              className="fill-white h-auto w-auto min-w-[40px] min-h-[40px]"
            />
          </picture>
        </a>
        <a
          href="https://www.instagram.com/xocenbirdingtrail/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <Image
              src="/images/ig-circle.svg"
              alt="logo"
              width={40}
              height={40}
              className="fill-white h-auto w-auto min-w-[40px] min-h-[40px]"
            />
          </picture>
        </a>
      </div>
    </div>
  )
}

export default FooterNavbar
