import { useColorMode, Switch } from '@chakra-ui/core';
import { FC } from 'react';

interface Props {}

export const DarkModeSwitch: FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
