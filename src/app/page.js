import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ContactSection from '@/components/sections/ContactSection'
import AdvantagesSection from '@/components/sections/AdvantagesSection'
import HashScroll from '@/components/shared/hash-scroll/HashScroll'

export default function Home() {
  return (
    <>
      <HashScroll />
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <ContactSection />
    </>
  )
}