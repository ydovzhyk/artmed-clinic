'use client'

import Image from 'next/image'
import Text from '@/components/shared/text/Text'

const principles = [
  {
    icon: '/images/advantages/specialists.png',
    title: 'Профессиональная команда',
    subtitle: 'Опыт специалистов и единый медицинский подход.',
    items: [
      'консультации профильных врачей',
      'внимательное изучение жалоб пациента',
      'объяснение диагноза и плана лечения простым языком',
    ],
  },
  {
    icon: '/images/advantages/technology.png',
    title: 'Современные технологии',
    subtitle: 'Оборудование и методики, которые помогают работать точнее.',
    items: [
      'современная диагностика и процедуры',
      'аппаратные методики восстановления',
      'внедрение стандартов из стоматологической практики',
    ],
  },
  {
    icon: '/images/advantages/individual.png',
    title: 'Индивидуальный план лечения',
    subtitle: 'Не шаблонный приём, а решение под конкретную ситуацию.',
    items: [
      'персональные рекомендации',
      'учёт состояния здоровья и образа жизни',
      'поэтапное сопровождение пациента',
    ],
  },
  {
    icon: '/images/advantages/confidentiality.png',
    title: 'Деликатность и доверие',
    subtitle: 'Комфортная атмосфера с уважением к личным вопросам.',
    items: [
      'конфиденциальность обращений',
      'спокойная и безопасная среда',
      'внимательное отношение на каждом этапе',
    ],
  },
]

export default function AdvantagesSection() {
  return (
    <section
      id="advantages"
      className="scroll-mt-[calc(var(--header-initial-height,_112px)_-_40px)] relative overflow-hidden border-y border-background-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(247,251,253,0.92)_50%,rgba(255,255,255,0.98)_100%)] py-12 md:py-14"
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
              Преимущества
            </Text>
          </div>

          <div className="mb-4 flex flex-row items-end gap-2">
            <Text as="h2" translate>
              Стандарты работы
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
            Клиника развивается на основе медицинской точности, современных
            технологий и внимательного отношения к каждому пациенту.
          </Text>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-background-border bg-white/78 p-5 shadow-[0_14px_34px_rgba(16,36,50,0.06)] backdrop-blur transition hover:border-secondary/50 hover:shadow-[0_18px_42px_rgba(0,119,168,0.1)]"
            >
              <div className="pointer-events-none absolute right-4 top-4 text-[52px] font-bold leading-none text-brand-blue/[0.04]">
                0{index + 1}
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-soft ring-1 ring-secondary/20">
                  <Image
                    src={item.icon}
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
                    {item.title}
                  </Text>

                  <Text
                    as="p"
                    variant="body"
                    color="brand"
                    className="mt-2 font-bold leading-6"
                  >
                    {item.subtitle}
                  </Text>

                  <ul className="mt-3 space-y-1.5">
                    {item.items.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />

                        <Text
                          as="span"
                          variant="body-sm"
                          color="soft"
                          className="leading-6"
                        >
                          {point}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}