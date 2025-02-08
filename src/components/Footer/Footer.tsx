import { Box, Container, HStack, Link, Text } from '@chakra-ui/react'

export function Footer() {
  const links = [
    { label: 'About', href: '#' },
    { label: 'Benefits', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
  ]

  return (
    <Box 
      as="footer" 
      py={8} 
      bg="#0F172A"  // Updated to match design's dark background
      color="white"
      width="100%"
      borderTop="1px solid"
      borderColor="gray.800"
    >
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
        <HStack
          spacing={8}
          justify="center"
          flexWrap="wrap"
          sx={{
            '@media (max-width: 480px)': {
              '& > *': {
                width: '100%',
                textAlign: 'center',
              },
            },
          }}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              fontSize="md"
              color="gray.300"  // Updated for better visibility
              _hover={{ color: 'cyan.400' }}
              fontWeight="medium"
            >
              {link.label}
            </Link>
          ))}
        </HStack>
      </Container>
    </Box>
  )
} 