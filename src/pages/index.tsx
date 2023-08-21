import LoginForm from '@/components/card-login';
import NavBar from '@/components/navbar-header';
import { Center, ChakraProvider, useDisclosure } from '@chakra-ui/react';
import React from 'react';

const Home: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor, etc.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
      <ChakraProvider>
        <NavBar/>
          <LoginForm onLogin={handleLogin} />
      </ChakraProvider>
  );
};

export default Home;
