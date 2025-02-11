import { Box, Container, ContainerProps } from '@chakra-ui/react';

interface PageContainerProps extends ContainerProps {
  variant?: 'default' | 'full-width';
}

export function PageContainer({ 
  variant = 'default', 
  children, 
  ...props 
}: PageContainerProps) {
  if (variant === 'full-width') {
    return <>{children}</>;
  }

  return (
    <Box w="full" minW="100vw">
      <Container 
        maxW="1920px" 
        px={{ base: 4, md: 6, lg: 8 }} 
        centerContent 
        w="full"
        {...props}
      >
        {children}
      </Container>
    </Box>
  );
} 