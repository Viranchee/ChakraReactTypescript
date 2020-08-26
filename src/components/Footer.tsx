import { Flex, FlexProps } from '@chakra-ui/core';
import { FC } from 'react';

export const Footer: FC<FlexProps> = (props) => (
  <Flex as="footer" py="8rem" {...props} />
);
