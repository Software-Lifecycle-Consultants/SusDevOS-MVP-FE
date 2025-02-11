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
  Stack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll
      navigate('/#' + sectionId);
    }
  };

  const MenuLinks = () => (
    <>
      <Link
        onClick={() => scrollToSection('about')}
        color="gray.600"
        _hover={{ color: 'gray.900' }}
        cursor="pointer"
      >
        About
      </Link>
      <Link
        onClick={() => scrollToSection('solutions')}
        color="gray.600"
        _hover={{ color: 'gray.900' }}
        cursor="pointer"
      >
        Solutions
      </Link>
      <Link
        onClick={() => scrollToSection('case-studies')}
        color="gray.600"
        _hover={{ color: 'gray.900' }}
        cursor="pointer"
      >
        Case Studies
      </Link>
      <Link
        onClick={() => scrollToSection('contact')}
        color="gray.600"
        _hover={{ color: 'gray.900' }}
        cursor="pointer"
      >
        Contact
      </Link>
    </>
  );

  return (
    <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
      <Flex h={20} align="center" justify="space-between">
        {/* Logo */}
        <Link
          as={RouterLink}
          to="/"
          bg="cyan.400"
          color="white"
          px={3}
          py={1}
          borderRadius="md"
          fontSize="md"
          _hover={{ textDecoration: 'none', bg: 'cyan.500' }}
        >
          SusDev OS
        </Link>

        {/* Navigation */}
        <Stack direction="row" spacing={8} align="center">
          <MenuLinks />
          <Link color="gray.600" _hover={{ color: 'gray.900' }}>
            👋 get@susdevos.com
          </Link>
        </Stack>

        {/* Auth Buttons */}
        <Stack direction="row" spacing={4}>
          <Link
            as={RouterLink}
            to="/signin"
            color="gray.600"
            _hover={{ color: 'gray.900' }}
          >
            Sign in
          </Link>
          <Button
            onClick={() => navigate('/signup')}
            bg="gray.900"
            color="white"
            _hover={{ bg: 'gray.800' }}
            size="sm"
            px={8}
          >
            Register
          </Button>
        </Stack>

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
            <DrawerCloseButton mt={4} />
            <DrawerBody pt={16} px={6}>
              <VStack spacing={6} align="start">
                <MenuLinks />
                <VStack spacing={4} align="stretch" width="100%" pt={4}>
                  <Link color="gray.600" _hover={{ color: 'gray.900' }}>
                    👋 get@susdevos.com
                  </Link>
                  <Button variant="ghost" width="100%">
                    Sign in
                  </Button>
                  <Button
                    onClick={() => navigate('/signup')}
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