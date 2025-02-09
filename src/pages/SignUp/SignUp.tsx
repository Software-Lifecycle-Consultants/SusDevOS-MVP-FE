import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const toast = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#$%^&*])(?=.{8,})/;
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must be at least 8 characters and include uppercase, lowercase, and a number or special character';
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box 
      bg="gray.50" 
      minH="100vh" 
      w="100vw"
      display="flex" 
      flexDirection="column"
    >
      <Header />
      <Box flex="1" w="full">
        <Container 
          maxW="full" 
          px={0} 
          h="full" 
          centerContent
        >
          <Flex 
            direction="column" 
            align="center" 
            justify="flex-start" 
            pt={8}
            w="full"
          >
            {/* Logo */}
            <Box
              bg="cyan.400"
              color="white"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="md"
              mb={8}
            >
              SusDev OS
            </Box>

            {/* Form Container */}
            <Box 
              w="full" 
              maxW="440px" 
              bg="white" 
              borderRadius="xl"
              boxShadow="sm"
              p={{ base: 6, md: 8 }}
              mx="auto"
            >
              <VStack spacing={6} align="stretch">
                <VStack spacing={1} align="center">
                  <Heading
                    as="h1"
                    fontSize="32px"
                    fontWeight="semibold"
                    color="gray.900"
                  >
                    Create an account
                  </Heading>
                  <Text color="gray.600" fontSize="md">
                    something should write here
                  </Text>
                </VStack>

                <form onSubmit={handleSubmit}>
                  <VStack spacing={5}>
                    <FormControl isInvalid={!!errors.email}>
                      <FormLabel color="gray.700">Email*</FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="lg"
                        borderRadius="md"
                        borderColor="gray.200"
                        _placeholder={{ color: 'gray.500' }}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.password}>
                      <FormLabel color="gray.700">Password*</FormLabel>
                      <Input
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="lg"
                        borderRadius="md"
                        borderColor="gray.200"
                        _placeholder={{ color: 'gray.500' }}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                      <Text fontSize="sm" color="gray.600" mt={1}>
                        Must be at least 8 characters.
                      </Text>
                    </FormControl>

                    <FormControl isInvalid={!!errors.confirmPassword}>
                      <FormLabel color="gray.700">Re-enter Password*</FormLabel>
                      <Input
                        type="password"
                        placeholder="Create a password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        size="lg"
                        borderRadius="md"
                        borderColor="gray.200"
                        _placeholder={{ color: 'gray.500' }}
                      />
                      <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                    </FormControl>

                    <Button
                      type="submit"
                      width="100%"
                      size="lg"
                      bg="gray.900"
                      color="white"
                      _hover={{ bg: 'gray.800' }}
                      mt={4}
                      h="48px"
                      fontSize="md"
                    >
                      Get started
                    </Button>
                  </VStack>
                </form>
              </VStack>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 