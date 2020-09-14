import { Flex, Text } from '@chakra-ui/core';

const text = {
  madeIn: 'Proudly made in ',
  indiaEmoji: '🇮🇳',
  indiaLabel: 'India',
};

export const Footer: React.FC = () => {
  return (
    <Flex as="footer" py="1vh">
      <Text>
        {text.madeIn}
        <span role="img" aria-label={text.indiaLabel} aria-labelledby={text.indiaLabel}>
          {text.indiaEmoji}
        </span>
      </Text>
    </Flex>
  );
};
