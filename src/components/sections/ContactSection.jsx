'use client'

import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Text from '@/components/shared/text/Text'
import Button from '@/components/shared/button/Button'
import ClinicMap from '@/components/shared/google-map/ClinicGoogleMap'

const phone = '+34 652 92 11 77'
const phoneHref = 'tel:+34652921177'
const whatsappHref = 'https://wa.me/34652921177'
const email = 'medesteticasd@gmail.com'
const emailHref = 'mailto:medesteticasd@gmail.com'
const clinicLat = 41.81647
const clinicLng = 3.06738
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${clinicLat},${clinicLng}`
const address = 'Carrer Pineda del Mar 27A, Platja d’Aro'

function ContactRow({ icon: Icon, label, value, href, external = false }) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-soft text-primary">
        <Icon size={18} />
      </span>

      <span className="min-w-0">
        <Text as="span" variant="caption" color="muted" className="block">
          {label}
        </Text>

        <span className="block break-words text-sm font-bold text-foreground-soft">
          {value}
        </span>
      </span>
    </>
  )

  if (!href) {
    return <div className="flex items-center gap-3">{content}</div>
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="flex items-center gap-3 rounded-2xl p-2 transition hover:bg-secondary-soft/70"
    >
      {content}
    </a>
  )
}

export default function ContactSection() {
  return (
    <section
      id="contacts"
      className="scroll-mt-[calc(var(--header-initial-height,_112px)_-_40px)] relative overflow-hidden border-y border-background-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,251,253,0.92)_48%,rgba(255,255,255,0.98)_100%)] py-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute -right-32 bottom-4 h-80 w-80 rounded-full bg-primary/7 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/5 blur-3xl" />
      </div>

      <div className="container-app relative">
        <div className="mb-10 max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-brand-blue/45" />

            <Text
              as="p"
              variant="overline"
              color="brand"
              className="tracking-[0.24em]"
            >
              Контакты
            </Text>
          </div>

          <div className="flex flex-row gap-2 items-end mb-4">
            <Text as="span" translate={true}>
              Свяжитесь с нами
            </Text>
            <Text
              as="span"
              variant="h3"
              translate={false}
              color="brand"
              className="text-[22px] leading-tight tracking-[-0.03em] md:text-[26px] xl:text-[28px]"
            >
              ARTMED
            </Text>
          </div>

          <Text color="muted" className="max-w-2xl">
            Мы находимся в Platja d’Aro. Вы можете позвонить, написать в
            WhatsApp или открыть маршрут на Google Maps.
          </Text>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.3fr]">
          <div className="soft-card p-5 md:p-6">
            <div className="space-y-3">
              <ContactRow
                icon={Phone}
                label="Телефон"
                value={phone}
                href={phoneHref}
              />

              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value="Написать в WhatsApp"
                href={whatsappHref}
                external
              />

              <ContactRow
                icon={Mail}
                label="Email"
                value={email}
                href={emailHref}
              />

              <ContactRow
                icon={MapPin}
                label="Адрес"
                value={address}
                href={mapsHref}
                external
              />

              <ContactRow
                icon={Clock}
                label="Время работы"
                value="Пн–Сб: 09:00–20:00"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref} className="sm:flex-1">
                <Button fullWidth leftIcon={<Phone size={16} />}>
                  Позвонить
                </Button>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="sm:flex-1"
              >
                <Button
                  fullWidth
                  variant="secondary"
                  leftIcon={<MessageCircle size={16} />}
                >
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <ClinicMap />
        </div>
      </div>
    </section>
  )
}
