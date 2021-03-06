import { Flex, Heading } from '@chakra-ui/core';

interface Props {
  title?: string;
}

export const Hero: React.FC<Props> = ({ title }) => {
  return (
    <Flex justifyContent="center" alignItems="center" height="30vh">
      <Heading fontSize="10vw">{title}</Heading>
    </Flex>
  );
};

Hero.defaultProps = {
  title: 'with-chakra-ui',
};
