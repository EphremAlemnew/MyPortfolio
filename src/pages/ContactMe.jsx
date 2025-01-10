import React, { useState } from "react";
import { 
  Box, 
  Heading, 
  Text, 
  Input, 
  Button,
  Textarea,
  VStack, 

} from "@chakra-ui/react";

const ContactMe = () => {

  return (
    <Box id='contact' p={'8'} 
    >
      <Box  p={'8'} borderBottom="md" py={{lg:"60"}}>
        <VStack>
        <Heading as="h1" size="4xl" fontWeight={'bolder'} alignSelf={'start'}>Contact me</Heading>
      <Text mb={6} alignSelf={'start'} fontWeight={'bold'} fontSize={'xl'}>
        Feel free to get in touch by filling out the form below. I'd love to
        hear from you!
      </Text>
      <Input 
                        placeholder='Your Name' 
                        name='name' 
                        />
                        
                    <Input my={4}
                        placeholder='Email Address' 
                        name='price' 
                       
                        />
                    <Textarea height={16}
                        placeholder='Message' 
                        name='image' 
                        size={'md'}
                        h={'36'}
                        
                        />
        <Button
          type="submit"
          colorScheme="blue"
          alignSelf={'end'}
          width={'1/3'}
          mt={4}
        >
          Send
        </Button>
        </VStack>
      
      </Box>
          
        </Box>
  );
};

export default ContactMe;
