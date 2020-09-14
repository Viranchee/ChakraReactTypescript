import { VStack, Image, Heading } from '@chakra-ui/core';

import { LinkUI, LinkUIProps } from 'components/LinkUI';
import { Container } from 'components/Container';
import { DarkModeSwitch } from 'components/DarkModeSwitch';

const data: LinkUIProps[] = [
  { title: 'Twitter', url: 'https://www.twitter.com/code_magician' },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/viranchee/' },
  { title: 'Portfolio', url: 'https://www.viranchee.com' },
  { title: 'Email', url: 'mailto:viranchee@outlook.com' },
  { title: 'Phone', url: 'tel:+919029823078' },
];

const local = '/profile.jpg';

const Links: React.FC = () => {
  return (
    <Container>
      <DarkModeSwitch />
      <VStack spacing="10px" paddingTop={5}>
        <Image borderRadius="full" boxSize="150px" src={local} alt="Vir" />
        <Heading marginBottom={10}>Viranchee Lotia</Heading>
        {data.map((value) => {
          return <LinkUI title={value.title} url={value.url} key={value.title} />;
        })}
      </VStack>
    </Container>
  );
};

export default Links;
