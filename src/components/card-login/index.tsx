import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Card, CardBody, Image, Center } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import axios from 'axios';

interface LoginFormProps {
    onLogin: (username: string, password: string) => void;
}

interface ResponseData {
    mensaje: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [accessMessage, setAccessMessage] = useState('');;

    const handleCheckAccess = async () => {
        try {
            const response = await axios.get<ResponseData>(`http://localhost:5016/api/Usuarios/Access?emplid=${employeeNumber}`)

            setAccessMessage(response.data.mensaje);
        } catch (error) {
            console.error('Error al verificar el acceso:', error);
            setAccessMessage('Error al verificar el acceso');
        }
    };

    return (
        <Card maxW='sm' w={500}>
            <CardBody>
                <Box p={4}>
                    <VStack spacing={4} align="stretch">
                        <Center>
                            <Image src='https://companieslogo.com/img/orig/MGA-61d0a782.png?t=1637168982' w={200} />
                        </Center>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input
                                focusBorderColor='black'
                                type="text"
                                value={employeeNumber}
                                onChange={(e) => setEmployeeNumber(e.target.value)}
                            />
                        </FormControl>
                        {/* <Link href='/pageOne'> */}
                            <Button colorScheme="red" onClick={handleCheckAccess} w='100%'>
                                Login
                            </Button>
                            <p>{accessMessage}</p>
                        {/* </Link> */}
                    </VStack>
                </Box>
            </CardBody>
        </Card>
    );
};

export default LoginForm;
