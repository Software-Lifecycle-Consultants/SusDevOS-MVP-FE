import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';

interface StepTwoProps {
  organization: string;
  phoneNumber: string;
  message: string;
  agreed: boolean;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export function StepTwo({
  organization,
  phoneNumber,
  message,
  agreed,
  errors,
  handleChange,
  handleCheckbox,
  handleSubmit,
  onBack,
}: StepTwoProps) {
  return (
    <VStack spacing={6} align="stretch">
      <VStack spacing={1} align="center">
        <Heading
          as="h1"
          fontSize="32px"
          fontWeight="semibold"
          color="gray.900"
        >
          One more step.
        </Heading>
        <Text color="gray.600" fontSize="md">
          something should write here
        </Text>
        <Link
          onClick={onBack}
          color="gray.600"
          _hover={{ color: 'gray.800' }}
          fontSize="sm"
          cursor="pointer"
          mt={2}
        >
          Go back
        </Link>
      </VStack>

      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          <FormControl isInvalid={!!errors.organization}>
            <FormLabel color="gray.700">Organisation</FormLabel>
            <Input
              name="organization"
              value={organization}
              onChange={handleChange}
              placeholder="Enter your name"
              size="lg"
              borderRadius="md"
              borderColor="gray.200"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl isInvalid={!!errors.phoneNumber}>
            <FormLabel color="gray.700">Phone number</FormLabel>
            <Input
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              placeholder="+94 (555) 000-0000"
              size="lg"
              borderRadius="md"
              borderColor="gray.200"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl isInvalid={!!errors.message}>
            <FormLabel color="gray.700">Your Message</FormLabel>
            <Textarea
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Write here if you have anything else to know."
              size="lg"
              borderRadius="md"
              borderColor="gray.200"
              _placeholder={{ color: 'gray.500' }}
              rows={4}
            />
          </FormControl>

          <FormControl>
            <Checkbox
              name="agreed"
              isChecked={agreed}
              onChange={handleCheckbox}
              colorScheme="cyan"
            >
              I agree to the{' '}
              <Link color="cyan.500" href="#">
                terms
              </Link>{' '}
              and{' '}
              <Link color="cyan.500" href="#">
                conditions
              </Link>
            </Checkbox>
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
            isDisabled={!agreed}
          >
            Create Account
          </Button>
        </VStack>
      </form>
    </VStack>
  );
} 