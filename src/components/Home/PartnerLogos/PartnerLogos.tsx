import { Box, Container, Flex, Image } from '@chakra-ui/react'

export function PartnerLogos() {
  return (
    <Box 
      as="section" 
      h="251px" 
      w="100%" 
      bg="white"
      borderTop="1px"
      borderColor="gray.100"
    >
      <Container 
        maxW="1920px" 
        h="100%" 
        px={{ base: 4, md: 6, lg: 8 }}
        mx="auto"
      >
        <Flex 
          justify="center" 
          align="center" 
          h="100%" 
          gap={{ base: 8, lg: 16 }}
        >
          <Image
            src="/unfccc-logo.png"
            alt="United Nations Climate Change"
            h="64px"
            objectFit="contain"
          />
          <Image
            src="/sdg-logo.png"
            alt="Sustainable Development Goals"
            h="64px"
            objectFit="contain"
          />
          <Image
            src="/sendai-logo.png"
            alt="Sendai Framework"
            h="64px"
            objectFit="contain"
          />
          <Image
            src="/sbti-logo.png"
            alt="Science Based Targets"
            h="64px"
            objectFit="contain"
          />
        </Flex>
      </Container>
    </Box>
  )
} 