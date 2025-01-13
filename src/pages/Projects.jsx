import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { projectsData } from '@/data/data'
import ProjectCard from '@/components/common/ProjectCard'
const Projects = () => {
  return (
    <Box id='projects' p={'8'}  >
      <Box  p={'2'} borderBottom="md" py={{lg:"64"}}>
      <Heading as="h1" size="4xl" fontWeight={'bolder'}>Projects </Heading>
          <Text m={4} fontWeight={'bold'} fontSize={'xl'}>
          Discover a selection of projects that demonstrate my ability to turn ideas into impactful solutions.
          </Text>
          <SimpleGrid columns={{
          base:1,
          md:3,
          lg:4
        }} gap={4} h={'full'} w={'full'} >
          {projectsData.map((pro) => (
           <ProjectCard key={pro.id} projects={pro}/>
        ))}
        </SimpleGrid>
      </Box>
          
        </Box>
  )
}

export default Projects