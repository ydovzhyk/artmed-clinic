'use client'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import TranslateMe from '@/utils/translate/translate'
import Logo from '@/components/shared/logo/Logo'
import ScrollToTopButton from '@/components/scroll-to-top-btn/ScrollToTopBtn'

const ClientLayout = ({ children }) => {
  const navItems = [
    { href: '#services', label: 'Услуги' },
    { href: '#advantages', label: 'Преимущества' },
    { href: '#contacts', label: 'Контакты' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        logo={<Logo height={56} />}
        navItems={navItems}
        languageSlot={<TranslateMe />}
      />

      <main className="flex-1">{children}</main>

      <Footer />

      <ScrollToTopButton />
    </div>
  )
}

export default ClientLayout
