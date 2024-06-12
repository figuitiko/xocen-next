import RoutesBirding from '@/components/routes/routes-birding'
import RoutesBirdingMobile from '@/components/routes/routes-birding-mobile'
import RoutesCommunitary from '@/components/routes/routes-communitary'
import RoutesCommunitaryMobile from '@/components/routes/routes-communitary-mobile'
import RoutesGastronomic from '@/components/routes/routes-gastronomic'
import RoutesGastronomicMobile from '@/components/routes/routes-gastronomic-mobile'
import RoutesHero from '@/components/routes/routes-hero'
import RoutesHeroMobil from '@/components/routes/routes-hero-mobil'
import RoutesHolist from '@/components/routes/routes-holistic'
import RoutesHolistMobile from '@/components/routes/routes-holistic-mobile'
import RoutesPeninsula from '@/components/routes/routes-peninsula'
import RoutesPeninsulaMobile from '@/components/routes/routes-peninsula-mobile'

const RoutesPage = () => {
  return (
    <>
      <RoutesHero />
      <RoutesHeroMobil />
      <RoutesBirding />
      <RoutesBirdingMobile />
      <RoutesHolist />
      <RoutesHolistMobile />
      <RoutesGastronomic />
      <RoutesGastronomicMobile />
      <RoutesCommunitary />
      <RoutesCommunitaryMobile />
      <RoutesPeninsula />
      <RoutesPeninsulaMobile />
    </>
  )
}

export default RoutesPage
