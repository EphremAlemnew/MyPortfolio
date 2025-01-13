import TechCards from '@/components/common/TechCards'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { techData } from '@/components/common/data'
const Experiences = () => {
  return (
    <Box id='experiences' p={'8'}  >
      <Box  p={'8'} borderBottom="md" py={{lg:"64"}}>
      <Heading as="h1" size="4xl" fontWeight={'bolder'}>Experiences </Heading>
          <Text m={4} fontWeight={'bold'} fontSize={'xl'}>
          This are programming languages, frameworks and technologies i am working with.
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