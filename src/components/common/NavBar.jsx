import { Flex, Box, HStack, Link, IconButton, Spacer, Button, VStack, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useColorMode } from '../ui/color-mode';
import { BiMoon, BiSun, BiMenu, BiX } from 'react-icons/bi';
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
  } from '@/components/ui/drawer'

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure()
  
  return (
    <Box px={4} shadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo or App Name */}
        <Box fontWeight="bold" fontSize="lg">
          <Link as={RouterLink} to="/">
            MyApp
          </Link>
        </Box>
        <Spacer />

        {/* Desktop Navigation Links */}
        <HStack fontWeight={'bold'} spacing={4} as="nav" display={{ base: 'none', md: 'flex' }}>
          <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ bg: colorMode === 'light' ? 'gray.200' : 'gray.700' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" px={2} py={1} rounded="md" _hover={{ bg: colorMode === 'light' ? 'gray.200' : 'gray.700' }}>
            About
          </Link>
          <Link as={RouterLink} to="/about" px={2} py={1} rounded="md" _hover={{ bg: colorMode === 'light' ? 'gray.200' : 'gray.700' }}>
            Projects
          </Link>
          <Link as={RouterLink} to="/about" px={2} py={1} rounded="md" _hover={{ bg: colorMode === 'light' ? 'gray.200' : 'gray.700' }}>
            Skills
          </Link>
          <Link as={RouterLink} to="/about" px={2} py={1} rounded="md" _hover={{ bg: colorMode === 'light' ? 'gray.200' : 'gray.700' }}>
            Experiance
          </Link>
          <Link as={RouterLink} to="/contact" px={2} py={1} rounded="md" _hover={{ bg: colorMode === 'light' ? 'gray.200' : 'gray.700' }}>
            Contact us
          </Link>
        </HStack>

        {/* Mobile Menu Icon */}
        
         

        
        <Spacer />
        <Button variant={'plain'} onClick={toggleColorMode} rounded={'full'}>
          {colorMode === "light" ? <BiMoon /> : <BiSun />}
        </Button>
        <DrawerRoot  placement={'top'}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
            <Button
          variant={'plain'}
          display={{ base: 'flex', md: 'none' }}
          
        >{isOpen ? <BiX /> : <BiMenu />}</Button>
            </DrawerTrigger>
            <DrawerContent
             
            >
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
              <Box      >
        <VStack spacing={4} align="start" w={'full'}>
          <Link as={RouterLink} to="/" w={'full'} px={2} py={1} rounded="md" >
            Home
          </Link>
          <Link as={RouterLink} to="/about" w={'full'} px={2} py={1} rounded="md" >
            About
          </Link>
          <Link as={RouterLink} to="/contact" w={'full'} px={2} py={1} rounded="md" >
            Contact
          </Link>
        </VStack>
      </Box>
              </DrawerBody>
              <DrawerFooter>
                
              </DrawerFooter>
              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
      </Flex>

      {/* Mobile Navigation Links */}
      
    </Box>
  );
}

export default NavBar;
