import { ColorModeProvider, ChakraProvider } from '@chakra-ui/core';
import type { AppProps /*, AppContext */ } from 'next/app';
import { FC } from 'react';
import theme from '../theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default MyApp;
