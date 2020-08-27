import { CSSReset, ColorModeProvider, ThemeProvider } from '@chakra-ui/core';
import type { AppProps /*, AppContext */ } from 'next/app';
import { FC } from 'react';
import theme from '../theme';

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
