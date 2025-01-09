import { useState } from 'react'

import NavBar from './components/common/NavBar'
import { Routes, Route } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import { useColorModeValue } from './components/ui/color-mode'
import HomePage from './pages/HomePage'

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

