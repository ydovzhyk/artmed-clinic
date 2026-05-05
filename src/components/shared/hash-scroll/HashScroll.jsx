'use client'

import { useEffect } from 'react'

const scrollToHashSection = () => {
  const hash = window.location.hash
  if (!hash) return

  const id = hash.replace('#', '')
  if (!id) return

  window.requestAnimationFrame(() => {
    const section = document.getElementById(id)
    if (!section) return

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}

export default function HashScroll() {
  useEffect(() => {
    const timeoutId = window.setTimeout(scrollToHashSection, 80)

    window.addEventListener('hashchange', scrollToHashSection)

    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('hashchange', scrollToHashSection)
    }
  }, [])

  return null
}
