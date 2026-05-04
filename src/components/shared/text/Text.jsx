'use client'

import clsx from 'clsx'
import { useTranslate } from '@/utils/translate/translate'

const variantClasses = {
  hero: 'text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl',
  h1: 'text-3xl font-extrabold leading-tight tracking-tight md:text-4xl xl:text-5xl',
  h2: 'text-2xl font-extrabold leading-tight tracking-tight md:text-3xl xl:text-4xl',
  h3: 'text-xl font-bold leading-snug md:text-2xl',
  h4: 'text-lg font-bold leading-snug md:text-xl',

  body: 'text-base font-normal leading-7 md:text-lg',
  'body-sm': 'text-sm font-normal leading-6 md:text-base',
  caption: 'text-sm font-medium leading-5',
  label: 'text-sm font-semibold leading-5',
  button: 'text-sm font-bold leading-none',
  overline: 'text-xs font-bold uppercase tracking-[0.18em] leading-none',
}

const colorClasses = {
  default: 'text-foreground',
  soft: 'text-foreground-soft',
  muted: 'text-foreground-muted',
  faint: 'text-foreground-faint',

  primary: 'text-primary',
  brand: 'text-brand-blue',
  secondary: 'text-secondary',
  danger: 'text-danger',
  white: 'text-white',
}

export default function Text({
  as: Tag = 'p',
  variant = 'body',
  color = 'default',
  className,
  children,
  translate = true,
  caseMode = 'auto',
}) {
  const isPrimitive =
    typeof children === 'string' || typeof children === 'number'

  const translated = useTranslate(
    translate && isPrimitive ? String(children) : '',
    { caseMode },
  )

  return (
    <Tag
      className={clsx(
        variantClasses[variant] || variantClasses.body,
        colorClasses[color] || colorClasses.default,
        className,
      )}
    >
      {translate && isPrimitive ? translated : children}
    </Tag>
  )
}
