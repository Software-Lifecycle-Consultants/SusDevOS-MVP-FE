import { Box, Container, Grid, Heading, Text, VStack, Circle } from '@chakra-ui/react'

// Custom SVG icons
const Icons = {
  Report: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Insights: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Transparency: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  AI: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18V21M12 18C8.68629 18 6 15.3137 6 12V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V12C18 15.3137 15.3137 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 23H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Innovation: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Reports: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17h6M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <Box
    p={8}
    borderRadius="24px"
    bg="white"
    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
  >
    <VStack align="flex-start" spacing={4}>
      <Circle size="64px" bg="cyan.100">
        <Box as="span" color="black" fontSize="24px">
          {icon}
        </Box>
      </Circle>
      <Heading
        as="h3"
        fontSize="xl"
        fontWeight="semibold"
        color="gray.900"
        lineHeight="1.4"
      >
        {title}
      </Heading>
      <Text color="gray.600" fontSize="md" lineHeight="1.6">
        {description}
      </Text>
    </VStack>
  </Box>
)

export function Benefits() {
  const benefits = [
    {
      icon: <Icons.Report />,
      title: 'Seamless Reporting and Data Integration',
      description: 'Effortlessly streamline your reporting process with integrated climate data, ensuring compliance with global standards. Connect with your ERPs and IS platforms using APIs.',
    },
    {
      icon: <Icons.Insights />,
      title: 'Instant Access to Critical Insights',
      description: 'Unlock instant access to mission-critical information, empowering decision-makers with data-driven insights for a brighter, climate-aware future.',
    },
    {
      icon: <Icons.Transparency />,
      title: 'Accountability and Transparency',
      description: 'Foster a culture of accountability and transparency, facilitating effective policy development and demonstrating your commitment to a sustainable world.',
    },
    {
      icon: <Icons.AI />,
      title: 'AI-Driven Emissions Intelligence',
      description: 'Harness the power of AI for precise summaries of complex calculations and recommendations, optimizing your climate mitigation strategies.',
    },
    {
      icon: <Icons.Innovation />,
      title: 'User-Friendly Innovation',
      description: 'Whether a starting out IT user or an experienced user, our system is easy to use and understand. And we will support multiple languages soon.',
    },
    {
      icon: <Icons.Reports />,
      title: 'UNFCCC NDC, UN-SDG, SBTi reporting',
      description: 'Unlock a treasure trove of insights by generating UNFCCC, UN-SDG, and Sendai reports from real-world data.',
    },
  ]

  return (
    <Box as="section" py={20} bg="white">
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="800px">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              color="gray.900"
              fontWeight="medium"
              lineHeight="1.2"
            >
              Benefits of using SusDev-OS
            </Heading>
            <Text fontSize="xl" color="gray.600" lineHeight="1.6">
              SusDev-OS revolutionizes climate-conscious development
              projects through advanced technology.
            </Text>
          </VStack>

          {/* Benefits Grid */}
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={8}
            w="100%"
          >
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
} 