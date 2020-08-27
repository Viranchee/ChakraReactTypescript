import { Switch, useColorMode } from '@chakra-ui/core';
import { FC } from 'react';

export const DarkModeSwitch: FC<unknown> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Switch position="fixed" top="1rem" right="1rem" color="green" isChecked={isDark} onChange={toggleColorMode} />
  );
};
