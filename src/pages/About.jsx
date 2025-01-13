import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Box id='about' p={'8'} 
     >
      <Box  p={'2'} borderBottom="md" py={{lg:"64"}}>
      <Heading as="h1" size="4xl"  fontWeight={'extrabold'}>About </Heading>
          <Text mt={4}  fontFamily="lora" fontSize={{base:'sm', md:'xl'}} >
          I am a passionate Full-Stack Developer dedicated to creating impactful web and mobile applications that blend cutting-edge technology with intuitive design. I thrive on transforming ideas into reality, delivering solutions that are scalable, efficient, and built to last.
          With a keen eye for detail and a commitment to excellence, I specialize in developing seamless user experiences and robust systems that drive results. From responsive web applications to cross-platform mobile solutions and scalable backend systems, my work is crafted to elevate your project and bring your vision to life.
          </Text>
      </Box>
          
        </Box>
  )
}

export default About