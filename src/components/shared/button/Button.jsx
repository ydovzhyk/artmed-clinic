'use client'

import clsx from 'clsx'
import { useTranslate } from '@/utils/translate/translate'

const baseClasses =
  'inline-flex h-[40px] items-center justify-center gap-2 rounded-full border font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-55'

const variantClasses = {
  primary:
    'border-transparent text-white bg-[linear-gradient(135deg,#005f86_0%,#0077a8_48%,#16b6d9_100%)] shadow-[0_12px_30px_rgba(0,119,168,0.16)] hover:translate-y-[-1px] hover:bg-[linear-gradient(135deg,#006f9d_0%,#008fc8_48%,#28c7ea_100%)] hover:shadow-[0_16px_36px_rgba(0,119,168,0.20)]',

  secondary:
    'border-[rgba(0,119,168,0.18)] text-primary bg-white hover:border-[rgba(22,182,217,0.45)] hover:bg-[rgba(226,248,253,0.9)] hover:shadow-[0_10px_28px_rgba(0,119,168,0.12)]',

  ghost:
    'border-transparent text-foreground-soft bg-transparent hover:bg-[rgba(0,119,168,0.08)] hover:text-primary',
}

const sizeClasses = {
  sm: 'px-4 text-sm',
  md: 'px-5 text-sm',
  lg: 'px-6 text-sm',
}

function SideVisual({ icon, image, alt = '' }) {
  if (image) {
    return (
      <img src={image} alt={alt} className="h-4 w-4 shrink-0 object-contain" />
    )
  }

  if (icon) {
    return <span className="flex shrink-0 items-center">{icon}</span>
  }

  return null
}

function isPrimitiveText(value) {
  return typeof value === 'string' || typeof value === 'number'
}

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  translate = true,
  loadingText = 'Загрузка...',
  className,
  leftIcon,
  rightIcon,
  leftImage,
  rightImage,
  leftImageAlt = '',
  rightImageAlt = '',
  ...props
}) {
  const isDisabled = disabled || loading

  const textToTranslate =
    translate && isPrimitiveText(children) ? String(children) : ''

  const translatedChildren = useTranslate(textToTranslate)
  const translatedLoadingText = useTranslate(translate ? loadingText : '')

  const content =
    translate && isPrimitiveText(children) ? translatedChildren : children

  const resolvedLoadingText = translate
    ? translatedLoadingText || loadingText
    : loadingText

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          <span>{resolvedLoadingText}</span>
        </>
      ) : (
        <>
          <SideVisual icon={leftIcon} image={leftImage} alt={leftImageAlt} />
          {content ? <span>{content}</span> : null}
          <SideVisual icon={rightIcon} image={rightImage} alt={rightImageAlt} />
        </>
      )}
    </button>
  )
}
