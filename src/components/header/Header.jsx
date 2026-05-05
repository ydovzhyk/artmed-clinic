'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { Menu, X, Phone, MessageCircle, MapPin } from 'lucide-react'
import TopContactBar from './TopContactBar'
import Text from '@/components/shared/text/Text'
import Button from '@/components/shared/button/Button'
import { useTranslate } from '@/utils/translate/translate'

function BurgerButton({ open, onClick }) {
  const tOpenMenu = useTranslate('Открыть меню')
  const tCloseMenu = useTranslate('Закрыть меню')

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? tCloseMenu : tOpenMenu}
      aria-expanded={open}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background-border bg-white text-primary shadow-[0_8px_20px_rgba(0,119,168,0.08)] transition hover:border-secondary/50 hover:bg-secondary-soft lg:hidden"
    >
      {open ? <X size={20} /> : <Menu size={21} />}
    </button>
  )
}

function DesktopNav({ items = [], activeHref, onNavigate }) {
  const tNavigation = useTranslate('Основная навигация')

  return (
    <nav
      aria-label={tNavigation}
      className="hidden items-center gap-0.5 lg:flex xl:gap-1"
    >
      {items.map((item) => {
        const isActive = activeHref === item.href

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => onNavigate?.(e, item)}
            aria-current={isActive ? 'page' : undefined}
            className={clsx(
              'rounded-full px-3 py-2 text-sm font-bold transition xl:px-4',
              isActive
                ? 'bg-secondary-soft text-primary'
                : 'text-foreground-soft hover:bg-secondary-soft hover:text-primary',
            )}
          >
            <Text as="span" variant="body-sm">
              {item.label}
            </Text>
          </a>
        )
      })}
    </nav>
  )
}

function MobileMenu({
  open,
  onClose,
  items = [],
  languageSlot,
  activeHref,
  onNavigate,
}) {
  const tCloseMenu = useTranslate('Закрыть меню')
  const tMobileNavigation = useTranslate('Мобильная навигация')
  const tPhoneTitle = useTranslate('Позвонить в клинику')
  const tWhatsappTitle = useTranslate('Написать в WhatsApp')

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <button
        type="button"
        aria-label={tCloseMenu}
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-[#102432]/35 backdrop-blur-[3px] lg:hidden"
      />

      <aside className="fixed right-0 top-0 z-[100] flex h-dvh w-full max-w-[390px] flex-col border-l border-background-border bg-white shadow-[0_24px_70px_rgba(16,36,50,0.22)] lg:hidden">
        <div className="flex items-center justify-between border-b border-background-border px-5 py-4">
          <div>
            <Text
              as="p"
              variant="caption"
              color="primary"
              className="font-extrabold uppercase tracking-[0.18em]"
            >
              ARTMED
            </Text>
            <Text as="p" variant="caption" color="muted">
              Медицинский центр
            </Text>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={tCloseMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background-border bg-background-soft text-primary transition hover:bg-secondary-soft"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <nav aria-label={tMobileNavigation} className="flex flex-col gap-2">
            {items.map((item) => {
              const isActive = activeHref === item.href

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    onNavigate?.(e, item)
                    onClose()
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={clsx(
                    'rounded-2xl border px-4 py-3 text-base font-bold transition hover:border-secondary/50 hover:bg-secondary-soft hover:text-primary',
                    isActive
                      ? 'border-secondary/50 bg-secondary-soft text-primary'
                      : 'border-background-border bg-background-soft text-foreground-soft',
                  )}
                >
                  <Text as="span" variant="body-sm">
                    {item.label}
                  </Text>
                </a>
              )
            })}
          </nav>

          <div className="mt-6 rounded-3xl border border-background-border bg-panel p-4">
            <Text
              as="p"
              variant="caption"
              color="primary"
              className="mb-3 font-extrabold uppercase tracking-[0.16em]"
            >
              Контакты
            </Text>

            <div className="space-y-3 text-sm text-foreground-soft">
              <a
                href="tel:+34652921177"
                aria-label={tPhoneTitle}
                className="flex items-center gap-2 font-semibold"
              >
                <Phone size={16} className="text-primary" />
                <span>+34 652 92 11 77</span>
              </a>

              <a
                href="https://wa.me/34652921177"
                target="_blank"
                rel="noreferrer"
                aria-label={tWhatsappTitle}
                className="flex items-center gap-2 font-semibold"
              >
                <MessageCircle size={16} className="text-primary" />
                <span>WhatsApp</span>
              </a>

              <div className="flex items-start gap-2 font-semibold">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Carrer Pineda del Mar 27A, Platja d’Aro</span>
              </div>
            </div>
          </div>

          {languageSlot && (
            <div className="mt-5 rounded-3xl border border-background-border bg-white p-4 shadow-soft">
              <Text
                as="p"
                variant="caption"
                color="primary"
                className="mb-3 font-extrabold uppercase tracking-[0.16em]"
              >
                Язык
              </Text>
              {languageSlot}
            </div>
          )}
        </div>

        <div className="border-t border-background-border p-5">
          <a href="tel:+34652921177" onClick={onClose}>
            <Button fullWidth leftIcon={<Phone size={16} />}>
              Связаться с нами
            </Button>
          </a>
        </div>
      </aside>
    </>
  )
}

export default function Header({
  logo,
  navItems = [],
  languageSlot = null,
  className,
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')

  const router = useRouter()
  const pathname = usePathname()

  const tPhoneTitle = useTranslate('Позвонить в клинику')
  const headerRef = useRef(null)

  const handleSectionNavigation = useCallback(
    (e, item) => {
      const href = item?.href || ''

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

  useEffect(() => {
    if (!headerRef.current) return

    const updateHeaderHeight = () => {
      const height = headerRef.current?.offsetHeight || 112

      document.documentElement.style.setProperty(
        '--header-initial-height',
        `${height}px`,
      )
    }

    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)

    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  useEffect(() => {
    if (pathname !== '/') {
      setActiveHref('')
      return
    }

    const sectionItems = navItems
      .filter((item) => item.href?.startsWith('#'))
      .map((item) => ({
        ...item,
        id: item.href.replace('#', ''),
      }))

    if (!sectionItems.length) return

    const updateActiveSection = () => {
      const headerHeight = headerRef.current?.offsetHeight || 112
      const scrollPosition = window.scrollY + headerHeight + 80

      let currentHref = ''

      for (const item of sectionItems) {
        const section = document.getElementById(item.id)

        if (!section) continue

        if (scrollPosition >= section.offsetTop) {
          currentHref = item.href
        }
      }

      setActiveHref(currentHref)
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [navItems, pathname])

  return (
    <>
      <div
        ref={headerRef}
        className={clsx(
          'sticky top-0 z-50 overflow-hidden border-b border-background-border/80 bg-white/82 backdrop-blur-xl',
          'shadow-[0_8px_25px_rgba(16,36,50,0.05)]',
          className,
        )}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute right-20 -top-28 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative">
          <TopContactBar />

          <header>
            <div className="container-app flex min-h-[72px] items-center justify-between gap-4 py-1">
              <div className="flex min-w-0 items-center">{logo}</div>

              <DesktopNav
                items={navItems}
                activeHref={activeHref}
                onNavigate={handleSectionNavigation}
              />

              <div className="hidden items-center gap-2 lg:flex xl:gap-2">
                {languageSlot && (
                  <div className="w-[120px] shrink-0 xl:w-[120px]">
                    {languageSlot}
                  </div>
                )}

                <a
                  href="tel:+34652921177"
                  aria-label={tPhoneTitle}
                  className="shrink-0"
                >
                  <Button size="md" leftIcon={<Phone size={16} />}>
                    Связаться с нами
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-2 lg:hidden">
                {languageSlot && (
                  <div className="hidden w-[120px] shrink-0 sm:block">
                    {languageSlot}
                  </div>
                )}

                <BurgerButton
                  open={mobileOpen}
                  onClick={() => setMobileOpen((prev) => !prev)}
                />
              </div>
            </div>
          </header>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navItems}
        languageSlot={languageSlot}
        activeHref={activeHref}
        onNavigate={handleSectionNavigation}
      />
    </>
  )
}