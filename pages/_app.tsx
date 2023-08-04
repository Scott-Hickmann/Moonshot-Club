import '../styles/global.css';

import { ChakraProvider, DarkMode, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const theme = extendTheme({
  fonts: {
    heading: 'Lora, serif',
    body: 'system-ui, sans-serif'
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DarkMode>
        <Component {...pageProps} />
      </DarkMode>
    </ChakraProvider>
  );
}
