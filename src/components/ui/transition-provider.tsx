'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
const pathMapper = {
  '/': 'Inicio',
  '/guides': 'Guías',
  '/routes': 'Rutas',
  '/about': 'Nosotros',
  '/contact': 'Contacto'
} as const

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen">
        <motion.div
          className="h-screen w-screen fixed bg-main-200 rounded-b-[100px] z-40"
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-main-200 text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {pathMapper[pathName as keyof typeof pathMapper]}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-light-brand rounded-t-[100px] bottom-0 z-30"
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
