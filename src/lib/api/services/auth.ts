import { AxiosResponse } from 'axios';
import api from '../axios';

interface SignUpData {
  email: string;
  password: string;
  organization: string;
  phoneNumber: string;
  message: string;
}

interface SignInData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    organization: string;
  };
}

export const authService = {
  signUp: (data: SignUpData): Promise<AxiosResponse<AuthResponse>> => 
    api.post('/auth/signup', data),
  
  signIn: (data: SignInData): Promise<AxiosResponse<AuthResponse>> => 
    api.post('/auth/signin', data),
  
  verifyEmail: (token: string): Promise<AxiosResponse<void>> => 
    api.post(`/auth/verify-email/${token}`),
    
  forgotPassword: (email: string): Promise<AxiosResponse<void>> => 
    api.post('/auth/forgot-password', { email }),
}; 