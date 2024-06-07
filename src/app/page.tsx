import AboutSection from '@/components/home/about-section'
import AboutSectionMobile from '@/components/home/about-section-mobile'
import HeroMain from '@/components/home/hero-main'
import HeroMainMobile from '@/components/home/hero-main-mobile'
import LastBgSection from '@/components/home/last-bg-section'
import RoutesSection from '@/components/home/routes-section'
import TestimonialHome from '@/components/home/testimonial-home'

const Home = () => {
  return (
    <>
      <HeroMain />
      <HeroMainMobile />
      <AboutSection />
      <AboutSectionMobile />
      <RoutesSection />
      <TestimonialHome />
      <LastBgSection />
    </>
  )
}
export default Home
