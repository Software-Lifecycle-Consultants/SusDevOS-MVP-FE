import { Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export function Hero() {
  return (
    // ... other hero content ...
    <Button
      as={RouterLink}
      to="/signup"
      size="lg"
      bg="#14171F"
      color="white"
      _hover={{ bg: '#2D3748' }}
    >
      Get Started
    </Button>
    // ... rest of the component
  );
} 