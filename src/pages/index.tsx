import { Link as ChakraLink, Icon, List, ListIcon, ListItem, Text } from '@chakra-ui/core';
// My Files
import { Container } from 'components/Container';
import { DarkModeSwitch } from 'components/DarkModeSwitch';
import { Footer } from 'components/Footer';
import { Hero } from 'components/Hero';
import { Main } from 'components/Main';

const data = {
  name: 'Viranchee Lotia',
  description: "I'm a Full Stack Developer",
  githubDesc: 'Viranchee',
  github: 'https://www.github.com/Viranchee',
  twitterDesc: '@code_magician',
  twitter: 'https://www.twitter.com/code_magician',
};

const Index: React.FC = () => {
  return (
    <Container>
      <DarkModeSwitch />
      <Hero title={data.name} />
      <Main>
        <Text>{data.description}</Text>

        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon color="green.500" />
            <ChakraLink isExternal href={data.github} flexGrow={1} mr={2}>
              {data.githubDesc} <Icon name="external-link" mx="2px" />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon color="green.500" />
            <ChakraLink isExternal href={data.twitter} flexGrow={1} mr={2}>
              {data.twitterDesc} <Icon name="external-link" mx="2px" />
            </ChakraLink>
          </ListItem>
        </List>
      </Main>

      <Footer />
    </Container>
  );
};
export default Index;
