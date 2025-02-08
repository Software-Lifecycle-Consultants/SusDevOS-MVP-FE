import { Box, Button, Container, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react'

interface CaseStudyCardProps {
  image: string
  title: string
}

const CaseStudyCard = ({ image, title }: CaseStudyCardProps) => (
  <VStack spacing={4} align="flex-start">
    <Box 
      w="100%" 
      h="400px" 
      borderRadius="24px" 
      overflow="hidden"
    >
      <Image
        src={image}
        alt={title}
        w="100%"
        h="100%"
        objectFit="cover"
      />
    </Box>
    <Text
      fontSize="2xl"
      fontWeight="medium"
      color="gray.900"
    >
      {title}
    </Text>
    <Button
      variant="outline"
      borderColor="gray.900"
      color="gray.900"
      rightIcon={<Box as="span" fontSize="lg">↗</Box>}
      _hover={{
        bg: 'gray.50'
      }}
    >
      Read more
    </Button>
  </VStack>
)

export function CaseStudies() {
  const cases = [
    {
      image: '/case-study-1.png',
      title: 'Development of a Industrial park',
    },
    {
      image: '/case-study-2.png',
      title: 'Road extension through a city and forest area',
    },
    {
      image: '/case-study-3.png',
      title: '100MW Solar & 500Mw Wind power plants',
    },
  ]

  return (
    <Box as="section" py={20} bg="white">
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={12} align="center">
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="800px">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              color="gray.900"
              fontWeight="medium"
            >
              Case Studies
            </Heading>
            <Text 
              fontSize="xl" 
              color="gray.900"
              maxW="760px"
            >
              Exploring Real-World Success Stories: How SusDev-OS Drives
              Environmental Impact and Sustainability
            </Text>
          </VStack>

          {/* Case Study Cards */}
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={8}
            w="100%"
          >
            {cases.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                image={caseStudy.image}
                title={caseStudy.title}
              />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
} 