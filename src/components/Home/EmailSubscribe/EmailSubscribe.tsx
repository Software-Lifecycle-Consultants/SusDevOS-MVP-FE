import {
  Button,
  Input,
  Text,
  VStack,
  useToast,
  Spinner,
  Flex,
  Box,
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
    <Flex justify="center" w="100%" mt={8}>
      <VStack spacing={2} align="center" w="100%" maxW="680px" mx="auto">
        <Box position="relative" w="100%">
          <Input
            size="lg"
            bg="gray.100"
            border="1px"
            borderColor={error ? "red.500" : "gray.200"}
            borderRadius="md"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            h="56px"
            _placeholder={{ color: 'gray.500' }}
            disabled={isLoading}
            _disabled={{ opacity: 0.7, cursor: 'not-allowed' }}
            px={4}
          />
          <Button
            position="absolute"
            right="4px"
            top="4px"
            colorScheme="gray"
            bg="gray.900"
            color="white"
            size="lg"
            onClick={handleSubmit}
            _hover={{ bg: 'gray.700' }}
            isLoading={isLoading}
            loadingText="Subscribing..."
            spinner={<Spinner size="sm" color="white" />}
            disabled={isLoading}
            h="48px"
            px="8"
          >
            {buttonText}
          </Button>
        </Box>
        {error && (
          <Text color="red.500" fontSize="sm" textAlign="center">
            {error}
          </Text>
        )}
      </VStack>
    </Flex>
  )
} 