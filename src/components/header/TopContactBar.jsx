'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import clsx from 'clsx'
import { useTranslate } from '@/utils/translate/translate'

const phone = '+34 652 92 11 77'
const phoneHref = 'tel:+34652921177'
const whatsappHref = 'https://wa.me/34652921177'
const email = 'medesteticasd@gmail.com'
const emailHref = 'mailto:medesteticasd@gmail.com'
const clinicLat = 41.81647
const clinicLng = 3.06738
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${clinicLat},${clinicLng}`
const address = 'Carrer Pineda del Mar 27A, Platja d’Aro'

const HIDE_SCROLL_Y = 96
const SHOW_SCROLL_Y = 48

function ContactLink({
  href,
  icon: Icon,
  children,
  external = false,
  className,
  ...props
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={clsx(
        'inline-flex min-w-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-foreground-soft transition',
        'hover:bg-white hover:text-primary hover:shadow-[0_8px_22px_rgba(0,119,168,0.08)]',
        className,
      )}
      {...props}
    >
      <Icon size={14} className="shrink-0 text-primary" />
      <span className="truncate">{children}</span>
    </a>
  )
}

export default function TopContactBar() {
  const [hidden, setHidden] = useState(false)
  const hiddenRef = useRef(false)
  const rafRef = useRef(null)

  const tPhone = useTranslate('Позвонить в клинику')
  const tWhatsapp = useTranslate('Написать в WhatsApp')
  const tEmail = useTranslate('Написать на почту')
  const tMap = useTranslate('Открыть адрес на карте')
  const tHours = useTranslate('Пн–Сб: 09:00–20:00')

  useEffect(() => {
    const updateHiddenState = () => {
      const scrollY = window.scrollY || 0
      const isHidden = hiddenRef.current

      if (!isHidden && scrollY > HIDE_SCROLL_Y) {
        hiddenRef.current = true
        setHidden(true)
        return
      }

      if (isHidden && scrollY < SHOW_SCROLL_Y) {
        hiddenRef.current = false
        setHidden(false)
      }
    }

    const onScroll = () => {
      if (rafRef.current) return

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        updateHiddenState()
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateHiddenState()

    return () => {
      window.removeEventListener('scroll', onScroll)

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div
      className={clsx(
        'hidden border-b border-background-border/70 transition-all duration-300 md:block',
        hidden
          ? 'pointer-events-none max-h-0 -translate-y-full opacity-0'
          : 'max-h-10 translate-y-0 opacity-100',
      )}
    >
      <div className="container-app flex h-10 items-center justify-between gap-4 overflow-hidden">
        <div className="flex min-w-0 items-center gap-1">
          <ContactLink
            href={phoneHref}
            icon={Phone}
            className="shrink-0"
            aria-label={tPhone}
          >
            {phone}
          </ContactLink>

          <ContactLink
            href={whatsappHref}
            icon={MessageCircle}
            external
            className="shrink-0"
            aria-label={tWhatsapp}
          >
            WhatsApp
          </ContactLink>

          <ContactLink
            href={emailHref}
            icon={Mail}
            className="hidden lg:inline-flex"
            aria-label={tEmail}
          >
            {email}
          </ContactLink>
        </div>

        <div className="flex min-w-0 items-center gap-1">
          <span className="hidden shrink-0 rounded-full border border-primary/20 bg-white/60 px-3 py-1.5 text-xs font-semibold text-primary shadow-[0_6px_16px_rgba(0,119,168,0.04)] backdrop-blur-sm lg:inline-flex">
            {tHours}
          </span>

          <ContactLink
            href={mapsHref}
            icon={MapPin}
            external
            className="max-w-[340px]"
            aria-label={tMap}
          >
            {address}
          </ContactLink>
        </div>
      </div>
    </div>
  )
}
