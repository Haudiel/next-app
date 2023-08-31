import React from "react";
import { useRouter } from "next/router";
import SidebarWithHeader from "@/components/side-bar";
import { ChakraProvider } from "@chakra-ui/react";

const Entrada = () => {
    return (
        <ChakraProvider>
            <SidebarWithHeader/>
        </ChakraProvider>
    )
}   

export default Entrada