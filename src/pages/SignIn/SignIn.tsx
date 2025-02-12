import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { authService } from '../../services/auth.service'

export function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await authService.login(formData.email, formData.password);
        
        // Store remember me preference
        localStorage.setItem('rememberMe', rememberMe.toString());
        
        // Store tokens
        authService.setTokens({
          access_token: response.access_token,
          refresh_token: response.refresh_token,
        });

        toast({
          title: 'Success',
          description: 'Successfully signed in!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        navigate('/dashboard');
      } catch (error) {
        toast({
          title: 'Error',
          description: error instanceof Error 
            ? error.message 
            : 'An error occurred while signing in',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <PageContainer>
      <Flex direction="column" align="center" w="full" py={8}>
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
        >
          <VStack spacing={6} align="stretch">
            <VStack spacing={1} align="center">
              <Heading
                as="h1"
                fontSize="32px"
                fontWeight="semibold"
                color="gray.900"
              >
                Log in to your account
              </Heading>
              <Text color="gray.600" fontSize="md">
                Welcome back! Please enter your details.
              </Text>
            </VStack>

            <form onSubmit={handleSubmit}>
              <VStack spacing={5}>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel color="gray.700">Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    size="lg"
                    borderRadius="md"
                    borderColor="gray.200"
                    _placeholder={{ color: 'gray.500' }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password}>
                  <FormLabel color="gray.700">Password</FormLabel>
                  <Input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    size="lg"
                    borderRadius="md"
                    borderColor="gray.200"
                    _placeholder={{ color: 'gray.500' }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <Flex justify="space-between" w="full" align="center">
                  <Checkbox
                    isChecked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    colorScheme="cyan"
                  >
                    Remember for 30 days
                  </Checkbox>
                  <Link
                    as={RouterLink}
                    to="/forgot-password"
                    color="gray.900"
                    _hover={{ color: 'gray.700' }}
                    fontSize="sm"
                  >
                    Forgot password
                  </Link>
                </Flex>

                <Button
                  type="submit"
                  width="100%"
                  size="lg"
                  bg="gray.900"
                  color="white"
                  _hover={{ bg: 'gray.800' }}
                  h="48px"
                  fontSize="md"
                >
                  Sign in
                </Button>
              </VStack>
            </form>

            <Text color="gray.600" fontSize="sm" textAlign="center">
              Don't have an account?{' '}
              <Link
                as={RouterLink}
                to="/signup"
                color="gray.900"
                _hover={{ color: 'gray.700' }}
                fontWeight="medium"
              >
                Sign up
              </Link>
            </Text>
          </VStack>
        </Box>
      </Flex>
    </PageContainer>
  );
} 