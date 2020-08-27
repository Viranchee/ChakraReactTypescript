import { Link as ChakraLink, Icon, List, ListIcon, ListItem, Text } from '@chakra-ui/core';
import React, { FC } from 'react';
// My Files
import { Container } from 'components/Container';
import { DarkModeSwitch } from 'components/DarkModeSwitch';
import { Footer } from 'components/Footer';
import { Hero } from 'components/Hero';
import { Main } from 'components/Main';

const data = {
  name: 'Viranchee Lotia',
  description: "I'm a Full Stack Developer",
};

const Index: FC<unknown> = () => {
  return (
    <Container>
      <Hero title={data.name} />
      <DarkModeSwitch />
      <Main>
        <Text>{data.description}</Text>

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

      <Footer>
        <Text>Made with ❤️ in 🇮🇳</Text>
      </Footer>
    </Container>
  );
};
export default Index;
