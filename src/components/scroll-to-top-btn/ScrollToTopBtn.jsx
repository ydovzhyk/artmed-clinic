'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 250)
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    toggleVisibility()

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.history.replaceState(null, '', window.location.pathname)
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={clsx(
        'group fixed bottom-6 right-5 z-50 rounded-full p-[1px] transition-all duration-300 ease-out',
        'bg-[linear-gradient(135deg,#0077a8,#16b6d9)]',
        'shadow-[0_12px_28px_rgba(0,119,168,0.25)]',
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <span
        className={clsx(
          'pointer-events-none absolute left-1/2 top-[-12px] h-0 w-0 -translate-x-1/2',
          'border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent',
          'border-b-[#0077a8]',
          isVisible && 'animate-bounce',
        )}
      />

      <span
        className={clsx(
          'absolute inset-0 rounded-full opacity-0 blur-lg transition-opacity duration-300',
          'bg-[radial-gradient(circle,rgba(22,182,217,0.35)_0%,transparent_70%)]',
          'group-hover:opacity-100',
        )}
      />

      <span className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full border border-[rgba(207,232,242,0.8)] bg-white">
        <Image
          src="/images/clinic.png"
          alt="Scroll to top"
          width={40}
          height={40}
          className="h-[40px] w-[40px] object-contain transition-transform duration-300 group-hover:scale-105"
          draggable={false}
        />
      </span>
    </button>
  )
}
