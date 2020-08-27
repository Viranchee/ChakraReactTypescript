import { Button, Link as ChakraLink, Code, Icon, List, ListIcon, ListItem, Text } from '@chakra-ui/core';
import React, { FC } from 'react';
// My Files
import { CTA } from 'components/CTA';
import { Container } from 'components/Container';
import { DarkModeSwitch } from 'components/DarkModeSwitch';
import { Footer } from 'components/Footer';
import { Hero } from 'components/Hero';
import { Main } from 'components/Main';
import Root from 'components/Root';

export const Override: FC<unknown> = () => {
  return (
    <Root>
      <Text>Hello</Text>
      <Text>Viranchee</Text>
      <Button>Hello</Button>
    </Root>
  );
};

const Index: FC<unknown> = () => {
  return (
    <Container>
      <Hero title="Viranchee" />
      <Main>
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
        </Text>

        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
              Chakra UI <Icon name="external-link" mx="2px" />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
              Next.js <Icon name="external-link" mx="2px" />
            </ChakraLink>
          </ListItem>
        </List>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      <CTA />
    </Container>
  );
};
export default Index;
