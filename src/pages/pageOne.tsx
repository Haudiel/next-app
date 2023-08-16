import LoginForm from '@/components/card-login';
import Example from '@/components/table';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '@emotion/react';
import { createTheme, useTheme } from '@mui/material';
import React, { useMemo } from 'react';
// import { useTheme } from '@mui/material';

const pageOne: React.FC = () => {
    // const theme = useTheme
    const globalTheme = useTheme()

    const tableTheme = globalTheme
    const handleLogin = (username: string, password: string) => {
        // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor, etc.
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <ChakraProvider>
            {/* <LoginForm onLogin={handleLogin} /> */}
            <Example/>
        </ChakraProvider>
    );
};

export default pageOne;
