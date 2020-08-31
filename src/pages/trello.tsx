import { Container } from 'next/app';
import { DarkModeSwitch } from 'components/DarkModeSwitch';

const Trello: React.FC = () => {
  return (
    <Container>
      <DarkModeSwitch />
      <h1>Hello</h1>
    </Container>
  );
};

export default Trello;
