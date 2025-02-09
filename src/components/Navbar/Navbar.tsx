import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const MenuLinks = () => (
    <>
      <Link href="#about">About</Link>
      <Link href="#solutions">Solutions</Link>
      <Link href="#case-studies">Case Studies</Link>
      <Link href="#contact">Contact</Link>
    </>
  );

  return (
    <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
      <Flex py={4} justify="space-between" align="center">
        <Link href="/" fontSize="xl" fontWeight="bold">
          <HStack spacing={2}>
            <Box 
              bg="cyan.400" 
              color="white" 
              px={3} 
              py={1} 
              borderRadius="md"
              fontSize="md"
            >
              SusDev OS
            </Box>
          </HStack>
        </Link>

        {/* Desktop Navigation */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          <HStack spacing={6}>
            <MenuLinks />
          </HStack>
          <HStack spacing={4}>
            <HStack spacing={2}>
              <Box as="span" role="img" aria-label="wave">👋</Box>
              <Link href="mailto:get@susdevos.com" color="gray.600">
                get@susdevos.com
              </Link>
            </HStack>
            <Button variant="ghost" color="gray.600">
              Sign in
            </Button>
            <Button
              as={RouterLink}
              to="/signup"
              bg="gray.900"
              color="white"
              _hover={{ bg: 'gray.800' }}
            >
              Register
            </Button>
          </HStack>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
        />

        {/* Mobile Navigation Drawer */}
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody pt={16}>
              <VStack spacing={6} align="start">
                <MenuLinks />
                <VStack spacing={4} align="stretch" width="100%" pt={4}>
                  <HStack spacing={2}>
                    <Box as="span" role="img" aria-label="wave">👋</Box>
                    <Link href="mailto:get@susdevos.com" color="gray.600">
                      get@susdevos.com
                    </Link>
                  </HStack>
                  <Button variant="ghost" width="100%">
                    Sign in
                  </Button>
                  <Button
                    as={RouterLink}
                    to="/signup"
                    bg="gray.900"
                    color="white"
                    width="100%"
                    _hover={{ bg: 'gray.800' }}
                  >
                    Register
                  </Button>
                </VStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Container>
  );
} 