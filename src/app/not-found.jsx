'use client'

import Image from 'next/image'
import Link from 'next/link'
import Text from '@/components/shared/text/Text'
import Button from '@/components/shared/button/Button'
import Logo from '@/components/shared/logo/Logo'

export default function NotFound() {

  return (
    <section className="relative overflow-hidden border-b border-background-border/70 bg-white">
      <div className="absolute inset-0">
        <Image
          src="/images/banner.webp"
          alt="ARTMED Clinic"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_34%,rgba(255,255,255,0.44)_58%,rgba(255,255,255,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.25)_0%,rgba(247,251,253,0.1)_55%,rgba(247,251,253,0.75)_100%)]" />
      </div>

      <div className="container-app relative flex h-[calc(100svh_-_var(--header-initial-height,_112px))] items-center justify-center py-10 md:py-12">
        <div className="max-w-[980px] text-center">
          <div className="mb-8 flex justify-center md:mb-10">
            <Logo height={100} />
          </div>

          <Text
            as="p"
            translate={false}
            variant="hero"
            color="brand"
            className="tracking-[-0.02em]"
          >
            404
          </Text>

          <Text
            as="p"
            variant="body"
            className="mx-auto mt-8 font-extrabold leading-tight"
          >
            Упс... такой страницы не существует
          </Text>

          <Text
            as="p"
            variant="body"
            className="mx-auto mt-8 font-extrabold leading-tight"
          >
            Похоже, вы перешли по неверной ссылке или страница была перемещена.
          </Text>

          <div className="mt-10 flex justify-center">
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" fullWidth className="sm:min-w-[240px]">
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
