import {
  Box,
  Button,
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
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { StepOne } from './components/StepOne';
import { StepTwo } from './components/StepTwo';
import { StepThree } from './components/StepThree';

export function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    phoneNumber: '',
    message: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(e.target.checked);
  };

  const validateStepOne = () => {
    const newErrors: Record<string, string> = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#$%^&*])(?=.{8,})/;
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must include an uppercase letter';
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = 'Password must include a lowercase letter';
    } else if (!/[0-9!@#$%^&*]/.test(formData.password)) {
      newErrors.password = 'Password must include a number or special character';
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setStep(2);
    }
  };

  const validateStepTwo = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.organization) {
      newErrors.organization = 'Organisation is required';
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }
    if (!agreed) {
      newErrors.agreed = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      validateStepOne();
    } else if (step === 2) {
      if (validateStepTwo()) {
        setStep(3); // Move to confirmation screen after successful submission
        // Handle API submission here if needed
      }
    }
  };

  const handleBack = () => {
    setStep(1);
    setErrors({});  // Clear any errors when going back
  };

  const handleBackToLogin = () => {
    // Navigate to login page
    // You might want to use react-router's navigate here
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
          {step === 1 ? (
            <StepOne
              {...formData}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          ) : step === 2 ? (
            <StepTwo
              {...formData}
              agreed={agreed}
              errors={errors}
              handleChange={handleChange}
              handleCheckbox={handleCheckbox}
              handleSubmit={handleSubmit}
              onBack={handleBack}
            />
          ) : (
            <StepThree
              email={formData.email}
              onBackToLogin={handleBackToLogin}
            />
          )}
        </Box>
      </Flex>
    </PageContainer>
  );
} 