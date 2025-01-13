import { Box, Button, Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { toaster } from '../ui/toaster';

const ProjectCard = ({ projects }) => {
  // Function to handle opening the project code URL
  const openProjectUrl = (url) => {
    if(url==''){
        toaster.create({
              title: 'Sorry project has no url at this moment',
              type: "warning",
            })
    }else{
        window.open(url, '_blank');
    }
    
  };

  return (
    <Box key={projects.id}>
      <Box
        shadow={'lg'}
        rounded={'lg'}
        overflow={'hidden'}
        transition={'all 0.3s'}
        _hover={{ transform: 'translateY(-5px)', shadow: '2xl' }}
      >
        <Box p={4} alignItems={'center'}>
          <Image
            src={projects.image}
            h={'56'}
            alt={'vite'}
            rounded={'lg'}
            alignSelf={'center'}
          />
          <Heading textAlign={'center'} as={'h4'} size={'sm'} m={2}>
              {projects.name}
            </Heading>
          <HStack justifyContent={'space-between'}>
            {/* Button that opens the code URL */}
            <Button bg={'orange.500'} onClick={() => openProjectUrl(projects.proUrl)}>
              Url
            </Button>
            <Button onClick={() => openProjectUrl(projects.codeUrl)}>
              Code
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
