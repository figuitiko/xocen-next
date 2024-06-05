import localFont from 'next/font/local'
import {
  Roboto,
  Montserrat,
  Alfa_Slab_One,
  Abel,
  Alike,
  Rye,
  Abril_Fatface,
  Rakkas,
  Fascinate_Inline,
  Macondo
} from 'next/font/google'

export const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['cyrillic-ext', 'greek']
})
export const montserrat = Montserrat({
  weight: ['400', '500', '700', '900'],
  subsets: ['cyrillic-ext', 'latin']
})
export const alfaSlabOne = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400']
})

export const abel = Abel({
  subsets: ['latin'],
  weight: ['400']
})
export const freight = localFont({ src: './Freight-Text-Bold.otf' })
export const americaBreweryRough = localFont({
  src: './american-brewery-rough.ttf'
})
export const alike = Alike({
  subsets: ['latin'],
  weight: ['400']
})
export const rye = Rye({
  subsets: ['latin'],
  weight: ['400']
})
export const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400']
})

export const rakkas = Rakkas({
  subsets: ['latin'],
  weight: ['400']
})
export const facinateInline = Fascinate_Inline({
  subsets: ['latin'],
  weight: ['400']
})
export const macondo = Macondo({
  subsets: ['latin'],
  weight: ['400']
})
