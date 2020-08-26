import React from 'react';
import { Stack } from '@chakra-ui/core';

interface Props {}

export const Main = (props) => {
  // console.log({ ...props });
  return (
    <Stack
      spacing="1.5rem"
      width="100%"
      maxWidth="48rem"
      mt="-45vh"
      pt="8rem"
      px="1rem"
      {...props}
    />
  );
};
