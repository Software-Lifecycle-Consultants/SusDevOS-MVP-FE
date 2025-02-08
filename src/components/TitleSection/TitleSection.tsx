import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { EmailSubscribe } from '../EmailSubscribe/EmailSubscribe'

export function TitleSection() {
  const handleSubscribe = (email: string) => {
    console.log('Subscribed with:', email)
    // TODO: Implement API call
  }

  return (
    <Box 
      as="section" 
      py={{ base: 16, md: 32 }} 
      bg="white"
      w="100%"
    >
      <Container 
        maxW="1920px" 
        px={{ base: 4, md: 6, lg: 8 }}
        mx="auto"
      >
        <VStack 
          spacing={8} 
          textAlign="center"
          maxW="1440px"
          mx="auto"
        >
          <VStack spacing={4}>
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