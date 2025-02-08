import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

export function ClimateFinance() {
  return (
    <Box 
      as="section" 
      py={20} 
      bg="cyan.400"
      color="white"
    >
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={6} align="center" maxW="900px" mx="auto">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="medium"
            textAlign="center"
            lineHeight="1.2"
          >
            Access climate financing
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            textAlign="center"
            lineHeight="1.6"
          >
            Get access to climate finance by ensuring your sustainability records
            are tangible and reliable, SusDev OS enables just that as data is
            audit ready and easily usable with offsetting and finance services.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
} 