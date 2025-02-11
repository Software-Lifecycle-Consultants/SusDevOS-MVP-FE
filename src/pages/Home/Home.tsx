import { Box } from '@chakra-ui/react'
import {
  TitleSection,
  ValueProposition,
  PartnerLogos,
  AboutSection,
  SolutionsSection,
  CaseStudies,
  Benefits,
  ClimateFinance,
  Partnership,
} from '../../components'
import { ContactForm } from '../../components/Home/ContactForm/ContactForm'
import { ValuesSection } from '../../components/Home/ValuesSection/ValuesSection'
import { PageContainer } from '../../components/PageContainer/PageContainer'

export function Home() {
  return (
    <PageContainer variant="full-width">
      <Box as="main" minH="100vh" bg="gray.50">
        <TitleSection />
        <ValueProposition />
        <PartnerLogos />
        <Box id="about">
          <AboutSection />
        </Box>
        <Box id="solutions">
          <SolutionsSection />
        </Box>
        <Box id="case-studies">
          <CaseStudies />
        </Box>
        <Box id="contact">
          <ContactForm />
        </Box>
        <Benefits />
        <ClimateFinance />
        <ValuesSection />
        <Partnership />
      </Box>
    </PageContainer>
  );
} 