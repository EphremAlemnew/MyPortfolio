import TechCards from '@/components/common/TechCards'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { techData } from '@/data/data'
const Experiences = () => {
  return (
    <Box id='experiences' p={'8'}  >
      <Box  p={'2'} borderBottom="md" py={{lg:"64"}}>
      <Heading as="h1" size="4xl" fontWeight={'bolder'}>Experiences </Heading>
          <Text m={4} fontWeight={'bold'} fontSize={'xl'}>
          Here are the programming languages, frameworks, technologies, and tools that power my craft and fuel my passion for building exceptional solutions.
          </Text>
          <SimpleGrid columns={{
          base:2,
          md:3,
          lg:4
        }} gap={4} h={'full'} w={'full'} >
          {techData.map((tech) => (
           <TechCards key={tech.id} tech={tech}/>
        ))}
         
        
        </SimpleGrid>
      </Box>
          
        </Box>
  )
}

export default Experiences