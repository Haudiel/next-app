import LoginForm from '@/components/card-login';
import SidebarWithHeader from '@/components/side-bar';
import { ChakraProvider } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

const pageOne = () => {
    const route = useRouter()
    console.log(route.query)
    return (
        <ChakraProvider>
            <SidebarWithHeader/>
        </ChakraProvider>
    );
};

export default pageOne;
