import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ColorModeScript } from './theme/ColorModeScript'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
