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
import { toaster } from "@/components/ui/toaster";

const ContactMe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = () =>{
    if(!name || !email || !message){
      toaster.create({
        title: 'Sorry, Fill all required fields!',
        type: "error",
      })
    }else{
      toaster.create({
      title: 'Message sent Successfully',
      type: "success",
    })
    }
    
  }
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
          onClick={()=>handleSubmit()}
        >
          Send
        </Button>
        </VStack>
      
      </Box>
          
        </Box>
  );
};

export default ContactMe;
