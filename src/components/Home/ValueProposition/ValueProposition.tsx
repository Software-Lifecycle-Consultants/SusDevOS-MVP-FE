import { Box, Container, Flex, Text, Heading } from '@chakra-ui/react'

interface ValueItemProps {
  title: string;
  description: string;
  align?: 'left' | 'right';
}

const ValueItem = ({ title, description, align = 'left' }: ValueItemProps) => (
  <Box maxW="320px" textAlign={align}>
    <Heading as="h3" fontSize="xl" mb={4} color="gray.900">
      {title}
    </Heading>
    <Text color="gray.600" fontSize="md">
      {description}
    </Text>
  </Box>
)

export function ValueProposition() {
  return (
    <Box 
      as="section" 
      h="379px" 
      bg="gray.50" 
      w="100%"
      pt={20}
    >
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }} h="100%">
        <Flex 
          justify="space-between" 
          align="center" 
          h="100%"
          position="relative"
        >
          {/* Left side values */}
          <Flex direction="column" gap={12}>
            <ValueItem
              title="Realtime data from development projects"
              description="Projects location, ESG, resource footprint data digitized."
            />
            <ValueItem
              title="Tangible climate reporting"
              description="Manage and streamline work towards tangible sustainable development."
            />
          </Flex>

          {/* Center logo */}
          <Flex
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
            w="200px"
            h="200px"
            bg="cyan.400"
            borderRadius="full"
            align="center"
            justify="center"
            boxShadow="0 0 0 8px rgba(255, 255, 255, 0.8)"
          >
            <Text fontSize="2xl" color="white" fontWeight="bold">
              SusDev OS
            </Text>
          </Flex>

          {/* Right side values */}
          <Flex direction="column" gap={12}>
            <ValueItem
              title="GHG Emissions, Reductions & Offsets"
              description="Projects and their sub-projects workflow is automated across phases."
              align="right"
            />
            <ValueItem
              title="Collaborative, Node mesh & AI"
              description="Data shared with SaaS/ self hosted nodes on demand via inbuild REST API services. AI data summaries upport work."
              align="right"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
} 