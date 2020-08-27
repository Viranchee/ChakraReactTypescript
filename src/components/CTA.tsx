import { Button, Link as ChakraLink } from '@chakra-ui/core';

import { Container } from './Container';
import { FC } from 'react';

export const CTA: FC<unknown> = () => {
  return (
    <Container flexDirection="row" position="fixed" bottom="0" width="100%" maxWidth="48rem" py={2}>
      <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
        <Button width="100%" variant="outline" variantColor="green">
          chakra-ui
        </Button>
      </ChakraLink>

      <ChakraLink
        isExternal
        href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
        flexGrow={3}
        mx={2}>
        <Button width="100%" variant="solid" variantColor="green">
          View Repo
        </Button>
      </ChakraLink>
    </Container>
  );
};
