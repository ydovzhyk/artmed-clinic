'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'

export default function Logo({
  height = 56,
  className,
  imageClassName,
  priority = true,
}) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e) => {
    e.preventDefault()

    if (pathname !== '/') {
      router.push('/')
      return
    }

    window.history.replaceState(null, '', '/')

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <a
      href="/"
      onClick={handleClick}
      aria-label="Перейти на главную"
      className={clsx('group inline-flex items-center', className)}
    >
      <Image
        src="/images/logo.webp"
        alt="Логотип клиники"
        width={256}
        height={89}
        priority={priority}
        className={clsx(
          'w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]',
          imageClassName,
        )}
        style={{ height: `${height}px` }}
      />
    </a>
  )
}