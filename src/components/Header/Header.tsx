import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react'

export function Header() {
  return (
    <Box as="header" h="84px" borderBottom="1px" borderColor="gray.100" bg="white">
      <Container 
        maxW="1920px"
        h="100%"
        px={{ base: 4, md: 6, lg: 8 }}
        mx="auto"
      >
        <Flex h="100%" align="center" justify="space-between">
          {/* Logo */}
          <Flex align="center">
            <Image 
              src="/logo.svg" 
              alt="SusDev OS"
              h="24px"
            />
          </Flex>

          {/* Right side */}
          <Flex align="center" gap={4}>
            <Text fontSize="sm" color="gray.600">
              👋 get@susdevos.com
            </Text>
            <Button variant="ghost" size="md">
              Sign in
            </Button>
            <Button 
              colorScheme="gray" 
              bg="gray.900"
              color="white"
              size="md"
              _hover={{ bg: 'gray.700' }}
            >
              Register
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
} 