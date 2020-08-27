import { Flex, FlexProps, useColorMode } from '@chakra-ui/core';
import React, { FC } from 'react';

export const Container: FC<FlexProps> = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };
  hello();
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};

const hello = function () {
  console.warn('Hello');
};
