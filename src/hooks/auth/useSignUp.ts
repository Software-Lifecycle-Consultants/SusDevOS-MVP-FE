import { useMutation } from '@tanstack/react-query';
import { authService } from '@/lib/api/services/auth';
import { useAuthStore } from '@/lib/store/auth';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

interface ErrorResponse {
  message: string;
}

export function useSignUp() {
  const setAuth = useAuthStore((state: { setAuth: (token: string, user: { id: string; email: string; organization: string }) => void }) => state.setAuth);
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authService.signUp,
    onSuccess: (response) => {
      const { token, user } = response.data;
      setAuth(token, user);
      toast({
        title: 'Account created.',
        description: 'Please check your email to verify your account.',
        status: 'success',
      });
      navigate('/signup/verify');
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast({
        title: 'Sign up failed.',
        description: error.response?.data?.message || 'Please try again.',
        status: 'error',
      });
    },
  });
} 