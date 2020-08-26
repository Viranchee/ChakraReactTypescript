import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import type { AppProps /*, AppContext */ } from 'next/app';
import theme from '../theme';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
