import { Button } from '@chakra-ui/core';

export interface LinkUIProps {
  title: string;
  url: string;
}

export const LinkUI: React.FC<LinkUIProps> = (props) => {
  return (
    <Button
      // A Tag Props
      as="a"
      rel="noreferrer noopener"
      target="_blank"
      href={props.url}
      // ChakraProps
      variant="outline"
      colorScheme="teal"
      size="lg"
      height="48px"
      width="30em">
      {props.title}
      {/* <Text fontSize="3xl">{props.title}</Text> */}
    </Button>
  );
};
