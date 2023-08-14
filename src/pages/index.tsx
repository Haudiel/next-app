import LoginForm from '@/components/card-login';
import NavBar from '@/components/navbar-header';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Heading, Button, Box, Flex, IconButton, Spacer, Center, ChakraProvider } from '@chakra-ui/react';

const Home: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor, etc.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <ChakraProvider>
      <NavBar />
      <Center h="70vh">
        <LoginForm onLogin={handleLogin} />
      </Center>
    </ChakraProvider>
  );
};

export default Home;
