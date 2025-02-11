import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export function MainLayout() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex="1" bg="gray.50">
        <Box w="full">
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
} 