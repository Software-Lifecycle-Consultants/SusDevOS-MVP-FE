export interface SignUpFormProps {
  email: string;
  password: string;
  confirmPassword: string;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
} 