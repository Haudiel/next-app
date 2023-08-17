import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, FormControl, FormLabel, Input, VStack, Card, CardBody, Image, Center, Alert, AlertDescription, AlertIcon, AlertTitle, Collapse } from '@chakra-ui/react';
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
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const router = useRouter();

    const handleCheckAccess = async () => {
        try {
            const response = await axios.get<ResponseData>(`https://localhost:7063/AdminUser/Access?emplid=${employeeNumber}`)
            localStorage.setItem('noEmpleado', employeeNumber)
            setAccessMessage(response.data.mensaje);
            if (response.data.mensaje === 'Access') {
                setShowSuccessAlert(true);
                const redirectTimeout = setTimeout(() => {
                    router.push('/pageOne');
                }, 1500);
            }
        } catch (error) {
            console.error('Error al verificar el acceso:', error);
            setAccessMessage('Error al verificar el acceso');
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center" // Centrar verticalmente
            alignItems="center" // Centrar horizontalmente
            width="100vw"
            height="70vh"
        >
            <Card maxW='sm' w='35%'>
                <CardBody>
                    <Box p={4}>
                        <VStack spacing={4} align="stretch">
                            <Center>
                                <Image src='https://companieslogo.com/img/orig/MGA-61d0a782.png?t=1637168982' w='50%' />
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
                            <Button colorScheme="red" onClick={handleCheckAccess} w='100%'>
                                Login
                            </Button>
                            {showSuccessAlert && (
                                <Collapse in={showSuccessAlert} animateOpacity>
                                    <Alert
                                        status='success'
                                        variant='subtle'
                                        flexDirection='column'
                                        alignItems='center'
                                        justifyContent='center'
                                        textAlign='center'
                                        height='150px'
                                        borderRadius={10}
                                        mt={4}
                                    >
                                        <AlertIcon boxSize='40px' mr={0} />
                                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                                            ¡Acceso permitido!
                                        </AlertTitle>
                                        <AlertDescription maxWidth='sm'>
                                            Has obtenido acceso con éxito.
                                        </AlertDescription>
                                    </Alert>
                                </Collapse>
                            )}
                        </VStack>
                    </Box>
                </CardBody>
            </Card>
        </Box>
    );
};

export default LoginForm;
