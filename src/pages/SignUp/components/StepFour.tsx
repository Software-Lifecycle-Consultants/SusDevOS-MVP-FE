import {
  Box,
  Button,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ArrowBackIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

interface StepFourProps {
  onGotoHome: () => void;
}

export function StepFour({ onGotoHome }: StepFourProps) {
  const navigate = useNavigate();

  return (
    <VStack spacing={6} align="stretch">
      <VStack spacing={6} align="center">
        <Box
          bg="green.50"
          p={4}
          borderRadius="full"
          width="64px"
          height="64px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={CheckCircleIcon} w={8} h={8} color="green.500" />
        </Box>

        <VStack spacing={1}>
          <Heading
            as="h1"
            fontSize="32px"
            fontWeight="semibold"
            color="gray.900"
            textAlign="center"
          >
            Email verified
          </Heading>
          <Text color="gray.600" fontSize="md" textAlign="center">
            Your account has been successfully created
          </Text>
          <Text color="gray.600" fontSize="md" textAlign="center">
            Click below to log in magically.
          </Text>
        </VStack>

        <Button
          width="100%"
          size="lg"
          bg="gray.900"
          color="white"
          _hover={{ bg: 'gray.800' }}
          h="48px"
          fontSize="md"
          onClick={() => navigate('/signin')}
        >
          Continue
        </Button>

        <Link
          onClick={onGotoHome}
          color="gray.600"
          _hover={{ color: 'gray.800' }}
          fontSize="sm"
          cursor="pointer"
          display="flex"
          alignItems="center"
          mt={2}
        >
          <Icon as={ArrowBackIcon} mr={1} />
          Go to Home
        </Link>
      </VStack>
    </VStack>
  );
} 