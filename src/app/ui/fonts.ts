import { Alfa_Slab_One, Rakkas, Poppins } from 'next/font/google'

export const alfaSlabOne = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400']
})

export const rakkas = Rakkas({
  subsets: ['latin'],
  weight: ['400']
})

export const poppins = Poppins({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin-ext', 'latin']
})
