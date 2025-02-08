import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Container maxW="container.xl" py={8}>
        <VStack spacing="6">
          <Heading as="h1" size="2xl" textAlign="center">
            Welcome to Vite + React + Chakra UI
          </Heading>
          
          <Text fontSize="lg">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>

          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </VStack>
      </Container>
    </Flex>
  )
}

export default App
