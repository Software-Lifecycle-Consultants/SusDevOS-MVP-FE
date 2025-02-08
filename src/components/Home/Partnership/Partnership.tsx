import { Box, Container, Heading, Text, VStack, Image } from '@chakra-ui/react'

export function Partnership() {
  return (
    <Box 
      as="section" 
      py={20} 
      bg="#0F172A"
      color="white"
      width="100%"
      position="relative"
    >
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={8} align="center" maxW="800px" mx="auto" textAlign="center">
          <Box
            borderRadius="full"
            overflow="hidden"
            width="100px"
            height="100px"
            bg="white"
          >
            <Image
              src="/partner-avatar.png"
              alt="Partner with SusDev OS"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
          
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="medium"
            lineHeight="1.2"
            color="white"
          >
            Interested in partnering?
          </Heading>

          <Text 
            fontSize={{ base: 'lg', md: 'xl' }} 
            lineHeight="1.6"
            color="gray.300"
          >
            We are on the lookout for partners from the sustainability sector,
            development finance and much more to empower our mutual work on
            reaching net-zero. Please so not hesitate to get in touch using the
            above contact form or our email.
          </Text>

          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            color="cyan.400"
            fontWeight="medium"
          >
            partner@susdevos.com
          </Text>
        </VStack>
      </Container>
    </Box>
  )
} 