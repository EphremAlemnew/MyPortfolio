import { useState } from 'react'

import NavBar from './components/common/NavBar'
import { Routes, Route } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import { useColorModeValue } from './components/ui/color-mode'
import HomePage from './pages/HomePage'
import '@fontsource/roboto'
import '@fontsource/inter'
import '@fontsource/poppins'
import '@fontsource/lora'
import '@fontsource/montserrat'
import '@fontsource/nunito'
import '@fontsource/playfair-display'
import '@fontsource/raleway'
const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      <NavBar onNavigate={scrollToSection} />
      <HomePage />
    </Box>
  );
};

export default App;

