import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { EmailSubscribe } from '../EmailSubscribe/EmailSubscribe'

export function TitleSection() {
  const handleSubscribe = (email: string) => {
    console.log('Subscribed with:', email)
    // TODO: Implement API call
  }

  return (
    <Box as="section" py={{ base: 16, md: 32 }} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={8} textAlign="center">
          <VStack spacing={4} maxW="container.lg">
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              lineHeight="1.2"
              color="black"
            >
              Open-Source Web-OS for Managing{' '}
              <Text as="span" color="cyan.400" display="inline">
                Development
              </Text>
              {' '}Projects aligned with UN SDGs, Paris Agreement NDCs and SBTi
            </Heading>
            
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="container.md"
            >
              Empower Climate-Smart Development with Data Management, Amazing
              visualizations, AI data summaries, and GIS for Public and Private
              Sector Projects.
            </Text>
          </VStack>

          <EmailSubscribe onSubscribe={handleSubscribe} />
        </VStack>
      </Container>
    </Box>
  )
} 