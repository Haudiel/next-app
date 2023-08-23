import SidebarWithHeader from '@/components/side-bar-selec';
import { ChakraProvider } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import CardSelect from '@/components/card-select';
// import { useTheme } from '@mui/material';

const homeCard: React.FC = () => {

    return (
        <ChakraProvider>
            <SidebarWithHeader />
        </ChakraProvider>
    );
};

export default homeCard;
