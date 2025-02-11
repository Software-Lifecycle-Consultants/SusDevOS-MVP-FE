import {
  Box,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

interface StepThreeProps {
  email: string;
  onBackToLogin: () => void;
}

export function StepThree({ email, onBackToLogin }: StepThreeProps) {
  return (
    <VStack spacing={6} align="stretch">
      <VStack spacing={6} align="center">
        <Box
          bg="gray.100"
          p={4}
          borderRadius="full"
          width="64px"
          height="64px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={EmailIcon} w={8} h={8} color="gray.600" />
        </Box>

        <VStack spacing={1}>
          <Heading
            as="h1"
            fontSize="32px"
            fontWeight="semibold"
            color="gray.900"
            textAlign="center"
          >
            Check your email
          </Heading>
          <Text color="gray.600" fontSize="md" textAlign="center">
            We sent a verification link to
          </Text>
          <Text color="gray.900" fontSize="md" fontWeight="medium">
            {email}
          </Text>
        </VStack>

        <Text color="gray.600" fontSize="md" textAlign="center">
          This is to confirm you own the email you just registered with.
        </Text>

        <Link
          onClick={onBackToLogin}
          color="gray.600"
          _hover={{ color: 'gray.800' }}
          fontSize="sm"
          cursor="pointer"
          display="flex"
          alignItems="center"
          mt={4}
        >
          <Icon as={ArrowBackIcon} mr={1} />
          Back to log in
        </Link>
      </VStack>
    </VStack>
  );
} 