import { Flex, Heading } from '@chakra-ui/core';
import { FC } from 'react';

interface Props {
  title: string;
}

export const Hero: FC<Props> = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="10vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'with-chakra-ui',
};
