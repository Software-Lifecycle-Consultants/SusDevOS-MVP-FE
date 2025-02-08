import '@chakra-ui/react';

declare module '@chakra-ui/react' {
  interface CustomTheme {
    // Add your custom theme type extensions here
    colors: {
      brand: {
        50: string;
        // ... other shades
        900: string;
      };
    };
  }
} 