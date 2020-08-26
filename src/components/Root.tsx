import { Flex, useColorMode, FlexProps } from '@chakra-ui/core';
import { FC, ReactElement } from 'react';

const Root: FC<FlexProps> = (props) => {
  console.log(props);
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };

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

export default Root;
