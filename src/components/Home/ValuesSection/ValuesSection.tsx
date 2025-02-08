import { Box, Container, Grid, Heading, Text, VStack, Circle, Link } from '@chakra-ui/react'

// Custom SVG icons
const Icons = {
  Climate: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  OpenSource: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Network: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19H20M4 5H20M4 12H20M8 9V15M16 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Framework: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4v16M20 4v16M12 4v16M4 12h16M4 20h16M4 4h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Data: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12H16M8 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Project: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16V21M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8M12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8M12 8V3M12 3L8 7M12 3L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <Box
    p={8}
    borderRadius="24px"
    bg="white"
    border="1px"
    borderColor="gray.100"
    height="100%"
    display="flex"
    flexDirection="column"
  >
    <VStack align="flex-start" spacing={4} flex="1">
      <Circle size="48px" bg="cyan.100">
        <Box as="span" color="black">
          {icon}
        </Box>
      </Circle>
      <Heading
        as="h3"
        fontSize="xl"
        fontWeight="semibold"
        color="green.900"
      >
        {title}
      </Heading>
      <Text color="gray.600" fontSize="md">
        {description}
      </Text>
    </VStack>
    <Box alignSelf="flex-end" mt={4}>
      <Link
        href="#"
        bg="black"
        color="white"
        w="40px"
        h="40px"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ bg: 'gray.800' }}
      >
        ↗
      </Link>
    </Box>
  </Box>
)

export function ValuesSection() {
  const values = [
    {
      icon: <Icons.Climate />,
      title: 'We grasp the climate change issues at the root causes',
      description: 'A fundamental lack of visibility into the impact of climate change due to development exists. SusDev OS helps bridge the gap.',
    },
    {
      icon: <Icons.OpenSource />,
      title: 'The power of open-source',
      description: 'Giving you complete visibility into the security and technologies at work. We let you customize and use SusDev OS free.',
    },
    {
      icon: <Icons.Network />,
      title: 'A decentralized OS network that feeds global dashboards',
      description: 'With your consent, SusDev OS will enable global climate dashboards with real-time progress data.',
    },
    {
      icon: <Icons.Framework />,
      title: 'Why are we addressing the full spectrum of climate frameworks',
      description: 'Information silos cloud climate data, slowing MRV emissions processes. With experts, we chose the tougher, correct path.',
    },
    {
      icon: <Icons.Data />,
      title: 'UNFCCC NDC data from energy, transport, deforestation sectors',
      description: 'High emissions in energy, transport, and deforestation impact scope 1-3 calculations. Our AI streamlines tracking and reduces GHGs.',
    },
    {
      icon: <Icons.Project />,
      title: 'How is a project managed with a focus on emissions & foot print',
      description: 'Our platform offers a modular design, letting organizations select features for their project management.',
    },
  ]

  return (
    <Box as="section" py={20} bg="white">
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={12}>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            color="gray.900"
            fontWeight="medium"
            textAlign="center"
          >
            And more
          </Heading>

          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={8}
            w="100%"
          >
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
} 