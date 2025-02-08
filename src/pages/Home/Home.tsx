import { Box } from '@chakra-ui/react'
import { Header } from '../../components/Header/Header'
import { TitleSection } from '../../components/TitleSection/TitleSection'

export function Home() {
    //console.log('Home component rendered')  
  return (
    <Box as="main" minH="100vh" bg="gray.50">
      <Header />
      <TitleSection />
      {/* Other sections will be added here */}
    </Box>
  )
} 