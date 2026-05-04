'use client'

import Image from 'next/image'
import { CalendarCheck, ShieldCheck } from 'lucide-react'
import Text from '@/components/shared/text/Text'
import Button from '@/components/shared/button/Button'
import Logo from '@/components/shared/logo/Logo'

const phoneHref = 'tel:+34652921177'

const benefits = [
  'Опытные специалисты',
  'Современное оборудование',
  'Индивидуальный подход',
]

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-background-border/70 bg-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/banner.webp"
          alt="ARTMED Clinic"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_34%,rgba(255,255,255,0.44)_58%,rgba(255,255,255,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.25)_0%,rgba(247,251,253,0.1)_55%,rgba(247,251,253,0.75)_100%)]" />
      </div>

      <div className="container-app relative flex h-[calc(100svh_-_var(--header-initial-height,_112px))] min-h-[560px] items-center py-10 md:py-12 lg:min-h-0">
        <div className="max-w-[680px]">

          <Text
            as="h1"
            translate={false}
            className="max-w-[760px] text-[22px] leading-[1.35] tracking-[-0.03em] md:text-[26px] xl:text-[28px]"
          >
            <Text
              as="span"
              variant="h3"
              translate={false}
              color="brand"
              className="inline"
            >
              ARTMED
            </Text>{' '}
            <Text as="span" translate className="inline">
              - медицинский центр в Platja d’Aro, где современные технологии,
              опыт врачей и индивидуальный подход помогают заботиться о вашем
              здоровье и красоте.
            </Text>
          </Text>

          <div className="mt-6 hidden items-center gap-2 text-foreground-soft md:flex">
            <Text as="p" variant="body-sm" className="max-w-xs">
              Современная медицина
            </Text>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <Text as="p" variant="body-sm" className="max-w-xs">
              Забота
            </Text>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <Text as="p" variant="body-sm" className="max-w-xs">
              Результат
            </Text>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={phoneHref} className="sm:w-auto">
              <Button
                size="lg"
                fullWidth
                leftIcon={<CalendarCheck size={17} />}
                className="sm:min-w-[210px]"
              >
                Записаться на приём
              </Button>
            </a>
          </div>

          <div className="mt-8 hidden grid-cols-3 gap-3 md:grid">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-background-border bg-white/72 px-4 py-3 shadow-[0_10px_28px_rgba(16,36,50,0.06)] backdrop-blur"
              >
                <div className="flex h-8 w-8 items-center justify-center">
                  <ShieldCheck size={18} className="text-brand-blue" />
                </div>

                <Text
                  as="p"
                  variant="caption"
                  color="soft"
                  className="font-bold"
                >
                  {item}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
