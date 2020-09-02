import { Box, Heading, Stack, Text } from '@chakra-ui/core';

import { DarkModeSwitch } from 'components/DarkModeSwitch';

interface LinkUIProps {
  title: string;
  subtitle: string;
}
const data: LinkUIProps[] = [
  { title: 'Twitter', subtitle: 'https://www.twitter.com/code_magician' },
  { title: 'LinkedIn', subtitle: 'https://www.twitter.com/code_magician' },
  { title: 'Portfolio', subtitle: 'https://www.twitter.com/code_magician' },
];

const LinkUI: React.FC<LinkUIProps> = (props) => {
  return (
    <Box>
      <Heading>{props.title}</Heading>
      <Text>{props.subtitle}</Text>
    </Box>
  );
};

const Links: React.FC = () => {
  return (
    <>
      <DarkModeSwitch />
      <Stack spacing={80}>
        {data.map((value) => {
          return LinkUI(value);
        })}
      </Stack>
    </>
  );
};

export default Links;
