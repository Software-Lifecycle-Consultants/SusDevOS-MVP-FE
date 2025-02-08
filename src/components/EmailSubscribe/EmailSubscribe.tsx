import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import { useState } from 'react'

interface EmailSubscribeProps {
  onSubscribe?: (email: string) => void;
  buttonText?: string;
  placeholder?: string;
}

export function EmailSubscribe({
  onSubscribe,
  buttonText = 'GET SUSDEV-OS',
  placeholder = 'Enter your email to join the wait list',
}: EmailSubscribeProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = async () => {
    // Reset error state
    setError('')

    // Validate email
    if (!email) {
      setError('Email is required')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (onSubscribe) {
        await onSubscribe(email)
      }
      // Show success message
      toast({
        title: 'Success!',
        description: 'You have been added to the waitlist.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setEmail('')
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to subscribe. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <VStack spacing={2} align="stretch" w="100%">
      <InputGroup size="lg" maxW={{ base: "100%", md: "480px" }}>
        <Input
          bg="gray.100"
          border="none"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pr="160px"
          _placeholder={{ color: 'gray.500' }}
          isInvalid={!!error}
          disabled={isLoading}
          _disabled={{ opacity: 0.7, cursor: 'not-allowed' }}
        />
        <InputRightElement w="auto" pr={2}>
          <Button
            colorScheme="gray"
            bg="gray.900"
            color="white"
            size="md"
            onClick={handleSubmit}
            _hover={{ bg: 'gray.700' }}
            isLoading={isLoading}
            loadingText="Subscribing..."
            spinner={<Spinner size="sm" color="white" />}
            disabled={isLoading}
          >
            {buttonText}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && (
        <Text color="red.500" fontSize="sm">
          {error}
        </Text>
      )}
    </VStack>
  )
} 