import LoginForm from '@/components/card-login';
import NavBar from '@/components/navbar-header';
import { Center, ChakraProvider } from '@chakra-ui/react';

const Home: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor, etc.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
      <ChakraProvider>
        <NavBar />
          <LoginForm onLogin={handleLogin} />
      </ChakraProvider>
  );
};

export default Home;
