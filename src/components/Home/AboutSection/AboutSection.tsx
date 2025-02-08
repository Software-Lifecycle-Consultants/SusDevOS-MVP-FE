import { Box, Container, Heading, Text, Grid, Image, Button, VStack } from '@chakra-ui/react'

interface FeatureCardProps {
  title: string;
  image: string;
  bgColor: string;
  buttonVariant?: 'dark' | 'light';
}

const FeatureCard = ({ title, image, bgColor, buttonVariant = 'dark' }: FeatureCardProps) => (
  <Box
    bg={bgColor}
    borderRadius="24px"
    p={8}
    height="340px"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <Image
      src={image}
      alt={title}
      borderRadius="full"
      width="64px"
      height="64px"
      objectFit="cover"
    />
    <VStack align="flex-start" spacing={4}>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color={buttonVariant === 'dark' ? 'gray.900' : 'white'}
      >
        {title}
      </Text>
      <Button
        variant={buttonVariant === 'dark' ? 'solid' : 'outline'}
        bg={buttonVariant === 'dark' ? 'gray.900' : 'transparent'}
        color={buttonVariant === 'dark' ? 'white' : 'white'}
        borderColor={buttonVariant === 'dark' ? 'gray.900' : 'white'}
        _hover={{
          bg: buttonVariant === 'dark' ? 'gray.800' : 'whiteAlpha.200',
        }}
      >
        Read more
      </Button>
    </VStack>
  </Box>
)

export function AboutSection() {
  return (
    <Box as="section" py={20} bg="white">
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={12} align="center">
          <VStack spacing={6} maxW="900px" textAlign="center">
            <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }}>
              Why SusDev OS - in addition to being free + amazing
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600">
              As the world passes the critical 1.5°C global warming threshold, digitally managing development
              projects is crucial for meeting climate goals. Our open-source platform empowers organizations
              to plan, build, and maintain sustainable infrastructure like roads, cities, housing, and energy
              systems while tracking emissions. With real-time data, AI insights, and GIS mapping, we provide
              the leading climate reporting and data warehousing tools with user friendly, future proof
              technologies.
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={8}
            w="100%"
          >
            <FeatureCard
              title="How SusDev OS resolves typical issues facing climate impact mitigation action"
              image="/feature1.png"
              bgColor="cyan.400"
              buttonVariant="dark"
            />
            <FeatureCard
              title="Are you from the private sector looking to de-carbonize? We have you covered."
              image="/feature2.png"
              bgColor="gray.900"
              buttonVariant="light"
            />
            <FeatureCard
              title="AI-powered insights for UN-FCCC, NDC, UN-SDG, SBTi compliance."
              image="/feature3.png"
              bgColor="orange.200"
              buttonVariant="dark"
            />
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
} 