import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        height: 'full',
        overflow: 'hidden'
      },
      body: {
        height: 'full',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        bgColor: mode('white', 'gray.900')(props),
        color: mode('black', 'white')(props)
      },
      '#__next': {
        height: 'full',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden'
      }
    })
  }
});
