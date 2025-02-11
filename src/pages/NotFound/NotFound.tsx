import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PageContainer } from '../../components/PageContainer/PageContainer';

export function NotFound() {
  return (
    <PageContainer>
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }} centerContent>
        <VStack spacing={4} py={5} textAlign="center" maxW="600px">
          <VStack spacing={4}>
            <Heading
              as="h1"
              fontSize="2xl"
              fontWeight="semibold"
              color="gray.900"
            >
              Page Not Found
            </Heading>
            <Text color="gray.600" fontSize="md" maxW="md" lineHeight="tall">
              Our network runs deep—just like the mycelium beneath the forest floor.
              It seems one of our connections has slipped away. While our eco-data
              ecosystem is usually robust and intertwined, this page appears to have
              lost its thread. Let's help you reconnect with the main path.
            </Text>
          </VStack>
          <Box w="400px" h="400px" mt={2}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
              <style>
                {`
                  .mycelium { fill: none; stroke: #8B4513; stroke-width: 2; stroke-linecap: round; }
                  .node { fill: #D2B48C; stroke: #8B4513; stroke-width: 2; }
                  .central-node { fill: #A0522D; stroke: #8B4513; stroke-width: 3; }
                  .text { font-family: Arial, sans-serif; font-size: 18px; fill: #fff; text-anchor: middle; dominant-baseline: central; }
                `}
              </style>
              {/* Mycelial network paths */}
              <path className="mycelium" d="M200,200 C170,180,130,160,100,150" />
              <path className="mycelium" d="M200,200 C230,180,270,160,300,150" />
              <path className="mycelium" d="M200,200 C180,230,160,270,150,300" />
              <path className="mycelium" d="M200,200 C220,230,240,270,250,300" />
              <path className="mycelium" d="M100,150 C120,190,130,240,150,300" />
              <path className="mycelium" d="M300,150 C280,190,270,240,250,300" />
              {/* Nodes at the network ends */}
              <circle className="node" cx="100" cy="150" r="8" />
              <circle className="node" cx="300" cy="150" r="8" />
              <circle className="node" cx="150" cy="300" r="8" />
              <circle className="node" cx="250" cy="300" r="8" />
              {/* Central node displaying the 404 error */}
              <circle className="central-node" cx="200" cy="200" r="35" />
              <text x="200" y="200" className="text">404</text>
            </svg>
          </Box>
        </VStack>
      </Container>
    </PageContainer>
  );
} 