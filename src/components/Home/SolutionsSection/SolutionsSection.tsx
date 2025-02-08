import { Box, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'

export function SolutionsSection() {
  return (
    <Box as="section" py={20} bg="white">
      <Container maxW="1920px" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={12} align="center">
          {/* Header Section */}
          <VStack spacing={6} textAlign="center" maxW="800px">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              color="gray.900"
              fontWeight="medium"
            >
              How SusDev-OS Solves
              <br />
              the Problem
            </Heading>
            <Text fontSize="lg" color="gray.900">
              SusDev-OS revolutionizes climate-conscious development projects, 
              which helps cut back and keep track of emissions, restorations 
              and tree removals simplified for everyday use by people.
            </Text>
          </VStack>

          {/* Problem Section */}
          <Flex
            w="100%"
            gap={12}
            direction={{ base: 'column', lg: 'row' }}
            align="center"
          >
            <Box flex={1}>
              <Image
                src="/construction-impact.png"
                alt="Construction Impact Illustration"
                w="100%"
                borderRadius="24px"
              />
            </Box>
            <VStack flex={1} align="flex-start" spacing={4}>
              <Heading as="h3" fontSize="2xl" color="gray.900">
                The Problem
              </Heading>
              <Text fontSize="lg" color="gray.900">
                In an era where global 🌍 climate goals hang at a critical tipping point, 
                the challenge lies in our inability to truly assess, mitigate, monitor 
                and restore the climate impact of 🏗️ development projects.
              </Text>
            </VStack>
          </Flex>

          {/* Solution Section */}
          <Flex
            w="100%"
            gap={12}
            direction={{ base: 'column-reverse', lg: 'row' }}
            align="center"
          >
            <VStack flex={1} align="flex-start" spacing={4}>
              <Heading as="h3" fontSize="2xl" color="gray.900">
                The Solution
              </Heading>
              <Text fontSize="lg" color="gray.900">
                SusDev-OS 🌱 emerges as the catalyst for change, bridging the gap 
                between intention and action by delivering real-time climate impact 
                monitoring and actionable insights, charting the course toward a 
                sustainable future. 🌍
              </Text>
            </VStack>
            <Box flex={1}>
              <Image
                src="/dashboard-interface.png"
                alt="SusDev OS Dashboard Interface"
                w="100%"
                borderRadius="24px"
              />
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
} 