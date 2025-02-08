import { Box } from '@chakra-ui/react'
import {
  Header,
  TitleSection,
  ValueProposition,
  PartnerLogos,
  AboutSection,
  SolutionsSection,
  CaseStudies,
  Benefits,
  ClimateFinance,
  ValuesSection,
  ContactForm,
  Partnership,
  Footer,
} from '../../components'

export function Home() {
    //console.log('Home component rendered')  
  return (
    <Box as="main" minH="100vh" bg="gray.50">
      <Header />
      <TitleSection />
      <ValueProposition />
      <PartnerLogos />
      <AboutSection />
      <SolutionsSection />
      <ContactForm />
      <CaseStudies />
      <Benefits />
      <ClimateFinance />
      <ValuesSection />
      <Partnership />
      <Footer />


      {/* Other sections will be added here */}
    </Box>
  )
} 