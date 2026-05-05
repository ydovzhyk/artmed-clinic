'use client'

import { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Text from '@/components/shared/text/Text'
import Logo from '@/components/shared/logo/Logo'
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

function FooterContact({ href, icon: Icon, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="flex min-h-11 items-center gap-2 rounded-xl py-2 text-sm font-medium text-foreground-soft transition hover:text-primary lg:min-h-0 lg:py-0"
    >
      <Icon size={16} className="shrink-0 text-primary" />
      <span className="min-w-0 break-words">{children}</span>
    </a>
  )
}

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const handleFooterNavClick = useCallback(
    (e, href) => {
      if (!href.startsWith('#')) return

      e.preventDefault()

      const id = href.replace('#', '')

      if (!id) return

      if (pathname === '/') {
        const section = document.getElementById(id)

        if (!section) return

        window.history.replaceState(null, '', href)

        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })

        return
      }

      router.push(`/${href}`)
    },
    [pathname, router],
  )

  const tDescription = useTranslate(
    'Современная медицина, забота и индивидуальный подход в Испании.',
  )

  const tNavigation = useTranslate('Навигация')
  const tContacts = useTranslate('Контакты')
  const tHoursTitle = useTranslate('Время работы')
  const tHours = useTranslate('Пн–Сб: 09:00–20:00')
  const tCopyright = useTranslate('© 2026 ARTMED Clinic. Все права защищены.')

  return (
    <footer className="border-t border-background-border bg-white">
      <div className="container-app pt-10 md:pt-12 xl:pt-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.2fr_0.9fr] lg:gap-6 xl:gap-8">
          <div className="space-y-4">
            <Logo height={58} priority={false} />

            <Text as="p" variant="body-sm" color="muted" className="max-w-xs">
              {tDescription}
            </Text>
          </div>

          <div>
            <Text
              as="p"
              variant="label"
              color="brand"
              className="mb-4 font-bold uppercase tracking-[0.18em]"
            >
              {tNavigation}
            </Text>

            <ul className="space-y-1 lg:space-y-2.5">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleFooterNavClick(e, '#services')}
                  className="footer-link inline-flex min-h-11 items-center rounded-xl py-2 lg:min-h-0 lg:py-0"
                >
                  <Text as="span" variant="body-sm">
                    Услуги
                  </Text>
                </a>
              </li>

              <li>
                <a
                  href="#advantages"
                  onClick={(e) => handleFooterNavClick(e, '#advantages')}
                  className="footer-link inline-flex min-h-11 items-center rounded-xl py-2 lg:min-h-0 lg:py-0"
                >
                  <Text as="span" variant="body-sm">
                    Преимущества
                  </Text>
                </a>
              </li>

              <li>
                <a
                  href="#contacts"
                  onClick={(e) => handleFooterNavClick(e, '#contacts')}
                  className="footer-link inline-flex min-h-11 items-center rounded-xl py-2 lg:min-h-0 lg:py-0"
                >
                  <Text as="span" variant="body-sm">
                    Контакты
                  </Text>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Text
              as="p"
              variant="label"
              color="brand"
              className="mb-4 font-bold uppercase tracking-[0.18em]"
            >
              {tContacts}
            </Text>

            <div className="space-y-3">
              <FooterContact href={phoneHref} icon={Phone}>
                {phone}
              </FooterContact>

              <FooterContact href={whatsappHref} icon={MessageCircle} external>
                WhatsApp
              </FooterContact>

              <FooterContact href={emailHref} icon={Mail}>
                {email}
              </FooterContact>

              <FooterContact href={mapsHref} icon={MapPin} external>
                {address}
              </FooterContact>
            </div>
          </div>

          <div>
            <Text
              as="p"
              variant="label"
              color="brand"
              className="mb-4 font-bold uppercase tracking-[0.18em]"
            >
              {tHoursTitle}
            </Text>

            <span className="inline-flex rounded-full border border-primary/20 bg-white/60 px-4 py-2 text-sm font-semibold text-primary shadow-[0_4px_12px_rgba(0,119,168,0.04)]">
              {tHours}
            </span>
          </div>
        </div>

        <div className="mt-10 border-t border-background-border py-5 text-center">
          <Text as="p" variant="caption" color="muted">
            {tCopyright}
          </Text>
        </div>
      </div>
    </footer>
  )
}