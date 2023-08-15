import { Box, Flex, Image} from '@chakra-ui/react';
import Logo from '../logos/index';

const NavBar: React.FC = () => {
  return (
    <Box bg="gray.800" px={4}>
      <Flex h='3rem' alignItems="center">
        <Logo />
      </Flex>
    </Box>
  );
};

export default NavBar;