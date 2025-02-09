import { Box } from '@chakra-ui/react';
import { Navbar } from '../Navbar/Navbar';

export function Header() {
  return (
    <Box 
      as="header" 
      position="sticky" 
      top={0} 
      bg="white" 
      zIndex="sticky"
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Navbar />
    </Box>
  );
} 