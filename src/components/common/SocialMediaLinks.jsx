import React, { useState } from 'react';
import { Box, VStack, Link, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { BiDotsHorizontalRounded, BiMessageAltMinus, BiSolidMessage } from 'react-icons/bi';
import { useColorModeValue } from '../ui/color-mode';
import { FaMessage } from 'react-icons/fa6';

const SocialMediaLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic background colors for light and dark mode
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const toggleLinks = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="fixed" bottom="4" left="4" zIndex="1000">
      {/* Floating Button */}
      <Button
        aria-label="Toggle Social Media Links"
        size="lg"
        rounded="full"
        colorScheme="teal"
        boxShadow={isOpen ? '0 0 15px 4px teal' : 'md'}
        transform={isOpen ? 'rotate(360deg)' : 'rotate(0deg)'}
        transition="all 0.3s ease"
        onClick={toggleLinks}
      >
        <BiDotsHorizontalRounded />
      </Button>

      {/* Social Media Links */}
      {isOpen && (
        <VStack
          position="absolute"
          bottom="16"
          right="0"
          p={4}
          shadow="lg"
          rounded="md"
          borderWidth="1px"
          bg={bgColor} // Dynamic background
          borderColor={borderColor} // Dynamic border color
          animation="fadeIn 0.5s"
        >
          {/* GitHub */}
          <Link
            fontSize="2xl"
            href="https://github.com/EphremAlemnew"
            isExternal
            transition="all 0.3s ease"
            _hover={{
              transform: 'scale(1.2)',
              color: 'teal.500',
            }}
          >
            <FaGithub />
          </Link>

          {/* LinkedIn */}
          <Link
            fontSize="2xl"
            mt="2"
            href="https://www.linkedin.com/in/ephrem-alemnew-8aa173259/"
            isExternal
            transition="all 0.3s ease"
            _hover={{
              transform: 'scale(1.2)',
              color: 'blue.700',
            }}
          >
            <FaLinkedin />
          </Link>
           
          {/* Twitter */}
          {/* <Link
            fontSize="2xl"
            mt="2"
            href="https://twitter.com/yourusername"
            isExternal
            transition="all 0.3s ease"
            _hover={{
              transform: 'scale(1.2)',
              color: 'blue.400',
            }}
          >
            <FaTwitter />
          </Link> */}

          {/* Facebook */}
          <Link
            fontSize="2xl"
            mt="2"
            href="https://facebook.com/ephremalemnew"
            isExternal
            transition="all 0.3s ease"
            _hover={{
              transform: 'scale(1.2)',
              color: 'blue.600',
            }}
          >
            <FaFacebook />
          </Link>


          {/* Instagram */}
          <Link
            fontSize="2xl"
            mt="2"
            href="https://instagram.com/ephy1654"
            isExternal
            transition="all 0.3s ease"
            _hover={{
              transform: 'scale(1.2)',
              color: 'pink.500',
            }}
          >
            <FaInstagram />
          </Link>
          {/* Email */}
          <Link
            fontSize="2xl"
            href="mailto:ephremlamenew@gmail.com"
            transition="all 0.3s ease"
            _hover={{
              transform: 'scale(1.2)',
              color: 'red.500',
            }}
          >
            <FaEnvelope />
          </Link>
        </VStack>
      )}
    </Box>
  );
};

export default SocialMediaLinks;
