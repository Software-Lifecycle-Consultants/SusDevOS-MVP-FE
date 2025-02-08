import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'

interface FormState {
  name: string
  email: string
  organization: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  organization?: string
  message?: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    organization: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const toast = useToast()

  const validateForm = (data: FormState): FormErrors => {
    const newErrors: FormErrors = {}

    if (!data.name.trim()) {
      newErrors.name = 'Name is required'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!data.organization.trim()) {
      newErrors.organization = 'Organization is required'
    }

    if (!data.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm(formData)

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      console.log('Form data:', formData)
      
      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you within 24-48 hours.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
      
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
      })
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box as="section" py={20} bg="cyan.400">
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
        <Box
          bg="white"
          borderRadius="24px"
          maxW="800px"
          mx="auto"
          p={{ base: 6, md: 8, lg: 10 }}
        >
          <VStack spacing={6} align="center">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="medium"
              textAlign="center"
            >
              Have a question?
            </Heading>

            <Text
              textAlign="center"
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="600px"
            >
              We strive to respond to all inquiries promptly. You can expect
              to hear back from us within 24-48 hours.
            </Text>

            <Box as="form" w="100%" onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <Box 
                  display="grid" 
                  gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
                  gap={4}
                  w="100%"
                >
                  <FormControl>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      size="lg"
                      borderRadius="md"
                      borderColor="gray.300"
                      _placeholder={{ color: 'gray.500' }}
                      _hover={{ borderColor: 'gray.400' }}
                      _focus={{ borderColor: 'cyan.400', boxShadow: 'none' }}
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email"
                      size="lg"
                      borderRadius="md"
                      borderColor="gray.300"
                      _placeholder={{ color: 'gray.500' }}
                      _hover={{ borderColor: 'gray.400' }}
                      _focus={{ borderColor: 'cyan.400', boxShadow: 'none' }}
                    />
                  </FormControl>
                </Box>

                <FormControl>
                  <Input
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Organization (website/ name)"
                    size="lg"
                    borderRadius="md"
                    borderColor="gray.300"
                    _placeholder={{ color: 'gray.500' }}
                    _hover={{ borderColor: 'gray.400' }}
                    _focus={{ borderColor: 'cyan.400', boxShadow: 'none' }}
                  />
                </FormControl>

                <FormControl>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    size="lg"
                    borderRadius="md"
                    borderColor="gray.300"
                    _placeholder={{ color: 'gray.500' }}
                    _hover={{ borderColor: 'gray.400' }}
                    _focus={{ borderColor: 'cyan.400', boxShadow: 'none' }}
                    rows={4}
                  />
                </FormControl>

                <Button
                  type="submit"
                  width="100%"
                  size="lg"
                  bg="gray.900"
                  color="white"
                  _hover={{ bg: 'gray.800' }}
                  _active={{ bg: 'gray.700' }}
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  rightIcon={<Box as="span" ml={2}>→</Box>}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
} 