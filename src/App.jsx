import { useState } from 'react'

import NavBar from './components/common/NavBar'
import { Routes, Route } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import { useColorModeValue } from './components/ui/color-mode'
import HomePage from './pages/HomePage'
function App() {
  

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <NavBar  />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
      
    </Box>
  )
}

export default App
