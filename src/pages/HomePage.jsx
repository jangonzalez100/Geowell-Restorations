import Hero from '../components/Hero'
import Services from '../components/Services'
import ProcessScrollytelling from '../components/ProcessScrollytelling'
import {
  WhyGeoWellSection,
  InsuranceCalloutSection,
  ClientsSaySection,
  IndustrySpecialistsSection,
  ServiceAreasSection,
  EmergencyCTASection,
  LegacySection,
} from '../components/MarketingSections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyGeoWellSection />
      <InsuranceCalloutSection />
      <ClientsSaySection />
      <ProcessScrollytelling />
      <IndustrySpecialistsSection />
      <ServiceAreasSection />
      <EmergencyCTASection />
      <LegacySection />
    </>
  )
}
