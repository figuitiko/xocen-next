import Image from 'next/image'
import React from 'react'
import { NavLink } from '../ui/nav-links'
import { Text } from '../ui/text'

import { cva } from 'class-variance-authority'

export const CONFIG = {
  WHATSAPP_NUMBER: '+52 985 211 7095',
  MENU_ITEMS: [
    { name: 'Inicio', href: '/', id: 1 },
    { name: 'Nosotros', href: '/about', id: 2 },
    { name: 'Rutas', href: '/routes', id: 3 },
    { name: 'Guias', href: '/guides', id: 4 },
    { name: 'Contact', href: '/contact', id: 5 }
  ]
}
const durationVariant = cva(
  'h-0  border-b-0 px-8 py-4  flex items-center justify-center  transition-all    overflow-hidden ease-in-out',
  {
    variants: {
      variantDuration: {
        1: 'duration-300',
        2: 'duration-400',
        3: 'duration-500',
        4: 'duration-6000',
        5: 'duration-700'
      }
    }
  }
)

export const NavBar = () => {
  return (
    <div className="px-4 flex items-center bg-main-200 py-4 w-full  max-w-[1200px]">
      <div className="flex flex-col md:flex-row  gap-2 md:gap-8">
        <a href="/">
          <picture>
            <Image
              src="/images/footer-logo.png"
              alt="logo"
              width={150}
              height={150}
            />
          </picture>
        </a>
        <a
          className="flex gap-4 items-center text-white"
          href="whatsapp://send?phone=+529852117095"
        >
          <picture>
            <Image
              src="/images/whatsapp.svg"
              alt="logo"
              width={40}
              height={40}
              className="fill-white h-auto w-auto"
            />
          </picture>
          <span className="text-white">{CONFIG.WHATSAPP_NUMBER}</span>
        </a>
      </div>
      <div className="text-white ml-auto flex  gap-4">
        <div className="hidden md:flex gap-4 items-center">
          <a
            href="https://www.facebook.com/XOCENBIRDINGTRAIL"
            target="_blank"
            rel="noreferrer"
          >
            <picture>
              <Image
                src="/images/fb.svg"
                alt="facebook"
                width={40}
                height={40}
                className="fill-white h-auto w-auto"
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
                src="/images/instagram.svg"
                alt="logo"
                width={40}
                height={40}
                className="fill-white h-auto w-auto"
              />
            </picture>
          </a>
        </div>
        <div className="relative h-full w-8 flex flex-col items-center justify-center">
          <input
            id="menu-toggle"
            className="[&:checked~nav]:opacity-100 [&:not(:checked~nav):opacity-0] [&:checked~nav>ul>li]:h-12 [&:checked~nav>ul>li]:border-2 [&:checked~nav>ul>li]:border-orange-400  [&:not(:checked~nav>ul>li):h-0]  absolute inset-0 size-5 opacity-0 z-50 [&:checked~div]:before:rotate-[405deg] [&:checked~div]:before:mt-0 [&:not(:checked~nav)]:before:rotate-[-405deg] [&:checked~div]:after:rotate-[-405deg] [&:checked~div]:after:mt-0 [&:not(:checked~nav)]:after:rotate-[405deg] [&:checked~div]:border-0 [&:checked~div]:bg-transparent"
            type="checkbox"
          />
          <div
            className="block after:block before:block bg-white after:bg-white before:bg-white  md:hidden cursor-pointer absolute
          before:absolute after:absolute h-1 before:h-1 after:h-1 w-7  before:w-7  after:w-7 border-2 before:border-2 after:border-2 border-orange-400 before:border-orange-400 after:border-orange-400 transform before:transform after:transform transition-transform after:transition-transform before:transition-transform  duration-400ms after:duration-400ms before:duration-400ms ease-custom-bezier before:ease-custom-bezier after:ease-custom-bezier before:content-[' '] after:content-[' '] before:-mt-[10px] after:mt-[6px] before:-ml-[2px] after:-ml-[2px]"
          ></div>
          <nav className="flex md:hidden opacity-0  z-50 transition-all ease-in-out duration-200 absolute right-4 top-6 bg-main-100 ">
            <ul className="flex flex-col md:flex-row  uppercase flex-wrap">
              {CONFIG.MENU_ITEMS.map((item) => (
                <li
                  key={item.id}
                  className={durationVariant({
                    variantDuration: item.id as 1 | 2 | 3 | 4 | 5
                  })}
                >
                  <NavLink href={item.href}>
                    <Text className="text-sm text-light-brand">
                      {item.name}
                    </Text>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <nav className=" hidden md:flex">
          <ul className="flex flex-col items-center justify-center md:flex-row gap-4 uppercase flex-wrap">
            {CONFIG.MENU_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink href={item.href}>
                  <Text className="text-sm text-light-brand">{item.name}</Text>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
