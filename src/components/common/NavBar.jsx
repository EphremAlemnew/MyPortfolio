import { Flex, Box, HStack, Link, IconButton, Spacer, Button, VStack, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useColorMode } from '../ui/color-mode';
import { BiMoon, BiSun, BiMenu, BiX } from 'react-icons/bi';
import { useColorModeValue } from '../ui/color-mode';
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
  } from '@/components/ui/drawer';

function NavBar({onNavigate}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const bg = colorMode === 'light' ? 'white' : 'gray.800';
  const textColor = colorMode === 'light' ? 'gray.800' : 'white';

  return (
    <Box px={4} shadow="md" position="fixed" top={0} width="100%" zIndex={1000} bg={bg} color={textColor}>
      <Flex h={16} alignItems="center" mx={{lg:'14'}} justifyContent="space-between">
        {/* Logo or App Name */}
        <Box fontWeight="bold" fontSize="lg">
          <Link as={RouterLink} to="/">
           Ephrem Alemnew
          </Link>
        </Box>
        <Spacer />

        {/* Desktop Navigation Links */}
        <HStack fontWeight={'bold'} spaceX={'8'} as="nav" display={{ base: 'none', md: 'flex' }} justifyContent="space-between">
          <Link onClick={() => onNavigate('home')} cursor="pointer" >Home</Link>
          <Link onClick={() => onNavigate('about')} cursor="pointer">About</Link>
          <Link onClick={() => onNavigate('projects')} cursor="pointer">Projects</Link>
          <Link onClick={() => onNavigate('experiences')} cursor="pointer">Experiences</Link>
          <Link onClick={() => onNavigate('contact')} cursor="pointer">Contact</Link>
        </HStack>

        {/* Mobile Menu Icon */}  
        <Spacer />
        <Button variant={'plain'} onClick={toggleColorMode} rounded={'full'}>
          {colorMode === "light" ? <BiMoon /> : <BiSun />}
        </Button>
        <DrawerRoot placement={'top'}>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button
              variant={'plain'}
              display={{ base: 'flex', md: 'none' }}
            >{isOpen ? <BiX /> : <BiMenu />}</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <Box>
                <VStack spacing={4} align="start" w={'full'}>
                  <Link onClick={() => onNavigate('home')} cursor="pointer">Home</Link>
                  <Link onClick={() => onNavigate('about')} cursor="pointer">About</Link>
                  <Link onClick={() => onNavigate('projects')} cursor="pointer">Projects</Link>
                  <Link onClick={() => onNavigate('experiences')} cursor="pointer">Experiences</Link>
                  <Link onClick={() => onNavigate('contact')} cursor="pointer">Contact</Link>
                </VStack>
              </Box>
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Flex>
    </Box>
  );
}

export default NavBar;
