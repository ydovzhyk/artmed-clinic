'use client'

import Image from 'next/image'
import { CalendarCheck } from 'lucide-react'
import Text from '@/components/shared/text/Text'
import Button from '@/components/shared/button/Button'

const phoneHref = 'tel:+34652921177'

const services = [
  {
    title: 'Гинекология и эстетическая гинекология',
    icon: '/images/icon/GYNECOLOGY.png',
    subtitle: 'Здоровье женщины - наша особая забота.',
    text: 'Мы предлагаем полный спектр диагностики и лечения гинекологических заболеваний.',
    items: [
      'воспалительные процессы и инфекции',
      'гормональные нарушения',
      'проблемы репродуктивной системы',
      'профилактические осмотры и скрининг',
      'восстановление и омоложение интимной зоны',
      'современные малоинвазивные процедуры',
      'повышение качества жизни и уверенности',
    ],
  },
  {
    title: 'Неврология',
    icon: '/images/icon/NEUROLOGY.png',
    subtitle: 'Забота о нервной системе - залог вашего самочувствия.',
    text: 'Мы лечим распространённые неврологические состояния и помогаем восстановить качество жизни.',
    items: [
      'головные боли и мигрени',
      'остеохондроз и боли в спине',
      'неврозы и стрессовые состояния',
      'нарушения сна',
      'современные методы, включая нейрорелаксирующую терапию',
    ],
  },
  {
    title: 'Урология',
    icon: '/images/icon/UROLOGY.png',
    subtitle: 'Комплексный подход к мужскому здоровью.',
    text: '',
    items: [
      'диагностика и лечение урологических заболеваний',
      'профилактика и восстановление функций',
      'деликатность и конфиденциальность',
    ],
  },
  {
    title: 'Терапия, гастроэнтерология, нутрициология',
    icon: '/images/icon/THERAPY.png',
    subtitle: 'Здоровье начинается изнутри.',
    text: '',
    items: [
      'лечение заболеваний ЖКТ',
      'индивидуальные планы питания',
      'восстановление обмена веществ',
      'комплексная диагностика организма',
    ],
  },
  {
    title: 'Физиотерапия и реабилитация',
    icon: '/images/icon/PHYSIOTHERAPY.png',
    subtitle:
      'Восстановление и лечение с использованием современных технологий.',
    text: '',
    items: [
      'аппараты BTL',
      'EMSculpt - укрепление мышц и коррекция фигуры',
      'электромагнитные и физиопроцедуры',
      'нейрорелаксирующая терапия',
    ],
  },
  {
    title: 'Массаж и восстановление',
    icon: '/images/icon/MASSAGE.png',
    subtitle: 'Профессиональные массажные техники.',
    text: '',
    items: [
      'лечебный массаж',
      'расслабляющий массаж',
      'восстановление после травм',
    ],
  },
  {
    title: 'IV-терапия - капельницы',
    icon: '/images/icon/THERAPY.png',
    subtitle: 'Быстрое восстановление организма.',
    text: '',
    items: [
      'витамины и микроэлементы',
      'детокс-программы',
      'поддержка иммунитета',
      'энергия и восстановление после стресса',
    ],
  },
  {
    title: 'Эстетическая медицина и косметология',
    icon: '/images/icon/COSMETOLOGY.png',
    subtitle: 'Современные методы омоложения и ухода.',
    text: '',
    items: [
      'ботулотоксины - разглаживание морщин',
      'инъекции гиалуроновой кислоты',
      'RF-лифтинг',
      'Morpheus - в ближайшее время',
    ],
  },
  {
    title: 'Лазерная эпиляция премиум-уровня',
    icon: '/images/icon/EPILATION.png',
    subtitle:
      'Мы используем александритовый лазер - золотой стандарт в мире эстетики.',
    text: 'Это не IPL, а профессиональная медицинская технология.',
    items: [
      'максимальная эффективность',
      'безопасное воздействие',
      'результат уже после первых процедур',
    ],
  },
  {
    title: 'Ортопедия и травматология',
    icon: '/images/icon/ORTHOPAEDICS.png',
    subtitle: 'Движение без боли - это реальность.',
    text: 'Наш специалист поможет при заболеваниях суставов, травмах и посттравматических состояниях.',
    items: [
      'заболевания суставов',
      'артрозы и артриты',
      'спортивные и бытовые травмы',
      'посттравматические состояния',
      'индивидуальные программы восстановления и реабилитации',
    ],
  },
  {
    title: 'ЛОР - оториноларингология',
    icon: '/images/icon/ENT.png',
    subtitle: 'Свободное дыхание и здоровье уха, горла и носа.',
    text: '',
    items: [
      'лечение хронических и острых заболеваний',
      'диагностика и профилактика',
      'индивидуальный подход к каждому пациенту',
    ],
  },
]

const images = [
  {
    src: '/images/services/services-1.webp',
    alt: 'Современное медицинское оборудование',
  },
  {
    src: '/images/services/services-2.webp',
    alt: 'Медицинские технологии ARTMED',
  },
  {
    src: '/images/services/services-3.webp',
    alt: 'Диагностика и лечение в ARTMED',
  },
]

function ServiceCard({ service }) {
  return (
    <article className="group rounded-3xl border border-background-border bg-white/78 p-4 shadow-[0_14px_34px_rgba(16,36,50,0.06)] backdrop-blur transition hover:border-secondary/50 hover:shadow-[0_18px_42px_rgba(0,119,168,0.1)]">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-soft ring-1 ring-secondary/20">
          <Image
            src={service.icon}
            alt=""
            width={34}
            height={34}
            className="h-12 w-12 object-contain"
          />
        </div>

        <div className="min-w-0">
          <Text
            as="h3"
            variant="h3"
            className="text-[17px] leading-tight tracking-[-0.02em] text-brand-blue"
          >
            {service.title}
          </Text>

          <Text
            as="p"
            variant="body"
            color="brand"
            className="mt-2 font-bold leading-6"
          >
            {service.subtitle}
          </Text>

          {service.text && (
            <Text
              as="p"
              variant="body-sm"
              color="soft"
              className="mt-2 leading-6"
            >
              {service.text}
            </Text>
          )}

          <ul className="mt-3 space-y-1.5">
            {service.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />

                <Text
                  as="span"
                  variant="body-sm"
                  color="soft"
                  className="leading-6"
                >
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function ImageBlock({ image, className }) {
  return (
    <div
      className={`relative min-h-[190px] overflow-hidden rounded-[2rem] border border-background-border bg-white shadow-[0_18px_50px_rgba(16,36,50,0.08)] ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.02)_100%)]" />
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-[calc(var(--header-initial-height,_112px)_-_40px)] relative overflow-hidden border-y border-background-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(247,251,253,0.92)_48%,rgba(255,255,255,0.98)_100%)] py-12 md:py-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-primary/7 blur-3xl" />
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
              Услуги
            </Text>
          </div>

          <div className="mb-4 flex flex-row items-end gap-2">
            <Text as="h2" translate>
              Направления клиники
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
            Мы объединяем современные медицинские технологии, опыт специалистов
            и деликатный подход к каждому пациенту.
          </Text>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ServiceCard service={services[0]} />
          <ImageBlock image={images[0]} className="md:min-h-[220px]" />
          <ServiceCard service={services[1]} />

          <ServiceCard service={services[2]} />
          <ServiceCard service={services[3]} />
          <ServiceCard service={services[4]} />

          <ImageBlock
            image={images[1]}
            className="md:col-span-2 md:min-h-[400px]"
          />

          <ServiceCard service={services[5]} />
          <ServiceCard service={services[6]} />

          <ServiceCard service={services[7]} />
          <ServiceCard service={services[8]} />
          <ImageBlock image={images[2]} className="md:min-h-[320px]" />

          <ServiceCard service={services[9]} />
          <ServiceCard service={services[10]} />

          <div className="rounded-3xl border border-background-border bg-white/72 p-5 shadow-[0_14px_34px_rgba(16,36,50,0.06)] backdrop-blur">
            <Text
              as="p"
              variant="h3"
              color="brand"
              className="text-[18px] leading-tight"
            >
              Не знаете, к какому специалисту обратиться?
            </Text>

            <Text as="p" variant="body-sm" color="soft" className="mt-2">
              Свяжитесь с нами - мы подскажем подходящее направление и поможем
              записаться на приём.
            </Text>

            <a href={phoneHref} className="mt-4 flex justify-center">
              <Button
                leftIcon={<CalendarCheck size={16} />}
                className="min-w-[220px]"
              >
                Записаться на приём
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
