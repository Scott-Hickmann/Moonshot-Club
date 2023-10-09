import '../styles/global.css';

import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { theme } from '../components/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DarkMode>
        <Component {...pageProps} />
      </DarkMode>
    </ChakraProvider>
  );
}
