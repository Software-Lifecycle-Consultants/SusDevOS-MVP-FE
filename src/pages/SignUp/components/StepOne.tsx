import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SignUpFormProps } from '../types';

export function StepOne({ 
  email, 
  password, 
  confirmPassword, 
  errors, 
  handleChange, 
  handleSubmit 
}: SignUpFormProps) {
  return (
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
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleChange}
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
              name="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={handleChange}
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
              name="confirmPassword"
              type="password"
              placeholder="Create a password"
              value={confirmPassword}
              onChange={handleChange}
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
  );
} 