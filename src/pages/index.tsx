import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Button,
} from '@chakra-ui/core';

import { Hero } from 'components/Hero';
import { Container } from 'components/Container';
import { Main } from 'components/Main';
import { DarkModeSwitch } from 'components/DarkModeSwitch';
import { CTA } from 'components/CTA';
import { Footer } from 'components/Footer';
import React from 'react';
import Root from 'components/Root';

const Override = (props) => {
  console.log(props);
  return (
    <Root>
      <Text>Hello</Text>
      <Text>Viranchee</Text>
      <Button>Hello</Button>
    </Root>
  );
};

const Index = () => (
  <Container>
    <Hero title="Hello" />
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}>
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

// export default Override;
export default Index;
