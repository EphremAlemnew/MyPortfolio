import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const TechCards = ({tech}) => {
  return (
    <Box key={tech.id}>
 
        <Box shadow={'lg'}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    _hover={{transform: "translateY(-5px)", shadow:"xl"}}
        >

        
        <Box  p={4}>
        <Image src={tech.techImage} h={'16'} alt={tech.techName} rounded={'lg'} objectFit={'contain'}/>
            <Heading as={'h3'} size={'md'} m={2}>
               {tech.techName}
            </Heading>
        </Box>
        
        </Box>

    </Box>
   
  )
}

export default TechCards