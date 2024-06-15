import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { cn } from '@/lib/utils'
import TransitionProvider from '@/components/ui/transition-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Xocen Birding',
  description: 'xocen birding'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-layout-color')}>
        <TransitionProvider>
          <Header />
          <main className="flex min-h-[calc(100vh-668px)] flex-col items-center justify-between mx-auto">
            {children}
          </main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  )
}
export default RootLayout
