import '../styles/global.css';

import { ChakraProvider, DarkMode, extendTheme } from '@chakra-ui/react';
import { Lora } from '@next/font/google';
import type { AppProps } from 'next/app';

// const lora = Lora({ subsets: ['latin'] });

// const theme = extendTheme({
//   fonts: {
//     heading: lora.style.fontFamily
//   }
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS /*theme={theme}*/>
      <DarkMode>
        <Component {...pageProps} />
      </DarkMode>
    </ChakraProvider>
  );
}
