import { Box, Button, Heading, HStack, Image, Text, Tag, Flex, } from '@chakra-ui/react';
import React from 'react';
import { toaster } from '../ui/toaster';

const ProjectCard = ({ projects }) => {
  // Function to handle opening the project code URL
  const openProjectUrl = (url) => {
    if (!url) {
      toaster.create({
        title: 'Sorry, this project has no URL at this moment.',
        type: "warning",
      });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <Box
      shadow={'lg'}
      rounded={'lg'}
      overflow={'hidden'}
      transition={'all 0.3s'}
      _hover={{ transform: 'translateY(-5px)', shadow: '2xl' }}
      p={4}
    >
      {/* Project Image */}
      <Box>
        <Image
          src={projects.image}
          alt={projects.name}
          objectFit={'cover'}
          w={'full'}
          h={'200px'}
          rounded={'lg'}
          fallbackSrc="/placeholder.png" // Optional fallback image
        />
      </Box>

      {/* Project Details */}
      <Box mt={4}>
        {/* Project Name */}
        <Heading as={'h4'} size={'md'}>{projects.name}</Heading>

        {/* Project Technologies */}
        <Text fontSize={'sm'} mt={2}>Technologies: {projects.proTech}</Text>
       

        {/* Action Buttons */}
        <HStack justifyContent={'space-between'} w={'full'} mt={4}>
          <Button
            colorScheme={'orange'}
            variant="solid"
            onClick={() => openProjectUrl(projects.proUrl)}
          >
            View Project
          </Button>
          <Button
            colorScheme={'blue'}
            variant="outline"
            onClick={() => openProjectUrl(projects.codeUrl)}
          >
            View Code
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
