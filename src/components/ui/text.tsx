import { freight } from '@/app/ui/fonts'
import { cn } from '@/lib/utils'
type Props<T extends React.ElementType> = {
  children: React.ReactNode
  as?: T
  font?: string
}

export type TextProps<T extends React.ElementType> = Props<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>

export const Text = <T extends React.ElementType = 'span'>({
  as,
  children,
  className,
  font = freight.className,
  ...others
}: TextProps<T>) => {
  const Component = as ?? 'span'

  return (
    <Component
      className={cn('text-2xl font-medium text-light-brand', font, className)}
      {...others}
    >
      {children}
    </Component>
  )
}
