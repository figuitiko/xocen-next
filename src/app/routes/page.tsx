import RoutesBirding from '@/components/routes/routes-birding'
import RoutesBirdingMobile from '@/components/routes/routes-birding-mobile'
import RoutesHero from '@/components/routes/routes-hero'
import RoutesHeroMobil from '@/components/routes/routes-hero-mobil'

const RoutesPage = () => {
  return (
    <>
      <RoutesHero />
      <RoutesHeroMobil />
      <RoutesBirding />
      <RoutesBirdingMobile />
    </>
  )
}

export default RoutesPage
