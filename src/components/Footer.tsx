import { Flex, FlexProps } from '@chakra-ui/core';
import { FC } from 'react';

export const Footer: FC<FlexProps> = (props) => {
  return <Flex as="footer" py="1vh" {...props} />;
};
