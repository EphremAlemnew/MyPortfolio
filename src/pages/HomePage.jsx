import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Stack, Image, Blockquote, BlockquoteIcon,Float } from '@chakra-ui/react';
import ContactMe from './ContactMe';
import About from './About';
import Projects from './Projects';
import Experiences from './Experiences';
import MyPhoto from '../assets/My.png';
import { Toaster } from '@/components/ui/toaster';

const HomePage = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Mobile App Developer.', 'Web App Developer.'];
  const typingSpeed = 150; // Typing speed in ms
  const deletingSpeed = 50; // Deleting speed in ms
  const delayAfterTyping = 2000; // Delay after typing before deleting
  const transitionDelay = 500; // Delay between text transitions

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        // Typing phase
        const nextText = fullText.slice(0, currentText.length + 1);
        setCurrentText(nextText);

        if (nextText === fullText) {
          // Text fully typed, pause before deleting
          timeout = setTimeout(() => setIsDeleting(true), delayAfterTyping);
        } else {
          timeout = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        // Deleting phase
        const nextText = currentText.slice(0, currentText.length - 1);
        setCurrentText(nextText);

        if (nextText === '') {
          // Text fully deleted, move to the next text
          timeout = setTimeout(() => {
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, transitionDelay);
        } else {
          timeout = setTimeout(handleTyping, deletingSpeed);
        }
      }
    };

    timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [currentText, isDeleting, textIndex]);

  return (
    <VStack spacing={16} mt={16} mx={{ lg: '80' }} align="stretch">
      <Toaster />
      <Box id="home" p="8">
  <Stack
    py={"64"}
    borderBottom="md"
    direction={{ base: 'column', lg: 'row' }}
    align="center"
    spacing={4}
    justify={{ lg: 'space-between' }}
  >
    {/* Text Section */}
    <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={4}>
      <Text fontWeight="bolder" fontSize={{ base: '2xl', md: '3xl' }} alignSelf="start">
        Ephrem Alemnew
      </Text>
      <Text
        fontWeight="extrabold"
        fontSize={{ base: '3xl', md: '7xl' }}
        textAlign={{ base: 'center', lg: 'left' }}
      >
        {currentText}
        <span style={{ color: 'gray' }}>|</span>
      </Text>
      
      <Text
        fontSize={{ base: 'md', lg: 'lg' }}
        color="gray.500"
        textAlign={{ base: 'center', lg: 'left' }}
        mt={4} fontStyle={'italic'}
      >
        Welcome to my portfolio! I am passionate about creating high-quality mobile and web
        applications that deliver value and enhance user experiences. Feel free to explore my
        journey, projects, and the tools I work with. Let’s build something amazing together!
      </Text>
    </VStack>

    {/* Image Section */}
    <Image
      src={MyPhoto}
      rounded="2xl"
      boxSize={{ base: '48', md: '64' }}
      alt="My photo"
    />
  </Stack>
</Box>

      <About />
      <Projects />
      <Experiences />
      <ContactMe />
    </VStack>
  );
};

export default HomePage;
