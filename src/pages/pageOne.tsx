import LoginForm from '@/components/card-login';
import NavBar from '@/components/navbar-header';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Heading, Button, Box, Flex, IconButton, Spacer, Center, ChakraProvider } from '@chakra-ui/react';

const pageOne: React.FC = () => {
    const handleLogin = (username: string, password: string) => {
        // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor, etc.
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <LoginForm onLogin={handleLogin} />
    );
};

export default pageOne;
